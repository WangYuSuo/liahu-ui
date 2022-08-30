import React, { FC, useState } from 'react';
import dayjs from 'dayjs';
import './styles/style.scss';

interface cardData {
  viewMore: Boolean;
  buttontxt: string;
  highlight: {
    title: string;
    description: string;
  };
  object: {
    url: string;
    created_time: number;
    excerpt: string;
    content: string;
    author: {
      name: string;
    };
  };
}

const HuCard: FC<cardData> = ({ highlight, object, viewMore, buttontxt = '阅读全文' }) => {
  const [showMore, setShowMore] = useState(viewMore);
  const [btntxt, setBtn] = useState(buttontxt);

  const changeBtn = () => {
    setShowMore(showMore ? false : true);
    setBtn(showMore ? '收起' : '阅读全文');
  };
  const showTime = (time: number) => {
    let newT = dayjs(time * 1000).format('YYYY-MM-DD HH:mm');
    let text = `编辑于 ${newT}`;
    return text;
  };
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
                  <a>{showTime(object.created_time)}</a>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default HuCard;
