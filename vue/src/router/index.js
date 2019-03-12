import Vue from 'vue';
import Router from 'vue-router';
import { Home, Official, Product, Login, Profile, Cart, Order, Address, Test, AddressEdit, ProductList } from '../views';

Vue.use(Router);

let router = new Router({
        routes: [
                { path: '/', name: 'Home', component: Home },
                { path: '/official', name: 'official', component: Official },
                { path: '/product/:cid', name: 'product', component: Product },
                { path: '/login', name: 'login', component: Login, meta: { requireAuth: true } },
                { path: '/profile', name: 'profile', component: Profile, meta: { requireAuth: true }  },
                { path: '/cart', name: 'cart', component: Cart, meta: { requireAuth: true }  },
                { path: '/order', name: 'order', component: Order, meta: { requireAuth: true }  },
                { path: '/address', name: 'address', component: Address, meta: { requireAuth: true }  },
                { path: '/test', name: 'test', component: Test },
                { path: '/addressedit', name: 'addressedit', component: AddressEdit, meta: { requireAuth: true }  },
                { path: '/ProductList', name: 'rroductlist', component: ProductList }
        ]
});
//需要登录才能看的页面的重定向
// export function RedirectToLogin(){
//         router.push({ to: '/login', params: { redirect: router.currentRoute.fullPath } });
// }
export default router;