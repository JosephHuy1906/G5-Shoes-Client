import React from 'react';
import classNames from 'classnames/bind';
import style from './Comment.module.scss';

const cx = classNames.bind(style);
export default function FeedbackComponent() {
    return (
        <div className={cx('manage-content-comment-tab active')}>
            <h1 className={cx('manage-content__title')}>Manage Feedback Comment User</h1>

            <div className={cx('feedback-wrapper')}>
                <div className={cx('feedback-wrapper-content')}>
                    <div className={cx('feedback-wrapper-content-info-user')}>
                        <div className={cx('feedback-wrapper-content-avatar')}>
                            <img src="" alt="" className={cx('feedback-wrapper-content-img')} />
                        </div>
                        <div className={cx('feedback-wrapper-content-text')}>
                            <h3 className={cx('feedback-wrapper-content-name')}></h3>
                            <p className={cx('feedback-wrapper-content-text-content')}></p>
                        </div>
                    </div>
                    <div className={cx('wrapper-box-feedback')}>
                        <div className={cx('wrapper-actions')}>
                            <p className={cx('feedback-wrapper-content-actions')}>
                                <span className={cx('feedback-wrapper-content-actions-text')}>Phản hồi</span>
                                <i
                                    className={cx(
                                        'fa-solid fa-angle-down feedback-wrapper-content-actions-icon active',
                                    )}
                                ></i>
                                <i className={cx('fa-solid fa-angle-up feedback-wrapper-content-actions-icon')}></i>
                            </p>
                            <button className={cx('wrapper-actions-remove')}>Xoá</button>
                        </div>

                        <form
                            id="form-feedback-id1"
                            action="../controller/AdminController.php?act=feedback"
                            method="post"
                            className={cx('form-feedback')}
                        >
                            <input type="hidden" name="commentId" value=" <?php echo $com->getcommentID();?>" />
                            <input type="hidden" name="postdate" />
                            <input type="hidden" name="userid" value=" <?php echo  $com->getuserID();?>" />
                            <textarea
                                className={cx('form-feedback-text')}
                                name="content"
                                placeholder="Viết lời muốn phải hồi tại đây..."
                            ></textarea>
                            <p className={cx('form-feedback-message')}>
                                <i className={cx('fa-solid fa-triangle-exclamation form-feedback-icon')}></i>
                                <span className={cx('form-feedback-error')}></span>
                            </p>
                            <div className={cx('btn-wrapper-feedback')}>
                                <button type="submit" className={cx('send-feedback')}>
                                    Gửi
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
