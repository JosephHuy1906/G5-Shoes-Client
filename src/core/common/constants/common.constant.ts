export enum EScopeClientStore {
    LOCAL_STORAGE = 'localStoreSide',
    SESSION_STORAGE = 'sessionStoreSide',
    COOKIE = 'cookieSide',
}

export enum ELocalStorageKey {
    G5SHOES_USER_TOKEN = 'g5shoes_user_token',
    STRATEGIES = 'strategies ',
    PROFILE = 'profile',
}



export enum ROLE_CUSTOMER {
    USER = 'user',
    ROOT_ADMIN = 'root_admin',
    COMPOSER = 'composer',
}

export enum EDateFormat {
    DD_MM_YYYY = 'dd/MM/yyyy',
    YYYY_MM_DD = 'yyyy/MM/dd',
}

export const REGEX = {
    EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
};

export enum EStrategiesPlaying {
    RANDOM = 'random',
    LOOP = 'loop',
    SEQUENTIALLY = 'sequentially',
}
