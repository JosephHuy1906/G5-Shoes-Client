'use client';
import classNames from 'classnames/bind';
import { ReactNode } from 'react';

import styles from './AuthLayout.module.scss';

import { ELocalStorageKey } from '@/core/common/constants/common.constant';
const cx = classNames.bind(styles);

function AuthLayout({ children }: { children: ReactNode }) {
   
    return (
        <div id="auth" className={cx('primary-layout')}>
            <main className={cx('contents')}>
                <div className={cx('container')}>{children}</div>
            </main>
        </div>
    );
}

export default AuthLayout;
