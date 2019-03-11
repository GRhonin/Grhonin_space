import Vue from 'vue';
import App from './App';
import store from './store';
import router from './router';
import ElementUI from 'element-ui';
import http from './utils/http.js';
import VueAwesomeSwiper from 'vue-awesome-swiper';

import './assets/reset.css';
import 'swiper/dist/css/swiper.css';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/icon/iconfont.css';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper);
Vue.prototype.$http = http;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
