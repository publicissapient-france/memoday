import Vue from 'vue';
import Router, {Route} from 'vue-router';
import Home from './pages/Home.vue';
import Login from './pages/Login.vue';
import {UserModule} from '@/store/user';

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
      component: Login,
      meta: {guestOnly: true},
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
