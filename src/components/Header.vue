<template>
  <header>
    <h1 @click="routeToHome">games<span>.</span></h1>
    <div class="cart-container" @click="() => setShowCart(true)">
      <span v-if="cart.length > 0" class="items-in-cart">{{ cart.length }}</span>
      <img src="/shopping-bag.svg" alt="shopping bag" />
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: ['cart', 'setShowCart'],
  methods: {
    routeToHome() {
      this.$router.push('/');
    }
  }
};
</script>

<style>
header {
  border-bottom: 2px solid var(--colors-placeholder);
  padding: 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

h1 {
  margin: 0;
  font-size: 2rem;
  color: var(--colors-secondary);
}

h1 span {
  color: var(--colors-success);
}

.items-in-cart {
  position: absolute;
  top: -6px;
  left: -6px;
  height: 20px;
  width: 20px;
  border-radius: 10px;
  background-color: var(--colors-primary);
  color: white;
  font-size: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0.5px solid var(--colors-highlight);
}

.cart-container {
  position: relative;
}
</style>
