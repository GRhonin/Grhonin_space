import Vue from 'vue';
import Vuex from 'vuex';
import http from '../utils/http';
Vue.use(Vuex);

import home from './home.js';
import mainstore from './mainstore.js';
import product from './product.js';
import dialog from './dialog.js';
import alert from './alert';
import account from './account';
import cart from './cart';

const store = new Vuex.Store({
        modules: { home, mainstore, product, dialog, alert, account, cart },
        state: { $http: http },
        getters: {},
        mutations: {},
        actions: {}
});

export default store;