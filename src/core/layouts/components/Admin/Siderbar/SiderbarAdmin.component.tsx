import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Siderbar.module.scss';
import Link from 'next/link';
import {
    AccountIcon,
    Bill2Icon,
    CategoryIcon,
    CommentIcon,
    ListBillIcon,
    ProductIcon,
    UserIcon,
} from '@/shared/components/Svg/index.component';

const cx = classNames.bind(styles);

export default function SiderbarAdminComponent() {
    const [activeLink, setActiveLink] = useState('manage-product');

    const handleLinkClick = (link: any) => {
        setActiveLink(link);
    };

    return (
        <div className={cx('sidebar')}>
            <h2 className={cx('sidebar__title')}>Category</h2>
            <ul className={cx('category__list')}>
                <li className={cx('category__item', { active: activeLink === 'manage-product' })}>
                    <Link
                        href={'/auth/home'}
                        onClick={() => handleLinkClick('manage-product')}
                        className={cx('category__content')}
                    >
                        <ProductIcon className={cx('menu-ad')} fill={'#231f20'} />
                        <p className={cx('category__text')}> Manage Product</p>
                    </Link>
                </li>
                <li className={cx('category__item', { active: activeLink === 'manage-comment' })}>
                    <Link
                        href={'/auth/comment'}
                        onClick={() => handleLinkClick('manage-comment')}
                        className={cx('category__content')}
                    >
                        <CommentIcon className={cx('menu-ad')} />
                        <span className={cx('category__text')}>Manage Comment</span>
                    </Link>
                </li>
                <li className={cx('category__item', { active: activeLink === 'manage-account' })}>
                    <Link
                        href={'/auth/account'}
                        className={cx('category__content')}
                        onClick={() => handleLinkClick('manage-account')}
                    >
                        <AccountIcon className={cx('menu-ad')} fill="#231f20" />
                        <span className={cx('category__text')}>Manage Account</span>
                    </Link>
                </li>
                <li className={cx('category__item', { active: activeLink === 'manage-category' })}>
                    <Link
                        href={'/auth/category'}
                        className={cx('category__content')}
                        onClick={() => handleLinkClick('manage-category')}
                    >
                        <CategoryIcon className={cx('menu-ad')} fill="#231f20" />
                        <span className={cx('category__text')}>Manage Category</span>
                    </Link>
                </li>
                <li className={cx('category__item', { active: activeLink === 'manage-bill' })}>
                    <Link
                        href={'/auth/bill'}
                        className={cx('category__content')}
                        onClick={() => handleLinkClick('manage-bill')}
                    >
                        <Bill2Icon className={cx('menu-ad')} fill="#231f20" />
                        <span className={cx('category__text')}>Manage Bill Product</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}
