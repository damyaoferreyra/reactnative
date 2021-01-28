// responsável por disponibilizar os metodos HTTP para acesso a API.
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.0.8:3000', // Mac OS..
  // baseURL: 'http://localhost:3000', // Emulador do Android
  // baseURL: 'http://localhost:3000', // Android
  // baseURL: 'http://IP_LOCAL:3000', // USB
});

export default api;
