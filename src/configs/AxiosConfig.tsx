import { LocalStorageSide } from '@/utils/clientStore.util';
import axios from 'axios';

const localStorageInstance = new LocalStorageSide();
const AxiosConfig = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorageInstance.getStore('access_token')}`,
    },
});

export default AxiosConfig;
