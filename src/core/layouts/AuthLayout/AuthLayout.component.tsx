'use client';
import classNames from 'classnames/bind';
import { ReactNode } from 'react';

import styles from './AuthLayout.module.scss';

import { ELocalStorageKey } from '@/core/common/constants/common.constant';
import HeaderAdminComponent from '../components/Admin/Header/HeaderAdmin.component';
import SiderbarAdminComponent from '../components/Admin/Siderbar/SiderbarAdmin.component';
const cx = classNames.bind(styles);

function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            <HeaderAdminComponent />
            <div className={cx('main')}>
                <SiderbarAdminComponent />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default AuthLayout;
