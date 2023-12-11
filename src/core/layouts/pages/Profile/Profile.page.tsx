'use client';
import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import Link from 'next/link';
import ProfileDetailComponent from './ProfileDetail.page';
import ListOderComponent from './ListOder.page';
import ProfileVocherComponent from './ProfileVocher.page';
import { useCallback, useEffect, useState } from 'react';
import { LocalStorageSide } from '@/utils/clientStore.util';
import { IUser } from '@/core/common/interfaces/collection.interface';
import AxiosConfig from '@/configs/AxiosConfig';
import Image from 'next/image';
import { EditIcon } from '@/shared/components/Svg/index.component';

const cx = classNames.bind(styles);
const localStorageInstance = new LocalStorageSide();
function ProfileComponent() {
    const [activeComponent, setActiveComponent] = useState('profile');
    const token = localStorageInstance.getStore('access_token');
    const [user, setUser] = useState<IUser | null>(null);

    const handleLinkClick = (componentName: any) => {
        setActiveComponent(componentName);
    };

    const profile = useCallback(() => {
        if (token) {
            AxiosConfig.get('/auth/profile').then((response) => {
                if (response.data.success) {
                    setUser(response.data.data);
                }
            });
        }
    }, [token]);

    useEffect(() => {
        if (!user) {
            profile();
        }
    }, [user, profile]);

    return (
        <div className={cx('main')}>
            {user && (
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
                                            <Image
                                                src={user.avatar ? `/images/${user.avatar}` : '/images/user-icon.png'}
                                                alt=""
                                                width={800}
                                                height={800}
                                                className={cx('main__wrapper-info-img')}
                                            />
                                        </div>
                                        <div className={cx('main__wrapper-info-text')}>
                                            <h3 className={cx('main__wrapper-info-name')}>{user.name}</h3>
                                            <p className={cx('main__wrapper-info-desc')}>
                                                <EditIcon width="20" height="100" />
                                                <span className={cx('main__wrapper-info-desc-text')}>Sửa hồ sơ</span>
                                            </p>
                                        </div>
                                    </div>

                                    <ul className={cx('main__wrapper-box-list')}>
                                        <li className={cx('main__wrapper-box-item')}>
                                            <p
                                                onClick={() => setActiveComponent('profile')}
                                                className={cx('main__wrapper-item-component')}
                                            >
                                                Chỉnh sửa thông tin
                                            </p>
                                        </li>
                                        <li className={cx('main__wrapper-box-item')}>
                                            <p
                                                onClick={() => setActiveComponent('oder')}
                                                className={cx('main__wrapper-item-component')}
                                            >
                                                Danh sách đơn hàng
                                            </p>
                                        </li>
                                        <li className={cx('main__wrapper-box-item')}>
                                            <p
                                                onClick={() => setActiveComponent('voucher')}
                                                className={cx('main__wrapper-item-component')}
                                            >
                                                Ví voucher
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={cx('col l-9')}>
                                <div className={cx('main__root')}>
                                    {activeComponent === 'profile' && <ProfileDetailComponent data={user} />}{' '}
                                    {activeComponent === 'oder' && <ListOderComponent />}{' '}
                                    {activeComponent === 'voucher' && <ProfileVocherComponent />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProfileComponent;
