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
  ],
  npmClient: 'yarn',
  dva: {},
});
