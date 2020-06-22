<template>
  <div id="app">
    <CartFlyout
      :show="showCart"
      :cart="cart"
      :set-show-cart="setShowCart"
      :updateCart="updateCart"
    />
    <Header :cart="cart" :set-show-cart="setShowCart" />
    <router-view :products="products" :add-to-cart="addToCart"></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import CartFlyout from './components/CartFlyout.vue';

export default {
  name: 'App',
  components: { Header, CartFlyout },
  data: () => ({
    cart: [],
    products: [],
    showCart: false
  }),
  mounted() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      const apiResult = await fetch(
        'https://qwbegxw1t8.execute-api.us-east-1.amazonaws.com/dev/games'
      );

      const games = await apiResult.json();

      this.products = games;
    },
    updateCart(cart) {
      this.cart = cart;
    },
    addToCart(product) {
      const productIsInCart = this.cart.find(prod => prod.id === product.id);

      if (!productIsInCart) {
        this.cart = [...this.cart, product];
      }
    },
    setShowCart(bool) {
      this.showCart = bool;
    }
  }
};
</script>

<style></style>
