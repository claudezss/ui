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
