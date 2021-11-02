window.Vue = require('vue');

import Router from 'vue-router';
Vue.use(Router)

// トップ画面を構成するLayout
import Layout from './layout/Layout';
import LoginForm from './auth/login';

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      component: LoginForm
    },
    {
    path: '/',
    component: Layout,
    children: [
      {
          path: 'movies',
          component: () => import('./movies/index'),
          name: 'moviePage'
      },
      {
          path: 'movies/:movieId',
          component: () => import('./movies/detail'),
          name: 'movieDetail'
      },
      {
          path: 'ranking',
          component: () => import('./rankings/index'),
          name: 'rankingPage'
      },
      {
          path: 'circles',
          component: () => import('./circles/index'),
          name: 'circlePage'
      },
      {
          path: 'circles/:circleId',
          component: () => import('./circles/detail'),
          name: 'circleDetail',
          props: true,
      },
      {
          path: 'mypage',
          component: () => import('./owns/index'),
          name: 'myPage'
      },
      {
          path: 'userpage/:userId',
          component: () => import('./others/index'),
          name: 'userPage'
      },
    ]
    },
]
})