import React from 'react';
import "./index.less";
import { jsx as _jsx } from "react/jsx-runtime";

var Button = function Button(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'dialog' : _ref$type;
  return /*#__PURE__*/_jsx("div", {
    className: 'biz_dev_button',
    onClick: onClick,
    children: children
  });
};

export default Button;