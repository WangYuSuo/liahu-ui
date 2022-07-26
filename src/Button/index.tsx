import React, { FC } from 'react';
import './index.less';
interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLElement>;
  type?: 'default' | 'primary' | 'secondary';
  disabled?: boolean;
  children: any;
}
const Button: FC<ButtonProps> = ({ children, onClick, type = 'dialog' }) => {
  return (
    <div className={'biz_dev_button'} onClick={onClick}>
      {children}
    </div>
  );
};
export default Button;