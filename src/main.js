import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import Home from './components/Home.vue';
import Checkout from './components/Checkout.vue';
import ProductDetail from './components/ProductDetail.vue';
import './main.css';

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  { path: '/', component: Home },
  { path: '/product/:id', component: ProductDetail },
  { path: '/checkout', component: Checkout }
];

const router = new VueRouter({ routes });

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
