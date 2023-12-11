import { ROLE_CUSTOMER } from '../constants/common.constant';

export interface IUser {
    id: string;
    email: string;
    name: string;
    address?: string;
    password: string;
    avatar?: string;
    phone?: string;
    levelID: number;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface IProduct {
    id: string;
    name: string;
    img1: string;
    img2: string;
    img3: string;
    img4: string;
    oldPrice: number;
    newPrice: number;
    categoryID: string;
    description: string;
    size: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface ICart {
    id: string;
    name: string;
    price: number;
    img1: string;
    sale: string;
    total: number;
    size: number | null;
    quantity: number;
}


export interface ISearch {
    product: IProduct[];
}