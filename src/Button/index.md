---
nav:
  title: ''
  path: /components
  order: 1
group:
  path: /components
  title: 组件
---

## Button

Demo:

```tsx
import React from 'react';
import { Button } from 'liahu-ui';

const clickBtn = (res) => {
  console.log('点击按钮');
  res();
};

export default () => (
  <Button onClick={clickBtn} type="primary">
    click me
  </Button>
);
```

LiaHu web button component;
