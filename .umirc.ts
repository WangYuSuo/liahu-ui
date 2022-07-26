import { defineConfig } from 'dumi';
let BaseUrl = '';

export default defineConfig({
  title: 'LiaHu',
  favicon: BaseUrl + 'https://2587.link/logoicn.ico',
  logo: BaseUrl + 'https://2587.link/logo@2x.png',
  outputPath: 'docs-dist',
  mode: 'site',
  // more config: https://d.umijs.org/config
});
