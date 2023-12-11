import { EDateFormat } from '@/core/common/constants/common.constant';


export const formatDate = (input: string, type?: EDateFormat): string => {
    if (!input) return '';
    if (!type) type = EDateFormat.DD_MM_YYYY;
    const date = new Date(input);
    switch (type) {
        case EDateFormat.YYYY_MM_DD:
            return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
        default:
            return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }
};

export const formatMonneyCurrency = (amount: number): string => {
    if (isNaN(amount)) return '';

    // Sử dụng hàm toLocaleString để định dạng số thành chuỗi có dấu phẩy phân cách hàng nghìn
    const formattedAmount = amount.toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    return formattedAmount;
};

export const calculateDiscountPercentage = (oldPrice: number, newPrice: number) => {
    if (oldPrice > 0) {
        const discountPercentage = ((oldPrice - newPrice) / oldPrice) * 100;
        return isFinite(discountPercentage) ? Math.round(discountPercentage) : 0;
    } else {
        return 0;
    }
}