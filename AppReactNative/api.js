import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.x.x:3000/api', // Substitua pelo IP da sua máquina
    timeout: 5000,
    headers: { 'Content-Type': 'application/json' },
});

export default api;