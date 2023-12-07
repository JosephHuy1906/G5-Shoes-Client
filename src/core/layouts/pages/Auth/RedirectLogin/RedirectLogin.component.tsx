'use client';
import { IUserToken } from '@/core/common/interfaces/cookieStore.interface';
import LoadingPage from '@/shared/components/Loading/LoadingPage/LoadingPage.component';
import { CookieStorageSide } from '@/utils/clientStore.util';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

function RedirectLogin() {
    const router = useRouter();
    

    return (
        <>
            <LoadingPage />
        </>
    );
}

export default RedirectLogin;
