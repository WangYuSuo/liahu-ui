import { defineConfig } from 'dumi';
let BaseUrl = '/liahu-ui';

export default defineConfig({
  title: 'LiaHu',
  favicon: BaseUrl + '/images/logoicn.ico',
  logo: BaseUrl + '/images/logo@2x.png',
  links: [{ rel: 'stylesheet', type: 'text/css', href: '../css/dumi.css' }],
  //按需加载
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
  apiParser: {
    // 自定义属性过滤配置，也可以是一个函数，用法参考：https://github.com/styleguidist/react-docgen-typescript/#propfilter
    propFilter: {
      // 是否忽略从 node_modules 继承的属性，默认值为 false
      skipNodeModules: true,
    },
  },
  // 打包路径配置
  base: BaseUrl,
  publicPath: BaseUrl + '/', // 打包文件时，引入地址生成 publicPath/xxx.js
  outputPath: 'docs-dist',
  hash: true, //加hash配置，清除缓存
  mode: 'site',
  // more config: https://d.umijs.org/config
});
