import Vue from 'vue';
import Router, {Route} from 'vue-router';
import Home from './pages/Home.vue';
import {UserModule} from '@/store/user';
import Edit from '@/pages/Edit.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: "login" */'@/pages/Login.vue'),
    },
    {
      path: '/edit/:id',
      name: 'Edit',
      component: () => import(/* webpackChunkName: "edit" */'@/pages/Edit.vue'),
    },
  ],
});

router.beforeEach((to: Route, from: Route, next: any) => {
  if (to.path === '/login') {
    next();
  } else if (!UserModule.isLogged) {
    next({
      path: '/login',
    });
  } else {
    next();
  }
});

export default router;
