import React, { FC, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import './styles/style.scss';

interface cardData {
  id: string;
  viewMore: Boolean;
  buttontxt: string;
  highlight: {
    title: string;
    description: string;
  };
  object: {
    url: string;
    created_time: number;
    view_count: number;
    updated_time: number;
    excerpt: string;
    content: string;
    author: {
      name: string;
    };
    relation: {
      praise_count: number;
      praise: number;
      disagree: number;
    };
  };
  actions?: (res: object) => void;
}

const HuCard: FC<cardData> = ({
  id,
  highlight,
  object,
  viewMore,
  buttontxt = '阅读全文',
  actions = () => {},
}) => {
  const [showMore, setShowMore] = useState(viewMore);
  const [btntxt, setBtn] = useState(buttontxt);
  const [praiseCount, setCount] = useState(object.relation?.praise_count);
  const [isPraise, setPraise] = useState(object.relation?.praise);
  const [disagree, setDisagree] = useState(object.relation?.disagree);
  const [praiseTxt, setPraiseTxt] = useState('赞同');

  const goPraise = (type = 1) => {
    if (type == 1) {
      if (isPraise) {
        setPraiseTxt('赞同');
        setCount(praiseCount - 1);
      } else {
        setPraiseTxt('已赞同');
        setDisagree(0);
        setCount(praiseCount + 1);
      }
      setPraise(Number(!isPraise));
    } else {
      if (!disagree) {
        setDisagree(1);
        setPraiseTxt('赞同');
        isPraise && setCount(praiseCount - 1);
        setPraise(0);
      }
      setDisagree(Number(!disagree));
    }
    actions && actions({ type, id });
  };
  const changeBtn = () => {
    setShowMore(showMore ? false : true);
    setBtn(showMore ? '收起' : '阅读全文');
  };
  const showTime = (time: number, type: string = 'showYear') => {
    if (!time) return '';
    let text = '';
    if (type === 'showYear') {
      let newT = dayjs(time * 1000).format('YYYY-MM-DD HH:mm');
      text = `编辑于 ${newT}`;
    } else {
      text = dayjs(time * 1000).format('YYYY-MM-DD');
    }
    return text;
  };

  useEffect(() => {
    isPraise && setPraiseTxt('已赞同');
  }, []);

  // 模版返回
  return (
    <div className="result-card">
      <div className="list-item">
        <div className="content-item">
          <div className="content-item-title">
            <a href={object.url}>
              <div className="high-light">
                <span dangerouslySetInnerHTML={{ __html: highlight.title }}></span>
              </div>
            </a>
          </div>
          <div className="rich-content">
            {showMore ? (
              <div className="richContent-inner">
                <span className="rich-text">
                  <span className="author-name">{object.author.name}：</span>
                  <span
                    dangerouslySetInnerHTML={{ __html: object.excerpt.slice(0, 85) + '...' }}
                  ></span>
                </span>
                <button onClick={changeBtn} type="button" className="content-li-more button-plain">
                  <span>{btntxt}</span>
                  <span className="svg_box">
                    &#8203;
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      data-new-api="ArrowDownSmall24"
                      data-old-api="ArrowDown"
                      className="Zi Zi--ArrowDown ContentItem-arrowIcon"
                      fill="currentColor"
                    >
                      <path d="M12 13.248L8.22 9.223a.684.684 0 00-1.01 0 .796.796 0 000 1.075l4.15 4.42a.867.867 0 001.28 0l4.15-4.42a.796.796 0 000-1.075.684.684 0 00-1.01 0L12 13.248z"></path>
                    </svg>
                  </span>
                </button>
              </div>
            ) : (
              <div className="richContent-inner">
                <span dangerouslySetInnerHTML={{ __html: object.content }}></span>
                <div className="content-item-time">
                  <a>{showTime(object.updated_time)}</a>
                </div>
                <div>
                  <div className="content-item-actions">
                    <button
                      onClick={changeBtn}
                      type="button"
                      className="content-li-more button-plain"
                    >
                      <span>{btntxt}</span>
                      <span className="svg_box">
                        &#8203;
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          data-new-api="ArrowDownSmall24"
                          data-old-api="ArrowDown"
                          className="is-active"
                          fill="currentColor"
                        >
                          <path
                            d="M12 13.248L8.22 9.223a.684.684 0 00-1.01 0 .796.796 0 000 1.075l4.15 4.42a.867.867 0 001.28 0l4.15-4.42a.796.796 0 000-1.075.684.684 0 00-1.01 0L12 13.248z"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            )}
            {object.relation && (
              <div className="feedback_boxs">
                <div className="feedback_box css-q1mqvc">
                  <span>
                    <button
                      type="button"
                      onClick={() => goPraise()}
                      className={`Button VoteButton VoteButton-up ${isPraise && 'praised'}`}
                    >
                      <span>
                        &#8203;
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          className="Zi Zi--TriangleUp VoteButton-TriangleUp"
                          fill="currentColor"
                        >
                          <path
                            d="M13.792 3.681c-.781-1.406-2.803-1.406-3.584 0l-7.79 14.023c-.76 1.367.228 3.046 1.791 3.046h15.582c1.563 0 2.55-1.68 1.791-3.046l-7.79-14.023Z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                      {praiseTxt + ' '}
                      {praiseCount || ''}
                    </button>
                    <button
                      type="button"
                      onClick={() => goPraise(2)}
                      className={`Button VoteButton VoteButton-down ${disagree && 'praised'}`}
                    >
                      <span>
                        &#8203;
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          className="Zi Zi--TriangleDown"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M13.792 20.319c-.781 1.406-2.803 1.406-3.584 0L2.418 6.296c-.76-1.367.228-3.046 1.791-3.046h15.582c1.563 0 2.55 1.68 1.791 3.046l-7.79 14.023Z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </button>
                  </span>
                  <span className="create-time">{showTime(object.created_time, '!showYear')}</span>
                  <span className="view-count">
                    <svg
                      data-v-a8958c90=""
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        data-v-a8958c90=""
                        d="M7.90078 2.80078C4.49278 2.80078 1.74745 6.11672 0.800781 7.77469C1.74745 9.58339 4.49278 13.2008 7.90078 13.2008C11.3088 13.2008 14.0541 9.58339 15.0008 7.77469C14.0541 6.11672 11.3088 2.80078 7.90078 2.80078Z"
                        stroke="currentColor"
                      ></path>
                      <circle
                        data-v-a8958c90=""
                        cx="7.89922"
                        cy="8.00078"
                        r="2.2"
                        stroke="currentColor"
                      ></circle>
                    </svg>
                    &nbsp;{object.view_count}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HuCard;
