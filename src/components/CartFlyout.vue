<template>
  <div :class="['flyout', show ? 'show' : 'hide']">
    <header>
      <h1>cart</h1>
      <div @click="() => setShowCart(false)">
        <img src="/x.svg" alt="close cart" />
      </div>
    </header>
    <div class="product-container">
      <CartProduct v-for="(product, idx) in cart" :key="idx" :product="product" />
    </div>
    <div class="total-layout">
      <h2>Total</h2>
      <h2>${{ calculateTotal(cart) }}</h2>
    </div>
    <div class="checkout-layout">
      <button @click="onCheckoutClick">checkout</button>
    </div>
  </div>
</template>

<script>
import CartProduct from './CartProduct.vue';

export default {
  name: 'CartFlyout',
  components: { CartProduct },
  props: ['setShowCart', 'updateCart', 'cart', 'show'],
  methods: {
    onCheckoutClick() {
      this.setShowCart(false);
      this.$router.push('/checkout');
      this.updateCart([]);
    },
    calculateTotal(cart) {
      return cart.reduce((sum, product) => sum + parseFloat(product.price), 0).toFixed(2);
    }
  }
};
</script>

<style>
.flyout {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 99;
  display: flex;
  flex-direction: column;
  height: 100vh;
  transition: transform 0.3s cubic-bezier(0, 0.52, 0, 1);
}

.flyout.hide {
  transform: translate3d(100vw, 0, 0);
}

.flyoutMenu.show {
  transform: translate3d(-100vw, 0, 0);
  overflow: hidden;
}

.product-container {
  padding: 0 1.5rem 3rem 1.5rem;
  flex-grow: 1;
  overflow: scroll;
}

.total-layout {
  padding: 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid var(--colors-placeholder);
  border-bottom: 2px solid var(--colors-placeholder);
}

.total-layout h2 {
  margin: 0;
}

.checkout-layout {
  padding: 1.5rem;
  background-color: var(--colors-border);
}

.checkout-layout button {
  width: 100%;
  height: 56px;
  border-radius: 8px;
  border: none;
  outline: none;
  background-color: var(--colors-primary);
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
}

.checkout-layout button:active {
  background-color: rgba(8, 105, 114, 0.85);
}
</style>
