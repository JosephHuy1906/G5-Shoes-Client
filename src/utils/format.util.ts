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
