import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import Link from 'next/link';
import { LocalStorageSide } from '@/utils/clientStore.util';
import { FormEvent, useCallback, useEffect, useState } from 'react';
import { IUser } from '@/core/common/interfaces/collection.interface';
import AxiosConfig from '@/configs/AxiosConfig';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import { AnyNsRecord } from 'dns';
import { toast } from 'react-toastify';
const cx = classNames.bind(styles);

interface IState {
    data: IUser;
}

function ProfileDetailComponent({ data }: IState) {
    const [name, setName] = useState<string>(data.name);
    const [email, setEmail] = useState<string>(data.email);
    const [address, setAddress] = useState<string>(data.address || '');
    const [phone, setPhone] = useState<string>(data.phone || '');
    const [avatar, setAvatar] = useState<string>(data.avatar || '');

    const putUser = (id: string, data: any) => {
        AxiosConfig.put('/users/' + id, data).then((response) => {
            console.log(response);
            toast.success('Bạn đã Cập nhật thông tin thành công');
        });
    };
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const dataUpdate = {
            name: name,
            email: email,
            address: address,
            phone: phone,
            avatar: avatar,
        };
        putUser(data.id, dataUpdate);
        toast.success('Đã cập nhập thông tin thành công');
        location.replace('/profile/' + data.id);
    };
    return (
        <div className={cx('main__wrapper-box active')}>
            <div className={cx('main__wrapper-profile')}>
                <div className={cx('main__wrapper-profile-header')}>
                    <h2 className={cx('main__wrapper-profile-header-title')}>Hồ sơ của tôi</h2>
                    <p className={cx('main__wrapper-profile-header-desc')}>
                        Quản lý thông tin hồ sơ để bảo mật tài khoản
                    </p>
                </div>
                {data && (
                    <div className={cx('main__wrapper-profile-content')}>
                        <form id="profile-form" onSubmit={handleSubmit} encType="multipart/form-data">
                            <div className={cx('main__wrapper-from-group')}>
                                <div className={cx('main__wrapper-from-group-view')}>
                                    <label htmlFor="name" className={cx('main__wrapper-from-group-label')}>
                                        Họ tên
                                    </label>
                                    <div className={cx('main__wrapper-from-group-view-more')}>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            className={cx('input-form')}
                                            defaultValue={data.name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={cx('main__wrapper-from-group mt-30')}>
                                <div className={cx('main__wrapper-from-group-view')}>
                                    <label htmlFor="email" className={cx('main__wrapper-from-group-label')}>
                                        Email
                                    </label>
                                    <div className={cx('main__wrapper-from-group-view-more')}>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            defaultValue={data.email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className={cx('input-form')}
                                        />
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
                                            name="phone"
                                            id="phone"
                                            defaultValue={data.phone}
                                            onChange={(e) => setPhone(e.target.value)}
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
                                        <input
                                            type="text"
                                            name="address"
                                            id="address"
                                            defaultValue={data.address}
                                            onChange={(e) => setAddress(e.target.value)}
                                            className={cx('input-form')}
                                        />
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
                                                <Image
                                                    src={avatar !== '' ? `/images/${avatar}` : '/images/data-icon.png'}
                                                    alt=""
                                                    width={800}
                                                    height={800}
                                                    className={cx('main__wrapper-info-img')}
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
                                            <label
                                                htmlFor="input-avatar"
                                                className={cx('main__wrapper-from-avatar-btn')}
                                            >
                                                <i
                                                    className={cx(
                                                        'fa-solid fa-cloud-arrow-up main__wrapper-from-avatar-btn-icon',
                                                    )}
                                                ></i>
                                            </label>
                                            <p className={cx('main__wrapper-from-avatar-text')}>
                                                Dung lượng tối đa 1MB
                                            </p>
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
                )}
            </div>
        </div>
    );
}

export default ProfileDetailComponent;
