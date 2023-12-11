import React from 'react';
import classNames from 'classnames/bind';
import style from './Comment.module.scss';

const cx = classNames.bind(style);

export default function CommentComponent() {
    return (
        <div className={cx('manage-content-comment-tab active')}>
            <h1 className={cx('manage-content__title')}>Manage All Comment</h1>
            <div className={cx('comment-all__wrapper')}>
                <div className={cx('scroll-comment')}>
                    <div className={cx('comment-all__box')}>
                        <div className={cx('comment-all__content')}>
                            <div className={cx('comment-all__content-index')}></div>
                            <div className={cx('comment-all__content-info')}>
                                <div className={cx('comment-all__content-info-avatar')}>
                                    <img src="" alt="" className={cx('comment-all__content-info-img')} />
                                </div>
                                <div className={cx('comment-all__content-info-text')}>
                                    <h3 className={cx('comment-all__content-info-name')}></h3>
                                    <p className={cx('comment-all__content-info-time')}></p>
                                    <p className={cx('comment-all__content-info-content-comment')}></p>
                                </div>
                            </div>

                            <div className={cx('comment-all__actions')}>
                                <a href="../controller/AdminController.php?act=deleteComment&commentID=<?php echo $commentID; ?>">
                                    {' '}
                                    <button className={cx('comment-all__actions-btn')}>Xoá</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
