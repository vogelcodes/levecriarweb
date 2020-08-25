import axios from 'axios';

const api = axios.create({
  baseURL: 'https://levecriar.vogelcodes.com',
});

export default api;
