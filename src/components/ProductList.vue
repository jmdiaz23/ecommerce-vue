<template>
  <div class="store-container">
    <!-- Categorías -->
    <div class="categories">
      <div v-for="category in categories" :key="category.id" class="category-item">
        <img :src="category.image" alt="Category Icon" />
        <p>{{ category.name }}</p>
      </div>
    </div>

    <!-- Productos -->
    <div class="product-grid">
      <div v-for="product in products" :key="product.id" class="product-card">
        <img :src="product.images[0]" alt="product image" class="product-image" />
        <h3>{{ product.title }}</h3>
        <p>{{ formatPrice(product.price) }}</p>
        <button @click="addToCart(product)">
          <i class="fas fa-shopping-cart"></i> Añadir al carrito
        </button>
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
      categories: [],
    };
  },
  methods: {
    formatPrice(price) {
      return `$${price.toFixed(2)}`;
    },
    addToCart(product) {
      console.log(`Producto añadido: ${product.title}`);
      // Lógica para añadir el producto al carrito
    },
  },
  async created() {
    try {
      const [productsResponse, categoriesResponse] = await Promise.all([
        api.getProducts(),
        api.getCategories(),
      ]);
      this.products = productsResponse.data;
      this.categories = categoriesResponse.data;
    } catch (error) {
      console.error('Error loading data:', error);
    }
  },
};
</script>
  
  <style scoped>
  .product-list {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
  .product-item {
    border: 1px solid #ccc;
    padding: 16px;
    width: 200px;
  }
  .product-item img {
    max-width: 100%;
  }
  </style>
  