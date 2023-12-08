import { ROLE_CUSTOMER } from '../constants/common.constant';

export interface IUser {
    _id: string;
    email: string;
    name: string;
    refreshToken: string;
    password?: string;
    avatarUrl?: string;
    locale?: string;
    isPendingUpgradeComposer?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface IProduct {
    _id: string;
    name: string;
    img1: string;
    img2: string;
    img3: string;
    img4: string;
    price: number;
    size: number;
    createdAt?: Date;
    updatedAt?: Date;
}


export interface ISearch{
    product: IProduct[];
}