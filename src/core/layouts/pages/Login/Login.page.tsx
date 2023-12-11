'use client';

import { REGEX } from '@/core/common/constants/common.constant';
import LoadingPage from '@/shared/components/Loading/LoadingPage/LoadingPage.component';
import { FacebookIcon, GoogleIcon } from '@/shared/components/Svg/index.component';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { memo, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './Login.module.scss';
import { toast } from 'react-toastify';
import AxiosConfig from '@/configs/AxiosConfig';
import { LocalStorageSide } from '@/utils/clientStore.util';
import { exit } from 'process';

const cx = classNames.bind(styles);
type IFormData = {
    email: string;
    password: string;
};

const localStorageInstance = new LocalStorageSide();

function LoginPage() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isPreviewPassword, setIsPreviewPassword] = useState<boolean>(false);
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormData>();
    const onSubmit: SubmitHandler<IFormData> = async (data: IFormData) => {
        const newFormData = new FormData();
        newFormData.append('email', data.email);
        newFormData.append('password', data.password);

        setIsLoading(true);

        try {
            AxiosConfig.post('/auth/login', newFormData)
                .then((response) => {
                    const { access_token, refresh_token, expires_in } = response.data;
                    localStorageInstance.setStore('access_token', access_token);
                    window.location.replace('/');
                    toast.success('Bạn đã đăng nhập thành công');
                })
                .catch((err) => {
                    toast.error('Mật khẩu hoặc email không đúng');
                })
                .finally(() => {
                    setIsLoading(false);
                });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className={cx('wrapper')}>
            {isLoading && <LoadingPage />}
            <div className={cx('form')}>
                <h2>Đăng nhập</h2>
                <form onSubmit={handleSubmit(onSubmit)} className={cx('login-form')} encType="multipart/form-data">
                    <div className={cx('form-group')}>
                        <input
                            type="text"
                            placeholder="Nhập email..."
                            className={cx(errors.email && 'invalid')}
                            {...register('email', { required: true, pattern: REGEX.EMAIL })}
                        />
                        <div className={cx('messages')}>
                            {errors.email && errors.email.type !== 'pattern' && (
                                <span className={cx('message-errors')}>Vui lòng nhập email!</span>
                            )}
                            {errors.email && errors.email.type === 'pattern' && (
                                <span className={cx('message-errors')}>Email không hợp lệ!</span>
                            )}
                        </div>
                    </div>
                    <div className={cx('form-group')}>
                        <div className={cx('wrapper-password')}>
                            <input
                                type={isPreviewPassword ? 'text' : 'password'}
                                placeholder="Nhập password..."
                                className={cx(errors.password && 'invalid')}
                                {...register('password', { required: true })}
                            />
                            <button className={cx('btn-preview')} onClick={() => setIsPreviewPassword((prev) => !prev)}>
                                {isPreviewPassword ? (
                                    <FontAwesomeIcon icon={faEyeSlash} />
                                ) : (
                                    <FontAwesomeIcon icon={faEye} />
                                )}
                            </button>
                        </div>
                        <div className={cx('messages')}>
                            {errors.password && <span className={cx('message-errors')}>Vui lòng nhập mật khẩu!</span>}
                        </div>
                        <Link href="" className={cx('forgot')}>
                            Quên mật khẩu?
                        </Link>
                    </div>

                    <button type="submit" className={cx('btn-submit')}>
                        Đăng nhập
                    </button>
                </form>

                <hr />
                <div className={cx('form-top')}>
                    <Link href={'#'}>
                        <GoogleIcon width="30px" height="30px" className={cx('icon-facebook')} fill="none" />
                        <p> Tiếp tục với Google</p>
                    </Link>
                    <Link href={'#'}>
                        <FacebookIcon width="30px" height="30px" className={cx('icon-facebook')} fill="none" />
                        <p> Tiếp tục với Facebook</p>
                    </Link>
                </div>
                <div className={cx('sub')}>
                    Bạn chưa có tài khoản?{' '}
                    <Link href="/signup">
                        <i>Đăng ký với chúng tôi</i>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default memo(LoginPage);
