import axios, { Axios } from 'axios';

const baseUrl = 'http://127.0.0.1:8000/';

const AxiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 50000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
})

AxiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Token ${token}`;
        }
        else{
            config.headers.Authorization = ``;
        }
        return config;
    }
);

AxiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            // Handle unauthorized error (e.g., token expired)
            localStorage.removeItem('token'); // Remove invalid token
            window.location.href = '/login'; // Redirect to login page
        }
    }
);

export default AxiosInstance;