'use client';
import { REGEX } from '@/core/common/constants/common.constant';
import LoadingPage from '@/shared/components/Loading/LoadingPage/LoadingPage.component';
import { FacebookIcon, GoogleIcon } from '@/shared/components/Svg/index.component';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { memo, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './Signup.module.scss';
import AxiosConfig from '@/configs/AxiosConfig';
import { toast } from 'react-toastify';

const cx = classNames.bind(styles);
type IFormDataVerify = {
    email: string;
    username: string;
    password: string;
};
type IFormDataSignUp = {
    verificationCode: number;
};
const MESSAGE_ERROR: { [key: string]: string } = {
    GMAIL_ALREADY_EXISTS: 'Tài khoản đã tồn tại!',
    CHECK_EMAIL_FAILED: 'Không thể đăng ký, máy chủ bảo trì!',
    POST_ACCOUNT_PENDING_SEND_MAIL_FAILED: 'Không thể gửi mã xác thực!',
    EMAIL_NOT_FOUND: 'Email không không hợp lệ để đăng ký!',
    SIGN_UP_FORM_FAILED: 'Đăng ký tài khoản thất bại, thử lại sau!',
};
type IFormData = {
    email: string;
    name: string;
    password: string;
};

function SignupPage() {
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
        newFormData.append('name', data.name);
        newFormData.append('password', data.password);

        setIsLoading(true);

        try {
            const response = await AxiosConfig.post('/user/create', newFormData);

            if (response) {
                toast.success('Đăng ký thành công');
                console.log(response.data);
            }
        } catch (error) {
            toast.error('Email đã tồn tại');
        } finally {
            setIsLoading(false);

            window.location.replace('/');
        }
    };

    return (
        <div className={cx('wrapper')}>
            {isLoading && <LoadingPage />}
            <div className={cx('form')}>
                <h2>Đăng Ký</h2>
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
                        <input
                            type="text"
                            placeholder="Nhập Fullname..."
                            className={cx(errors.name && 'invalid')}
                            {...register('name', { required: true })}
                        />

                        <div className={cx('messages')}>
                            {errors.name && errors.name.type && (
                                <span className={cx('message-errors')}>Vui lòng nhập name!</span>
                            )}
                        </div>
                    </div>
                    <div className={cx('form-group')}>
                        <div className={cx('wrapper-password')}>
                            <input
                                type={isPreviewPassword ? 'text' : 'password'}
                                placeholder="Nhập password..."
                                className={cx(errors.password && 'invalid')}
                                {...register('password', { required: true, minLength: 6 })}
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
                            {errors.password && errors.password.type !== 'minLength' && (
                                <span className={cx('message-errors')}>Vui lòng nhập mật khẩu!</span>
                            )}
                            {errors.password && errors.password.type === 'minLength' && (
                                <span className={cx('message-errors')}>Mật khẩu phải dài hơn 6 ký tự!!</span>
                            )}
                        </div>
                    </div>

                    <button type="submit" className={cx('btn-submit')}>
                        Đăng Ký
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
                    Bạn đã có tài khoản
                    <Link href="/login">
                        <i>Đăng nhập</i>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default memo(SignupPage);
