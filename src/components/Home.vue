<template>
  <main class="home">
    <SearchInput v-model="searchValue" :on-change="onInputChange" />
    <div>
      <button
        :class="['product-list-selector', productListType === 'popular' ? 'active' : '']"
        @click="onListTypeClick('popular')"
      >
        popular
      </button>
      <button
        :class="['product-list-selector', productListType === 'newest' ? 'active' : '']"
        @click="onListTypeClick('newest')"
      >
        newest
      </button>
    </div>
    <div v-if="shopProducts.length > 0">
      <ProductCard
        v-for="(product, idx) in shopProducts"
        :key="idx"
        :product="product"
        :add-to-cart="addToCart"
      />
    </div>
  </main>
</template>

<script>
import ProductCard from './ProductCard.vue';
import SearchInput from './SearchInput.vue';

export default {
  name: 'Home',
  props: ['addToCart', 'products'],
  components: { ProductCard, SearchInput },
  data: () => ({
    searchValue: '',
    shopProducts: [],
    productListType: 'popular'
  }),
  mounted() {
    this.shopProducts = this.products.slice().sort(this.sortByRating);
  },
  watch: {
    products: function() {
      this.shopProducts = this.products.slice().sort(this.sortByRating);
    }
  },
  methods: {
    sortByRating(a, b) {
      return b.rating - a.rating;
    },
    async onListTypeClick(listType) {
      if (!this.products || !listType) {
        return null;
      }

      this.productListType = listType;

      if (listType === 'popular') {
        const popularGames = this.products.slice().sort(this.sortByRating);
        this.shopProducts = popularGames;

        return popularGames;
      }

      if (listType === 'newest') {
        const recentGames = this.products.slice().sort((a, b) => b.published - a.published);
        this.shopProducts = recentGames;
        return recentGames;
      }
    },
    onInputChange(value) {
      if (value === '') {
        this.shopProducts = this.products;
        return this.shopProducts;
      }

      const updatedProductList = this.products
        .slice()
        .filter(({ name }) => name.toLowerCase().includes(value));

      this.shopProducts = updatedProductList;
      return this.shopProducts;
    }
  }
};
</script>

<style>
.home {
  padding: 1.5rem;
}

.product-list-selector {
  font-size: 1.5rem;
  color: var(--colors-placeholder);
  margin-bottom: 1.5rem;
  background: none;
  border: none;
  outline: none;
  padding: 0;
}

.product-list-selector:first-of-type {
  margin-right: 2rem;
}

.active {
  color: var(--colors-primary);
}
</style>
