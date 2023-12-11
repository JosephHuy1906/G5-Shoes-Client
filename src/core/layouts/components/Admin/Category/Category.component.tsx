'use client';
import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Category.module.scss';
import AddCategoryComponent from './AddCategory.component';
import EditCategoryComponent from './EditCategory.component';

const cx = classNames.bind(styles);

export default function CategoryComponent() {
    const [currentTab, setCurrentTab] = useState('add');

    const handleTabClick = (tab: any) => {
        setCurrentTab(tab);
    };
    return (
        <div className={cx('js-tab-content active')}>
            <nav className={cx('content__nav')}>
                <ul className={cx('content__nav-list')}>
                    <li
                        className={cx('content__nav-category-item', { active: currentTab === 'add' })}
                        onClick={() => handleTabClick('add')}
                    >
                        <p className={cx('category__content')}>
                            <i className={cx('fa-solid fa-file-lines category__icon')}></i>
                            <span className={cx('category__text')}>Add Category</span>
                        </p>
                    </li>
                    <li
                        className={cx('content__nav-category-item', { active: currentTab === 'edit' })}
                        onClick={() => handleTabClick('edit')}
                    >
                        <p className={cx('category__content')}>
                            <i className={cx('fa-solid fa-file-lines category__icon')}></i>
                            <span className={cx('category__text')}>All Category</span>
                        </p>
                    </li>
                </ul>

                <div className={cx('nav__line-category')}></div>
            </nav>
            <div className={cx('manage-content')}>
                {currentTab === 'add' && <AddCategoryComponent />}
                {currentTab === 'edit' && <EditCategoryComponent />}
            </div>
        </div>
    );
}
