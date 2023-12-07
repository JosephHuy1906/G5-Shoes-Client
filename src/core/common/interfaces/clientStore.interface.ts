import { ELocalStorageKey, EScopeClientStore } from '../constants/common.constant';
import { IUserToken } from './cookieStore.interface';

export interface IClientStore {
    [EScopeClientStore.LOCAL_STORAGE]: {
        [ELocalStorageKey.G5SHOES_USER_TOKEN]: IUserToken | null;
    };
    [EScopeClientStore.SESSION_STORAGE]: {
        [key: string]: string;
    };
    [EScopeClientStore.COOKIE]: {
        [key: string]: string;
    };
}

export interface IClientStoreSide {
    getStore(key: string): any;
    setStore<T>(key: string, value: T, options?: { expires: number }): void;
}
