import Vue from 'vue';
import VueRouter from 'vue-router';

if (!window.VueRouter) Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/zh-CN',
    name: 'home'
  },
  {
    path: '/zh-CN',
    name: 'cn',
    component: require('../pages/zh-CN.vue')
  },
  {
    path: '/en-US',
    name: 'en',
    component: require('../pages/zh-CN.vue')
  },
  { path: '*', redirect: '/' }
];
const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes
});

export default router;
