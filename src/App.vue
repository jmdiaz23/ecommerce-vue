<template>
  <div id="app">
    <header>
      <h1>Mi Tienda</h1>
    </header>
    <main>
      <ProductList />
    </main>
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue'; // Importa el nuevo componente

export default {
  name: 'App',
  components: {
    ProductList, 
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

header {
  background-color: #42b983;
  padding: 20px;
  color: white;
}

main {
  padding: 20px;
}
</style>
