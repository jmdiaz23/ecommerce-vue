<template>
  <div class="product-list">
    <h1>Products</h1>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div v-for="product in products" :key="product.id" class="product-item">
        <img :src="product.images[0]" alt="product image" />
        <h2>{{ product.title }}</h2>
        <p>{{ formatPrice(product.price) }}</p> <!-- Usando un método -->
      </div>
    </div>
  </div>
</template>

<script>
import api from '../services/api';

export default {
  data() {
    return {
      products: [],
      loading: true,
    };
  },
  methods: {
    formatPrice(price) {
      return `$${price.toFixed(2)}`;
    },
  },
  async created() {
    try {
      const response = await api.getProducts();
      this.products = response.data;
    } catch (error) {
      console.error('Error loading products:', error);
    } finally {
      this.loading = false;
    }
  },
};
</script>
