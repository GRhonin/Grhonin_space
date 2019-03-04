import Vue from 'vue';
import Router from 'vue-router';
import { Home, Official, Product, Login, Profile, Cart, Order, Address, Test, AddressEdit } from '../views';

Vue.use(Router);

let router = new Router({
        routes: [
                { path: '/', name: 'Home', component: Home },
                { path: '/official', name: 'official', component: Official },
                { path: '/product/:cid', name: 'product', component: Product },
                { path: '/login', name: 'login', component: Login },
                { path: '/profile', name: 'profile', component: Profile },
                { path: '/cart', name: 'cart', component: Cart },
                { path: '/order', name: 'order', component: Order },
                { path: '/address', name: 'address', component: Address },
                { path: '/test', name: 'test', component: Test },
                { path: '/addressedit', name: 'addressedit', component: AddressEdit }
        ]
});
//需要登录才能看的页面的重定向
// export function RedirectToLogin(){
//         router.push({ to: '/user', params: { redirect: router.currentRoute.fullPath } });
// }

export default router;