import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8888/products'
})

export default api;