'use client';
import classNames from 'classnames/bind';
import { ReactNode, useCallback, useEffect, useState } from 'react';

import LoadingPage from '@/shared/components/Loading/LoadingPage/LoadingPage.component';
import { usePathname } from 'next/navigation';
import AuthLayout from '../AuthLayout/AuthLayout.component';
import HeaderComponent from '../components/Header/Header.component';
import styles from './PrimaryLayout.module.scss';
import FooterComponent from '../components/Footer/Footer.component';
import SideBarNavigation from '../components/SideBarNavigation/SideBarNavigation.component';

const cx = classNames.bind(styles);

function PrimaryLayout({ children }: { children: ReactNode }) {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [menu, setMenu] = useState<boolean>(false);

    const handlePopupCloseMenu = useCallback(
        (isReload: boolean) => {
            if (isReload) {
                setMenu(false);
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [],
    );
    const handlePopupOpenMenu = useCallback(
        (isReload: boolean) => {
            if (isReload) {
                setMenu(true);
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [],
    );

    const path = usePathname();
    const regex = /\/auth\//;
    const regexNotFound = /^\/not-found$/;
    const condition = regex.test(path) || regexNotFound.test(path);
    useEffect(() => {
        setIsLoading(false);
    }, []);
    return (
        <div id="root">
            {condition && <AuthLayout>{children}</AuthLayout>}
            {isLoading && <LoadingPage />}
            {!condition && (
                <div className={cx('controller')}>
                    <HeaderComponent popup={handlePopupOpenMenu} />
                    <main className={cx('main__wrapper')}>{children}</main>
                    <FooterComponent />
                    {menu && <SideBarNavigation popup={handlePopupCloseMenu} />}
                </div>
            )}
        </div>
    );
}

export default PrimaryLayout;
