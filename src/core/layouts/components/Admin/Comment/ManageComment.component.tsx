'use-client';
import React, { useState } from 'react';
import classNames from 'classnames/bind';
import style from './Comment.module.scss';
import CommentComponent from './Comment.component';
import FeedbackComponent from './Feedback.component';

const cx = classNames.bind(style);

export default function ManageCommentComponent() {
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
                            <i className={cx('fa-solid fa-border-all category__icon')}></i>
                            <span className={cx('category__text')}>All Comment</span>
                        </p>
                    </li>
                    <li
                        className={cx('content__nav-category-item', { active: currentTab === 'edit' })}
                        onClick={() => handleTabClick('edit')}
                    >
                        <p className={cx('category__content')}>
                            <i className={cx('fa-solid fa-comment category__icon')}></i>
                            <span className={cx('category__text')}>Feedback Comment</span>
                        </p>
                    </li>
                </ul>

                <div className={cx('nav__line-category')}></div>
            </nav>
            <div className={cx('manage-content')}>
                {currentTab === 'add' && <CommentComponent />}
                {currentTab === 'edit' && <FeedbackComponent />}
            </div>
        </div>
    );
}
