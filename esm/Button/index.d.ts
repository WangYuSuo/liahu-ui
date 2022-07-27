import React, { FC } from 'react';
import './index.less';
interface ButtonProps {
    onClick?: React.MouseEventHandler<HTMLElement>;
    type?: 'default' | 'primary' | 'secondary';
    disabled?: boolean;
    children: any;
}
declare const Button: FC<ButtonProps>;
export default Button;
