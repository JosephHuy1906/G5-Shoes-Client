import React from 'react';
import classNames from 'classnames/bind';
import styles from './ModelProfile.module.scss';

const cx = classNames.bind(styles);

export default function ModelProfileComponent() {
    return (
        <div className={cx('modal-profile')}>
            <div className={cx('modal-overlay')}></div>
            <div className={cx('modal-wrapper')}>
                <div className={cx('modal-wrapper-close')}>
                    <i className={cx('fa-solid fa-circle-xmark modal-wrapper-close-icon')}></i>
                </div>

                <h1 className={cx('modal-title')}>Change Profile</h1>
                <div className={cx('modal-info-current')}>
                    <div className={cx('modal-info-current-avatar')}>
                        <img src="" alt="" className={cx('modal-info-current-img')} />
                    </div>
                    <h3 className={cx('modal-info-current-name')}></h3>
                    <p className={cx('modal-info-current-desc')}>Admin</p>
                </div>
                <form id="form-profile" action="" className={cx('modal-form-profile')}>
                    <div className={cx('form-group-modal')}>
                        <label htmlFor="name" className={cx('form-modal-title')}>
                            New Your Name
                        </label>
                        <input
                            type="text"
                            name="fullname"
                            id="name"
                            value=""
                            autoComplete="username"
                            className={cx('form-modal-input')}
                            placeholder="enter new your name"
                        />
                        <span className={cx('form-modal-error')}></span>
                    </div>
                    <div className={cx('form-group-modal modal-file')}>
                        <label htmlFor="avatar" className={cx('form-modal-title')}>
                            New Your Image
                        </label>
                        <input
                            type="file"
                            name="avatar"
                            id="avatar"
                            className={cx('input-modal-file')}
                            placeholder="enter new your image"
                        />
                        <span className={cx('form-modal-error')}></span>
                        <label className={cx('sticker-file')}>
                            <i className={cx('fa-solid fa-image')}></i>
                            Upload image
                        </label>
                    </div>
                    <div className={cx('form-group-modal')}>
                        <label htmlFor="pass" className={cx('form-modal-title')}>
                            New Your Password
                        </label>
                        <input
                            type="password"
                            id="pass"
                            name="password"
                            value=""
                            autoComplete="new-password"
                            className={cx('form-modal-input js-modal-password')}
                            placeholder="enter new your password"
                        />
                        <span className={cx('form-modal-error')}></span>
                    </div>
                    <div className={cx('form-group-modal')}>
                        <label htmlFor="repassword" className={cx('form-modal-title')}>
                            Enter New Your Password
                        </label>
                        <input
                            type="password"
                            id="repassword"
                            name="repassword"
                            autoComplete="new-password"
                            className={cx('form-modal-input js-modal-enter-password')}
                            placeholder="retype new your password"
                        />
                        <span className={cx('form-modal-error')}></span>
                    </div>
                    <div className={cx('modal-submit')}>
                        <button type="submit" className={cx('modal-btn-submit')}>
                            Done!
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
