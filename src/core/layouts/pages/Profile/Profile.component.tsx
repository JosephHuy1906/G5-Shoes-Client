'use client';
import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import Link from 'next/link';
import ProfileDetailComponent from './ProfileDetail.component';
import ListOderComponent from './ListOder.component';
import ProfileVocherComponent from './ProfileVocher.component';
import { useState } from 'react';

const cx = classNames.bind(styles);

function ProfileComponent() {
    const [activeComponent, setActiveComponent] = useState('profile');

    const handleLinkClick = (componentName: any) => {
        setActiveComponent(componentName);
    };

    const renderActiveComponent = () => {
        switch (activeComponent) {
            case 'oder':
                return <ListOderComponent />;
            case 'voucher':
                return <ProfileVocherComponent />;
            default:
                return <ProfileDetailComponent />;
        }
    };

    return (
        <div className={cx('main')}>
            <div className={cx('grid wide')}>
                <h2 className={cx('main__title')}>Hồ sơ</h2>
                <p className={cx('main__note')}>
                    <i className={cx('fa-solid fa-circle-exclamation main__note-icon')}></i>
                    <span className={cx('main__note-text')}>
                        G5 Shoes thông báo: quý khách vui lòng kiểm tra thông tin đầy đủ trước khi thay đổi
                    </span>
                </p>
                <div className={cx('main__wrapper')}>
                    <div className={cx('row sm-gutter')}>
                        <div className={cx('col l-3')}>
                            <div className={cx('main__wrapper-category')}>
                                <div className={cx('main__wrapper-box-info')}>
                                    <div className={cx('main__wrapper-info-avatar')}>
                                        <img
                                            src="./images/<?php echo $user->getAvatar();?>"
                                            alt=""
                                            className={cx('main__wrapper-info-img')}
                                        />
                                    </div>
                                    <div className={cx('main__wrapper-info-text')}>
                                        <h3 className={cx('main__wrapper-info-name')}></h3>
                                        <p className={cx('main__wrapper-info-desc')}>
                                            <i className={cx('fa-regular fa-pen-to-square')}></i>
                                            <span className={cx('main__wrapper-info-desc-text')}>Sửa hồ sơ</span>
                                        </p>
                                    </div>
                                </div>

                                <ul className={cx('main__wrapper-box-list')}>
                                    <li className={cx('main__wrapper-box-item')}>
                                        <p
                                            onClick={() => handleLinkClick('profile')}
                                            className={cx('main__wrapper-item-component')}
                                        >
                                            Chỉnh sửa thông tin
                                        </p>
                                    </li>
                                    <li className={cx('main__wrapper-box-item')}>
                                        <p
                                            onClick={() => handleLinkClick('oder')}
                                            className={cx('main__wrapper-item-component')}
                                        >
                                            Danh sách đơn hàng
                                        </p>
                                    </li>
                                    <li className={cx('main__wrapper-box-item')}>
                                        <p
                                            onClick={() => handleLinkClick('voucher')}
                                            className={cx('main__wrapper-item-component')}
                                        >
                                            Ví voucher
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={cx('col l-9')}>
                            <div className={cx('main__root')}>{renderActiveComponent()}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileComponent;
