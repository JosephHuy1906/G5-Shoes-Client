import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import Link from 'next/link';
const cx = classNames.bind(styles);

function ProfileDetailComponent() {
    return (
        <div className={cx('main__wrapper-box active')}>
            <div className={cx('main__wrapper-profile')}>
                <div className={cx('main__wrapper-profile-header')}>
                    <h2 className={cx('main__wrapper-profile-header-title')}>Hồ sơ của tôi</h2>
                    <p className={cx('main__wrapper-profile-header-desc')}>
                        Quản lý thông tin hồ sơ để bảo mật tài khoản
                    </p>
                </div>
                <div className={cx('main__wrapper-profile-content')}>
                    <form id="profile-form">
                        <div className={cx('main__wrapper-from-group')}>
                            <div className={cx('main__wrapper-from-group-view')}>
                                <label htmlFor="name" className={cx('main__wrapper-from-group-label')}>
                                    Họ tên
                                </label>
                                <div className={cx('main__wrapper-from-group-view-more')}>
                                    <input type="text" name="name" id="name" className={cx('input-form')} />
                                </div>
                            </div>
                        </div>
                        <div className={cx('main__wrapper-from-group mt-30')}>
                            <div className={cx('main__wrapper-from-group-view')}>
                                <label htmlFor="email" className={cx('main__wrapper-from-group-label')}>
                                    Email
                                </label>
                                <div className={cx('main__wrapper-from-group-view-more')}>
                                    <input type="email" name="email" id="email" className={cx('input-form')} />
                                </div>
                            </div>
                        </div>
                        <div className={cx('main__wrapper-from-group mt-30')}>
                            <div className={cx('main__wrapper-from-group-view')}>
                                <label htmlFor="pass" className={cx('main__wrapper-from-group-label')}>
                                    Mật khẩu
                                </label>
                                <div className={cx('main__wrapper-from-group-view-more')}>
                                    <input type="password" name="password" id="pass" className={cx('input-form')} />
                                </div>
                            </div>
                        </div>
                        <div className={cx('main__wrapper-from-group mt-30')}>
                            <div className={cx('main__wrapper-from-group-view')}>
                                <label htmlFor="phone" className={cx('main__wrapper-from-group-label')}>
                                    Số điện thoại
                                </label>
                                <div className={cx('main__wrapper-from-group-view-more')}>
                                    <input
                                        type="tel"
                                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                        name="phone"
                                        id="phone"
                                        className={cx('input-form')}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={cx('main__wrapper-from-group mt-30')}>
                            <div className={cx('main__wrapper-from-group-view')}>
                                <label htmlFor="address" className={cx('main__wrapper-from-group-label')}>
                                    Địa chỉ
                                </label>
                                <div className={cx('main__wrapper-from-group-view-more')}>
                                    <input type="text" name="address" id="address" className={cx('input-form')} />
                                </div>
                            </div>
                        </div>
                        <div className={cx('main__wrapper-from-group-avatar')}>
                            <div className={cx('main__wrapper-from-group-view')}>
                                <label htmlFor="input-avatar" className={cx('main__wrapper-from-group-label')}>
                                    Ảnh đại diện
                                </label>
                                <div className={cx('main__wrapper-from-group-view-avatar')}>
                                    <div className={cx('main__wrapper-from-group-avatar-picture')}>
                                        <label htmlFor="input-avatar">
                                            <div
                                                className={cx('main__wrapper-from-group-avatar-picture-overlay')}
                                            ></div>
                                            <img
                                                src="./images/<?php echo $user->getAvatar(); ?>"
                                                alt=""
                                                className={cx('main__wrapper-from-group-avatar-img')}
                                            />
                                        </label>
                                        <label
                                            htmlFor="input-avatar"
                                            className={cx('main__wrapper-from-group-avatar-picture-label')}
                                        >
                                            <p className={cx('main__wrapper-from-group-avatar-picture-p')}>
                                                <i className={cx('fa-regular fa-pen-to-square')}></i>
                                            </p>
                                            <p className={cx('main__wrapper-from-group-avatar-picture-edit')}>
                                                Sửa ảnh
                                            </p>
                                        </label>
                                    </div>
                                    <div className={cx('main__wrapper-from-group-avatar')}>
                                        <input
                                            id="input-avatar"
                                            name="avatar"
                                            type="file"
                                            value=""
                                            hidden
                                            className={cx('main__wrapper-from-group-avatar-input')}
                                        />
                                        <label htmlFor="input-avatar" className={cx('main__wrapper-from-avatar-btn')}>
                                            <i
                                                className={cx(
                                                    'fa-solid fa-cloud-arrow-up main__wrapper-from-avatar-btn-icon',
                                                )}
                                            ></i>
                                        </label>
                                        <p className={cx('main__wrapper-from-avatar-text')}>Dung lượng tối đa 1MB</p>
                                        <p className={cx('main__wrapper-from-avatar-text')}>
                                            Định dạng: .JPG, .PNG, JPEG
                                        </p>
                                    </div>
                                </div>
                                <div className={cx('main__wrapper-from-group-empty')}></div>
                            </div>
                        </div>
                        <div className={cx('main__wrapper-from-group-button')}>
                            <button type="submit" name="save" className={cx('main__wrapper-from-group-btn-submit')}>
                                Lưu thông tin
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ProfileDetailComponent;
