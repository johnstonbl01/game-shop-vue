<template>
  <main class="product-detail" v-if="product">
    <img class="product-image" :src="product.url" :alt="productImageAltText" />
    <div class="product-header">
      <h2>{{ product.name }}</h2>
      <h4 class="product-price">${{ product.price }}</h4>
    </div>

    <p>{{ product.desc }}</p>

    <div class="product-footer-layout">
      <div>
        <div class="product-info-layout">
          <img class="icon" src="/users.svg" alt="number of players icon" />
          <span>{{ product.players }} players</span>
        </div>
        <div class="product-info-layout">
          <img class="icon" src="/clock.svg" alt="number of players icon" />
          <span>
            {{ product.gameTimeHours }} {{ product.gameTimeHours === '1' ? 'hour' : 'hours' }}
          </span>
        </div>
        <div class="product-info-layout">
          <img class="icon" src="/star.svg" alt="number of players icon" />
          <span>{{ product.rating }}</span>
        </div>
      </div>
      <button class="product-add-to-bag-btn" @click="addToCart(product)">
        add to bag
      </button>
    </div>
  </main>
</template>

<script>
export default {
  name: 'ProductDetail',
  props: ['addToCart', 'products'],

  computed: {
    productImageAltText() {
      return `Box for ${this.product.name}`;
    },
    product() {
      return this.products.find(prod => prod.id === this.$route.params.id);
    }
  },
  watch: {
    product: function() {
      if (!this.product) {
        this.$router.push('/');
      }
    }
  }
};
</script>

<style>
.product-detail {
  padding: 1.5rem;
}

.product-detail .product-image {
  margin: 0 auto;
  max-height: 268px;
  width: 100%;
  margin-bottom: 1.5rem;
}

.product-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.product-header h2 {
  margin: 0;
}

.product-price {
  margin: 0;
}

.product-detail p {
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  font-size: 0.75rem;
}

.icon {
  height: 1rem;
  width: 1rem;
  margin-right: 1rem;
}

.product-info-layout {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0.5rem 0;
}

.product-footer-layout {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.product-add-to-bag-btn {
  padding: 1rem 2.5rem;
  border-radius: 8px;
  border: 1px solid var(--colors-primary);
  background-color: var(--colors-success);
  font-size: 1.25rem;
  outline: none;
  color: white;
}

.product-add-to-bag-btn:active {
  transform: scale(0.98);
  transition: all 0.2s ease;
  background-color: rgba(23, 185, 120, 0.85);
}
</style>
