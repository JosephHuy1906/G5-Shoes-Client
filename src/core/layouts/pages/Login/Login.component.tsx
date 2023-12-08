'use client';
import classNames from 'classnames/bind';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { memo, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);
type IFormData = {
    email: string;
    password: string;
};
const MESSAGE_ERROR: { [key: string]: string } = {
    ACCOUNT_NOT_EXIST: 'Tài khoản của bạn không tồn tại!',
    ACCOUNT_ALREADY_EXISTS: 'Tài khoản này đã có sẵn, vui lòng đăng nhập bằng google!',
    INCORRECT_PASSWORD: 'Sai tài khoản hoặc mật khẩu!',
    LOGIN_FAILED: 'Không thể đăng nhập, vui lòng thử lại sau!',
    LOGIN_FORM_FAILED: 'Không thể đăng nhập, máy chủ bảo trì!',
};
function LoginPage() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isPreviewPassword, setIsPreviewPassword] = useState<boolean>(false);
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormData>();
    const onSubmit: SubmitHandler<IFormData> = (data: IFormData) => {
        setIsLoading(true);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>
                <span className={cx('home')}>Trang chủ</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" fill="none">
                    <path
                        opacity="0.4"
                        d="M3.75977 7.22005V16.7901C3.75977 18.7501 5.88975 19.98 7.58975 19L11.7397 16.61L15.8898 14.21C17.5898 13.23 17.5898 10.78 15.8898 9.80004L11.7397 7.40004L7.58975 5.01006C5.88975 4.03006 3.75977 5.25005 3.75977 7.22005Z"
                        fill="gray"
                    />
                    <path
                        d="M20.2402 18.9298C19.8302 18.9298 19.4902 18.5898 19.4902 18.1798V5.81982C19.4902 5.40982 19.8302 5.06982 20.2402 5.06982C20.6502 5.06982 20.9902 5.40982 20.9902 5.81982V18.1798C20.9902 18.5898 20.6602 18.9298 20.2402 18.9298Z"
                        fill="#000"
                    />
                </svg>
                <span>Đăng nhập/Đăng ký</span>
            </div>

            <div className={cx('login_regin')}>
                <div className={cx('login')}>
                    <h2>ĐĂNG NHẬP</h2>
                    <form id="login_form">
                        <label htmlFor="email">Email:</label>
                        <input type="text" name="email" id="email" />
                        <label htmlFor="pass">Password:</label>
                        <input type="password" name="password" id="pass" />
                        <div className={cx('btn_login')}>
                            <input type="submit" name="login" value="Đăng nhập" />
                            <a href="/resetpass">Quên mật khẩu?</a>
                        </div>
                    </form>
                    <p>Nếu Quý khách có vấn đề gì thắc mắc hoặc cần hỗ trợ gì thêm có thể liên hệ:</p>
                    <b>Hotline: 0961.022.334</b>
                    <p>để được support nhanh nhất nhé.</p>
                </div>
                <div className={cx('regin')}>
                    <h2>ĐĂNG KÝ</h2>
                    <form id="register_form" encType="multipart/form-data">
                        <label htmlFor="name">Họ và tên:</label>
                        <input type="text" name="name" id="name" />
                        <label htmlFor="emal">Email:</label>
                        <input type="email" name="email" id="emal" />
                        <label htmlFor="passw">Mật Khẩu:</label>
                        <input type="password" id="passw" name="password" />
                        <label htmlFor="repass">Nhập lại password:</label>
                        <input type="password" name="repassword" id="repass" />
                        <div className={cx('btn_regin')}>
                            <input type="submit" value="Đăng ký" name="register" />
                            <input type="reset" value="Làm mới" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default memo(LoginPage);
