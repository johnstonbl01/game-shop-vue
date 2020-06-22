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
    onListTypeClick(listType) {
      if (!this.products || !listType) {
        return null;
      }

      this.productListType = listType;

      return this.filterProductsByListType(listType);
    },
    onInputChange(value) {
      if (value === '') {
        this.shopProducts = this.products;
        return this.shopProducts;
      }

      const sortFn =
        this.productListType === 'newest' ? (a, b) => b.published - a.published : this.sortByRating;

      const updatedProductList = this.products
        .slice()
        .filter(({ name }) => name.toLowerCase().includes(value))
        .sort(sortFn);

      this.shopProducts = updatedProductList;
      return this.shopProducts;
    },
    filterProductsByListType(listType) {
      const sortFn =
        listType === 'newest' ? (a, b) => b.published - a.published : this.sortByRating;

      this.shopProducts = this.products.slice().sort(sortFn);
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
