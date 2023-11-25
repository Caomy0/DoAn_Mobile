import axios from 'axios';

// import { API_BASE_URL } from '@env';

const request = axios.create({
    baseURL: 'https://6561a8bfdcd355c083240864.mockapi.io/',
});

export default request;
