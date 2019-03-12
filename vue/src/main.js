import Vue from 'vue';
import App from './App';
import store from './store';
import router from './router';
import ElementUI from 'element-ui';
import http from './utils/http.js';
import Cookies from 'js-cookie';
import VueAwesomeSwiper from 'vue-awesome-swiper';

import './assets/reset.css';
import 'swiper/dist/css/swiper.css';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/icon/iconfont.css';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper);
Vue.prototype.$http = http;

router.beforeEach(( to, from, next ) => {
        if(to.meta.requireAuth){
                if(Cookies.get('name')){
                        next();
                }else{
                        if(to.path ==='/login'){
                                Cookies.set('topath', '/');
                                next();
                        }else{
                                Cookies.set('topath', to.fullPath);
                                next({
                                        path: '/login'
                                })
                        }
                }
        }else{
                next();
        }
        //如果已经登录但是用户直接输入登录页面则返回当前页面
        if(to.fullPath === '/login'){
                if(Cookies.get('name')){
                        next({
                                path: from.fullPath
                        });
                }else{
                        next();
                }
        }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
