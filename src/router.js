import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/index',
      redirect: '/',
    },
    {
      path: '/list',
      name: 'list',
      component: () => import(/* webpackChunkName: "list" */ './views/List.vue'),
    },
    {
      path: '/watch',
      name: 'watch',
      component: () => import(/* webpackChunkName: "watch" */ './views/Watch.vue'),
    },
  ],
});
