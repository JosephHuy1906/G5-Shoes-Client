'use client';
import Link from 'next/link';

import { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import HeaderAuth from './HeaderAuth/HeaderAuth.component';
import Image from 'next/image';
import classNames from 'classnames/bind';
import { BellRingIcon, CartIcon, MenuIcon, SearchIcon, UserIcon } from '@/shared/components/Svg/index.component';
import InputSearchComponent from '@/shared/components/InputSearch/InputSearch.component';

const cx = classNames.bind(styles);

interface Imenu {
    popup: (isReload: boolean) => void;
}

function HeaderComponent({ popup }: Imenu) {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    return (
        <header className={cx('header')}>
            <div className={cx('grid wide')}>
                <div className={cx('header__wrapper')}>
                    <div className={cx('header__actions')}>
                        <div onClick={() => popup(true)} className={cx('header__actions-menu')}>
                            <MenuIcon width="30" height="50" className={cx('icon-custom')} />
                            <h3 className={cx('header__actions-menu-title')}>Menu</h3>
                        </div>
                        <div className={cx('header__actions-search')}>
                            <button type="submit" className={cx('header__actions-btn-search')}>
                                <SearchIcon width="50" className={cx('icon-custom')} />
                            </button>
                            <input type="text" className={cx('header__actions-search-input')} placeholder=" Search" />
                            <div className={cx('header__list-search')}>
                                <h3 className={cx('header__list-search-title')}> Kết quả tìm kiếm</h3>
                                <div className={cx('header__no-result')}>
                                    <button type="submit" className={cx('header__no-result-avatar')}></button>
                                    <h3 className={cx('header__list-search-no-result')}>
                                        Không thấy kết quả tìm kiếm của bạn
                                    </h3>
                                </div>
                                <ul className={cx('header__list-search-ul')}></ul>
                            </div>
                        </div>
                        {/* <InputSearchComponent /> */}
                    </div>
                    <Link href={'/'} rel="preload" className={cx('header__logo')}>
                        <Image
                            src={'/images/logo-chinh.jpg'}
                            alt=""
                            className={cx('header__logo-Image')}
                            width={50}
                            priority
                            height={50}
                        />
                    </Link>
                    <div className={cx('header__information')}>
                        <ul className={cx('header__information-list')}>
                            <li className={cx('header__information-item')}>
                                <Link href="/login" className={cx('header__information-link')}>
                                    <UserIcon width="800" height="800" className={cx('user-icon')} />
                                </Link>
                            </li>
                            <li className={cx('header__information-item')}>
                                <div className={cx('header__information-link ting')}>
                                    <BellRingIcon width="100" height={'100'} className={cx('icon-bell')} />
                                    <span className={cx('header__information-count-information')}>1</span>
                                    <div className={cx('header__notification')}>
                                        <h3 className={cx('header__notification-title')}>Thông báo</h3>
                                        <ul className={cx('header__notification-list')}>
                                            <li className={cx('header__notification-item')}>
                                                <a href="./profile.php" className={cx('header__notification-link')}>
                                                    <div className={cx('header__notification-avatar')}>
                                                        {/* <Image
                                                            src=""
                                                            alt=""
                                                            className={cx('header__notification-Image')}
                                                        /> */}
                                                    </div>
                                                    <div className={cx('header__notification-info')}>
                                                        <h3 className={cx('header__notification-info-title')}>
                                                            Bạn đã đặt thành công đơn hàng <span></span>
                                                        </h3>
                                                        <p className={cx('header__notification-info-desc')}></p>
                                                    </div>
                                                    <form action="../controller/notificationController.php">
                                                        <button type="submit">
                                                            <div className={cx('header__notification-remove')}>
                                                                <input
                                                                    type="hidden"
                                                                    name={cx('idNotification')}
                                                                    value=""
                                                                />
                                                                <i className={cx('fa-regular fa-trash-can')}></i>
                                                            </div>
                                                        </button>
                                                    </form>
                                                </a>
                                            </li>

                                            <li className={cx('header__notification-item')}>
                                                <Link href="/" className={cx('header__notification-link')}>
                                                    <div className={cx('header__notification-avatar-user')}>
                                                        <Image
                                                            src="/images/logo-chinh.jpg"
                                                            className={cx('header__notification-user-Image')}
                                                            alt="image"
                                                            width={100}
                                                            height={100}
                                                            priority
                                                        />
                                                    </div>
                                                    <div className={cx('header__notification-info')}>
                                                        <h3 className={cx('header__notification-info-title-user')}>
                                                            <span className={cx('header__notification-comment-user')}>
                                                                G5 Shoes
                                                            </span>
                                                            đã nhắc đến bạn trong một bình luận
                                                        </h3>
                                                        <p className={cx('header__notification-info-desc')}> </p>
                                                    </div>
                                                    <div className={cx('header__notification-remove')}>
                                                        <i className={cx('fa-regular fa-trash-can')}></i>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>

                            <li className={cx('header__information-item')}>
                                <div className={cx('header__information-link cart')}>
                                    <CartIcon className={cx('header__information-link-cart')} />
                                    <span className={cx('header__information-count-cart')}>2</span>
                                    <div className={cx('header__cart')}>
                                        <h3 className={cx('header__cart-title')}>Giỏ hàng</h3>
                                        <ul className={cx('header__cart-list')}></ul>
                                        <div className={cx('header__cart-link-box')}>
                                            <Link href="cart" className={cx('header__cart-link-navigation')}>
                                                Xem giỏ hàng
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HeaderComponent;
