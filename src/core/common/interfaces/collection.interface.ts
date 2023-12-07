import { ROLE_CUSTOMER } from '../constants/common.constant';

export interface IUser {
    _id: string;
    email: string;
    name: string;
    refreshToken: string;
    password?: string;
    avatarUrl?: string;
    avatarS3: {
        bucketName: string;
        keyObject: string;
        contentType: string;
    } | null;
    locale?: string;
    isPendingUpgradeComposer?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}



export interface IComposer {
    _id: string;
    name: string;
    avatar?: string;
    nickname: string;
    country?: string;
    userReference: string;
    albumsReference?: string | string[];
    songsReference?: string | string[];
}


export interface ISongPath {
    _id: string;
    path: string;
    size: number;
    duration: number;
    type: string;
}

