import axios from 'axios';

// import { API_BASE_URL } from '@env';

const request = axios.create({
    baseURL: 'https://6375fdd2b5f0e1eb85ff2352.mockapi.io/api/v1',
});

export default request;
