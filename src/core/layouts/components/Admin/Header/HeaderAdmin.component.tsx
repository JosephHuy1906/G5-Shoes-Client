import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './HeaderAdmin.module.scss';
import Link from 'next/link';

const cx = classNames.bind(styles);
export default function HeaderAdminComponent() {
    const [popup, setPopup] = useState(false);
    return (
        <header className={cx('header')}>
            <h2 className={cx('header__logo')}>G5 Shoes Admin</h2>
            <div className={cx('header__admin')}>
                <h3 className={cx('header__admin-title')}>Hello admin</h3>
                <div
                    onMouseEnter={() => setPopup(true)}
                    onMouseLeave={() => setPopup(false)}
                    className={cx('header__admin-avatar')}
                >
                    <img src="/images/hinh.png" className={cx('header__admin-img')} />
                </div>

                {popup && (
                    <div
                        onMouseEnter={() => setPopup(true)}
                        onMouseLeave={() => setPopup(false)}
                        className={cx('header__tippy')}
                    >
                        <ul className={cx('header__tippy-list')}>
                            <li className={cx('header__tippy-item')}>
                                <Link href="/" className={cx('header__tippy-link')}>
                                    <span className={cx('header__icon')}>
                                        <i className={cx('fa-solid fa-house header__icon')}></i>
                                    </span>
                                    <span className={cx('header__tippy-title')}>Home</span>
                                </Link>
                            </li>
                            <li className={cx('header__tippy-item js-btn-modal')}>
                                <Link href="/auth/profile/1" className={cx('header__tippy-link')}>
                                    <span className={cx('header__icon')}>
                                        <i className={cx('fa-solid fa-id-badge header__icon')}></i>
                                    </span>
                                    <span className={cx('header__tippy-title')}>Edit Profile</span>
                                </Link>
                            </li>
                            <li className={cx('header__tippy-item')}>
                                <a
                                    href="../controller/UserController.php?act=logout"
                                    className={cx('header__tippy-link')}
                                >
                                    <span className={cx('header__icon')}>
                                        <i className={cx('fa-solid fa-arrow-right-from-bracket')}></i>
                                    </span>
                                    <span className={cx('header__tippy-title')}>Log out</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
}
