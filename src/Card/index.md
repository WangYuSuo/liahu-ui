---
nav:
  title: 组件
  path: /components
  order: 1
group:
  path: /components
  title: 组件
---

## HuCard 虎虎卡片

Demo:

```tsx
import React from 'react';
import { HuCard } from 'liahu-ui';

let data = {
  viewMore: true,
  highlight: {
    title: '为什么<em>JavaScript</em>这么难学啊？',
    description:
      '（错误的理解是：<em>JS</em>就是写代码 特点是乱七八糟） 2 必不可少的清晰的学习路线 第一阶段：<em>JS</em>基础 包括：<em>JS</em>基本语法，<em>JS</em>循环语句，函数和数组 <em>JS</em>对象 <em>JS</em>浏览器BOM和HTML',
  },
  object: {
    url: 'https://api.zhihu.com/answers/1965877391',
    created_time: 1624848564,
    excerpt:
      '（错误的理解是：<em>JS</em>就是写代码 特点是乱七八糟） 2 必不可少的清晰的学习路线 第一阶段：<em>JS</em>基础 包括：<em>JS</em>基本语法，<em>JS</em>循环语句，函数和数组 <em>JS</em>对象 <em>JS</em>浏览器BOM和HTML',
    content: `<p data-pid=\"wnnldROL\">本人前端，学过java， 说说我的理解吧。</p><p data-pid=\"YMbDkKl4\">学习某种语言的难度取决于你想用它来做什么，如果你只是想用js去辅助一些网页的效果，那js还是很简单的，几天就入门。但你想要理解js所能做的事，那么涵盖的太广了，能划分多个领域，细分多种行业。单就H5游戏引擎和web网页应用同样都是JS你读起来完全就像另一种语言，更别提node，canvas这些简直是生殖隔离。</p><p data-pid=\"z1a0yiz-\">不过幸运的是在工作中很少能遇到让你用js解决所有问题，开发不同产品的场景，这也是脚本语言的特性导致的。你不用完全掌握整个体系，只需要一点点够用的范围就能让你吃到饭了。</p><p data-pid=\"aVpfft2s\">相反java的话你需要了解一系列前置规则和范式，入门后照着模式搞就行了。</p><p data-pid=\"Rav4kboe\">有人说JS是动态语言，所以更简单的你笑笑就可以了。</p><p></p>`,
    author: {
      name: '虎哥！',
    },
  },
};

export default () => <HuCard {...data} />;
```

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
