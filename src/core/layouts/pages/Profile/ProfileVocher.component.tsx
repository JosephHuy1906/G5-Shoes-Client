import React from 'react';
import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import Link from 'next/link';
const cx = classNames.bind(styles);

export default function ProfileVocherComponent() {
    return (
        <div className={cx('main__wrapper-box')}>
            <h2>tab voucher</h2>
        </div>
    );
}
