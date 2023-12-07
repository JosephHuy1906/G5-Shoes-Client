'use client';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { memo, useEffect, useState } from 'react';
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
           
        </div>
    );
}

export default memo(LoginPage);
