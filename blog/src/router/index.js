import Vue from 'vue';
import Router from 'vue-router';
import Editor from '../pages/editor';
import index from '../pages/index';

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'index', component: index },
    { path: '/editor', name: 'editor', component: Editor }
  ]
})
