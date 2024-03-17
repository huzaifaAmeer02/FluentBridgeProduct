import axios, { AxiosInstance } from "axios";
// @ts-ignore
import BASE_URL from '../config/ApiConfig';


const instance: AxiosInstance = axios.create({
    baseURL: BASE_URL
});

instance.interceptors.request.use(
    (config) => {
        let token = document.cookie.split('; ')
            .find(record => record.startsWith('token=')) || null;
        token = token?.split('=')[1] ?? null; // Use nullish coalescing operator to handle undefined
        config.headers.Authorization = token;
        return config;
    },
    (error) => { return Promise.reject(error) }
);

export default instance;
