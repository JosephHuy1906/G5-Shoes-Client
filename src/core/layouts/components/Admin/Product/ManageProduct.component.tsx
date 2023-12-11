'use client';
import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import AddProductComponent from './AddProduct.component';
import EditProductComponent from './EditProduct.component';

const cx = classNames.bind(styles);

export default function ManageProductComponent() {
    const [currentTab, setCurrentTab] = useState('add');

    const handleTabClick = (tab: string) => {
        setCurrentTab(tab);
    };
    return (
        <div className={cx('manage-product js-tab-content active')}>
            <nav className={cx('content__nav')}>
                <ul className={cx('content__nav-list')}>
                    <li
                        className={cx('content__nav-item', { active: currentTab === 'add' })}
                        onClick={() => handleTabClick('add')}
                    >
                        <p className={cx('category__content')}>
                            <i className={cx('fa-solid fa-square-plus category__icon')}></i>
                            <span className={cx('category__text')}>Add Product</span>
                        </p>
                    </li>
                    <li
                        className={cx('content__nav-item', { active: currentTab === 'edit' })}
                        onClick={() => handleTabClick('edit')}
                    >
                        <p className={cx('category__content')}>
                            <i className={cx('fa-solid fa-file-pen category__icon')}></i>
                            <span className={cx('category__text')}>Edit Product</span>
                        </p>
                    </li>
                </ul>

                <div className={cx('nav__line')}></div>
            </nav>
            <div className={cx('manage-content')}>
                {currentTab === 'add' && <AddProductComponent />}
                {currentTab === 'edit' && <EditProductComponent />}
            </div>
        </div>
    );
}
