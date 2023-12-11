import classNames from 'classnames/bind';
import Link from 'next/link';
import styles from './SideBarNavigation.module.scss';
import Image from 'next/image';
import {
    AdminIcon,
    CartMenuIcon,
    CloseIcon,
    ErrorIcon,
    HomeIcon,
    LogoutIcon,
    ProductIcon,
    UserIcon,
} from '@/shared/components/Svg/index.component';
import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { IUser } from '@/core/common/interfaces/collection.interface';
import AxiosConfig from '@/configs/AxiosConfig';
import { LocalStorageSide } from '@/utils/clientStore.util';
import { toast } from 'react-toastify';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const cx = classNames.bind(styles);
interface Imenu {
    popup: (isReload: boolean) => void;
}
const localStorageInstance = new LocalStorageSide();
function SideBarNavigation({ popup }: Imenu) {
    const [user, setUser] = useState<IUser | null>(null);
    const [showSkeleton, setShowSkeleton] = useState<boolean>(true);
    const token = localStorageInstance.getStore('access_token');
    const isLoggedOut = useRef<boolean>(false);

    const profile = useCallback(() => {
        if (token) {
            AxiosConfig.get('/auth/profile').then((response) => {
                if (response.data.success) {
                    setUser(response.data.data);
                    setShowSkeleton(false);
                }
            });
        }
    }, [token]);

    const logout = useCallback(() => {
        AxiosConfig.post('/auth/logout').then((response) => {
            setShowSkeleton(false);
            localStorage.removeItem('access_token');
            toast.success('Đăng xuất thành công');
            isLoggedOut.current = true;
            popup(true);
            location.replace('/');
        });
    }, []);

    useEffect(() => {
        if (!user && !isLoggedOut.current) {
            setShowSkeleton(true);
            profile();
        }
    }, [user, profile]);

    useEffect(() => {
        if (!token) {
            setShowSkeleton(false);
        }
    }, [token]);

    return (
        <div className={cx('sidebar')}>
            <div onClick={() => popup(true)} className={cx('sidebar-overlay')}></div>
            <div className={cx('sidebar__wrapper')}>
                <button type="button" onClick={() => popup(true)} className={cx('sidebar__wrapper-close')}>
                    <CloseIcon width="70" height="70" />
                </button>

                {showSkeleton && (
                    <Skeleton
                        count={20}
                        width={'80%'}
                        height={30}
                        duration={2}
                        style={{ margin: '10px' }}
                        baseColor="#c9d2de"
                    />
                )}

                {user && (
                    <>
                        <div className={cx('sidebar__wrapper-info')}>
                            <div className={cx('sidebar__wrapper-info-avatar')}>
                                <Image
                                    src={user.avatar ? `/images/${user.avatar}` : '/images/user-icon.png'}
                                    alt=""
                                    width={800}
                                    height={800}
                                    className={cx('sidebar__wrapper-info-img')}
                                />
                            </div>
                            <h3 className={cx('sidebar__wrapper-info-name')}>{user.name}</h3>
                        </div>

                        <div className={cx('sidebar__wrapper-seperate')}></div>
                        <ul className={cx('sidebar__wrapper-list')}>
                            <li className={cx('sidebar__wrapper-item')}>
                                <Link href="/" onClick={() => popup(true)} className={cx('sidebar__wrapper-link')}>
                                    <HomeIcon width="50" height="50" className={cx('icon-menu')} />
                                    <span className={cx('sidebar__wrapper-link-title')}>Trang chủ</span>
                                </Link>
                            </li>
                            <li className={cx('sidebar__wrapper-item')}>
                                <Link href="/cart" onClick={() => popup(true)} className={cx('sidebar__wrapper-link')}>
                                    <CartMenuIcon width="50" height="50" className={cx('icon-menu')} />
                                    <span className={cx('sidebar__wrapper-link-title')}>Giỏ hàng</span>
                                </Link>
                            </li>

                            <li className={cx('sidebar__wrapper-item')}>
                                <Link
                                    href="/auth/home"
                                    onClick={() => popup(true)}
                                    className={cx('sidebar__wrapper-link')}
                                >
                                    <AdminIcon fill="#5ec9dd" width="50" height="50" className={cx('icon-menu')} />
                                    <span className={cx('sidebar__wrapper-link-title')}>Admin</span>
                                </Link>
                            </li>

                            <li className={cx('sidebar__wrapper-item')}>
                                <Link
                                    href={'/profile/' + user.id}
                                    onClick={() => popup(true)}
                                    className={cx('sidebar__wrapper-link')}
                                >
                                    <UserIcon fill="#5ec9dd" width="50" height="50" className={cx('icon-menu')} />
                                    <span className={cx('sidebar__wrapper-link-title')}>Thay đổi thông tin</span>
                                </Link>
                            </li>

                            <li className={cx('sidebar__wrapper-item')}>
                                <Link
                                    href="/product"
                                    onClick={() => popup(true)}
                                    className={cx('sidebar__wrapper-link')}
                                >
                                    <ProductIcon width="50" height="50" className={cx('icon-menu')} />
                                    <span className={cx('sidebar__wrapper-link-title')}>Sản phẩm</span>
                                </Link>
                            </li>
                        </ul>
                        <ul className={cx('btn-logout')}>
                            <li className={cx('sidebar__wrapper-item')}>
                                <Link href="#" className={cx('sidebar__wrapper-link')}>
                                    <ErrorIcon width="50" height="50" className={cx('icon-menu')} />
                                    <span className={cx('sidebar__wrapper-link-title')}>Báo lỗi</span>
                                </Link>
                            </li>

                            <li className={cx('sidebar__wrapper-item')}>
                                <Link href="#" onClick={() => logout()} className={cx('sidebar__wrapper-link')}>
                                    <LogoutIcon width="50" height="50" className={cx('icon-menu')} />
                                    <span className={cx('sidebar__wrapper-link-title')}>Đăng xuất</span>
                                </Link>
                            </li>
                        </ul>
                    </>
                )}
                {!user && (
                    <>
                        <div className={cx('sidebar__wrapper-info')}>
                            <div className={cx('user_kh')}>
                                <Link href="/login" onClick={() => popup(true)}>
                                    Đăng nhập/Đăng ký
                                </Link>
                            </div>
                        </div>
                        <div className={cx('sidebar__wrapper-seperate')}></div>
                        <ul className={cx('sidebar__wrapper-list')}>
                            <li className={cx('sidebar__wrapper-item')}>
                                <Link href="/" onClick={() => popup(true)} className={cx('sidebar__wrapper-link')}>
                                    <HomeIcon width="50" height="50" className={cx('icon-menu')} />
                                    <span className={cx('sidebar__wrapper-link-title')}>Trang chủ</span>
                                </Link>
                            </li>
                            <li className={cx('sidebar__wrapper-item')}>
                                <Link href="/cart" onClick={() => popup(true)} className={cx('sidebar__wrapper-link')}>
                                    <CartMenuIcon width="50" height="50" className={cx('icon-menu')} />
                                    <span className={cx('sidebar__wrapper-link-title')}>Giỏ hàng</span>
                                </Link>
                            </li>

                            <li className={cx('sidebar__wrapper-item')}>
                                <Link
                                    href="/product"
                                    onClick={() => popup(true)}
                                    className={cx('sidebar__wrapper-link')}
                                >
                                    <ProductIcon width="50" height="50" className={cx('icon-menu')} />
                                    <span className={cx('sidebar__wrapper-link-title')}>Sản phẩm</span>
                                </Link>
                            </li>
                        </ul>
                    </>
                )}
            </div>
        </div>
    );
}

export default memo(SideBarNavigation);
