import { defineConfig } from '@umijs/max';
export default defineConfig({
  antd: {},
  crossorigin: true,
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'Yan (Claude) Zhang',
  },
  locale: {
    default: 'en-US',
    baseSeparator: '-',
  },
  favicons: ['https://www.svgrepo.com/show/36178/universe.svg'],
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: 'home',
      path: '/home',
      component: './Home',
      icon: 'home',
    },
    {
      name: 'posts',
      path: '/posts',
      component: './Posts',
      icon: 'read',
    },
    { path: '/posts/:postId', component: './Posts/$postId' },
    {
      name: 'rss',
      path: '/rss',
      component: './RSS',
      icon: 'NotificationOutlined',
    },
  ],
  npmClient: 'yarn',
  dva: {},
  tailwindcss: {},
  proxy: {
    '/api': {
      target: 'https://proxy.claudezss.com/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
    '/rss-api': {
      target: 'https://hnrss.org/',
      changeOrigin: true,
      pathRewrite: { '^/rss-api': '' },
    },
  },
});
