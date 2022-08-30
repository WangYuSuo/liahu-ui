import React, { FC } from 'react';
import { Button } from 'antd';
import { ButtonProps } from 'antd/es/button';
import './styles/style.scss';

interface ButtonType extends Omit<ButtonProps, 'onClick'> {
  /**
   * 按钮默认文本
   */
  txt?: string;
  /**
   * 点击按钮时触发的函数，其参数 completeCallback 需要在接口请求完毕后调用，用于告知组件接口请求已完成。
   */
  onClick?: (completeCallback: () => void) => void;
}

const HuButton: FC<ButtonType> = ({
  txt = '按钮',
  onClick = (completeCallback) => {
    completeCallback();
  },
  ...rest
}) => {
  const completeCallback = () => {
    console.log('接口回调');
  };

  return (
    <Button
      onClick={() => {
        onClick && onClick(completeCallback);
      }}
      {...rest}
    >
      {txt}
    </Button>
  );
};
export default HuButton;
