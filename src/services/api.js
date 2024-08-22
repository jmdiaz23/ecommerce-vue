import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.escuelajs.co/api/v1', // URL base de la API de Platzi Fake Store
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  getProducts() {
    return apiClient.get('/products');
  },
  getProduct(id) {
    return apiClient.get(`/products/${id}`);
  },
};
