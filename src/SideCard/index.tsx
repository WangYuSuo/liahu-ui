import React, { FC, useState } from 'react';
import dayjs from 'dayjs';
import _ from 'lodash';
import './styles/style.scss';

interface cardData {
  title: string;
  words: Array<{ query: string; id: number; display: string }>;
  nodataTxt: string;
  fireUrl: string;
  showHot: {
    num: number;
    txt: string;
  };
}

const HuSideCard: FC<cardData> = ({
  title = '火热阅读',
  words = [],
  nodataTxt = '模块建设中!敬请期待......',
  fireUrl = '/fire?q=',
  showHot = { num: 2, txt: '热' },
}) => {
  return (
    <div className="fire-card">
      <div className="fire-card-head">
        <div className="card-head-txt">{title}</div>
      </div>
      <div className="fire-card-items">
        {(_.get(words, 'length') &&
          _.map(words, (item, index) => {
            return (
              <div className="fire-card-item" key={item.id}>
                <a href={fireUrl + item.query} target="_blank" className="card-item-link">
                  <span className="card-item-txt">{item.display}</span>
                  {index <= showHot.num && <span className="card-item-hot">{showHot.txt}</span>}
                </a>
              </div>
            );
          })) || <div className="fire-no-data">{nodataTxt}</div>}
      </div>
    </div>
  );
};

export default HuSideCard;
