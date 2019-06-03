import Vue from 'vue';
import './buefy';
import './registerServiceWorker';
import '@/assets/style.scss';
import '@/firebase';
import App from './App.vue';
import auth from './auth';
import router from './router';
import store from './store/index';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
  beforeCreate() {
    auth.init(this);
  },
}).$mount('#app');
