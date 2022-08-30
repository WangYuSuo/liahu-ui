---
nav:
  title: 组件
  path: /components
  order: 1
group:
  path: /components
  title: 组件
---

## HuSideCard 虎虎边卡

Demo:

```tsx
import React from 'react';
import { HuSideCard } from 'liahu-ui';

let data = {
  title: '火热阅读',
  nodataTxt: '模块建设中!敬请期待......',
  fireUrl: '/fire?q=',
  words: [
    { query: 'sss', display: '这个是什么', id: 112 },
    { query: 'sss', display: '这个是什么', id: 111 },
  ],
  showHot: {
    num: 0,
    txt: '热',
  },
};

export default () => <HuSideCard {...data} />;
```

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
