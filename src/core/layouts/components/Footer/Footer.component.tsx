'use client';
import classNames from 'classnames/bind';
import Image from 'next/image';

import styles from './Footer.module.scss';
import Link from 'next/link';
import { FacebookIcon, GoogleIcon } from '@/shared/components/Svg/index.component';
const cx = classNames.bind(styles);

function FooterComponent() {
    return (
        <div className={cx('footer')}>
            <div className={cx('grid wide')}>
                <div className={cx('row')}>
                    <div className={cx('col l-3 m-6 c-6')}>
                        <div className={cx('footer__wrapper')}>
                            <div className={cx('footer__wrapper-logo')}>
                                <div className={cx('footer__wrapper-logo-avatar')}>
                                    <Image
                                        className={cx('footer__wrapper-logo-img')}
                                        height={100}
                                        width={100}
                                        src={'/images/logo-chinh.jpg'}
                                        alt="image"
                                    />
                                </div>
                                <h3 className={cx('footer__wrapper-logo-name')}>G5 Shoes</h3>
                            </div>
                            <ul className={cx('footer__wrapper-list')}>
                                <li className={cx('footer__wrapper-item')}>
                                    <p className={cx('footer__wrapper-text')}>Điện thoại: 0961022334</p>
                                </li>
                                <li className={cx('footer__wrapper-item')}>
                                    <p className={cx('footer__wrapper-text')}>Email: g5shoes@gmail.com</p>
                                </li>
                                <li className={cx('footer__wrapper-item social')}>
                                    <p className={cx('footer__wrapper-text')}>Social Network:</p>
                                    <div className={cx('footer__wrapper-social-box')}>
                                        <Link
                                            href="https://www.facebook.com/quanghuyshop1906"
                                            className={cx('footer__wrapper-social')}
                                        >
                                            <FacebookIcon width="40" height="40" className={cx('social-icon')} />
                                        </Link>
                                        <Link href="#" className={cx('footer__wrapper-social')}>
                                            <GoogleIcon width="40" height="40" className={cx('social-icon')} />
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('col l-3 m-6 c-6')}>
                        <div className={cx('footer__wrapper')}>
                            <h2 className={cx('footer__wrapper-title')}>Về chúng tôi</h2>
                            <ul className={cx('footer__wrapper-list')}>
                                <li className={cx('footer__wrapper-item')}>
                                    <Link href="#" className={cx('footer__wrapper-link')}>
                                        Cơ hội
                                    </Link>
                                </li>
                                <li className={cx('footer__wrapper-item')}>
                                    <Link href="#" className={cx('footer__wrapper-link')}>
                                        Việc làm
                                    </Link>
                                </li>
                                <li className={cx('footer__wrapper-item')}>
                                    <Link href="#" className={cx('footer__wrapper-link')}>
                                        Giấy phép kinh doanh
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('col l-3 m-6 c-6')}>
                        <div className={cx('footer__wrapper')}>
                            <h2 className={cx('footer__wrapper-title')}>Thanh toán</h2>
                            <ul className={cx('footer__wrapper-list')}>
                                <li className={cx('footer__wrapper-item')}>
                                    <Link href="#" className={cx('footer__wrapper-link')}>
                                        Thanh toán qua visa
                                    </Link>
                                </li>
                                <li className={cx('footer__wrapper-item')}>
                                    <Link href="#" className={cx('footer__wrapper-link')}>
                                        Thanh toán qua viettelpay
                                    </Link>
                                </li>
                                <li className={cx('footer__wrapper-item')}>
                                    <Link href="#" className={cx('footer__wrapper-link')}>
                                        Thanh toán qua momo
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('col l-3 m-6 c-6')}>
                        <div className={cx('footer__wrapper')}>
                            <h2 className={cx('footer__wrapper-title')}>Hệ thống G5 Shoes</h2>
                            <ul className={cx('footer__wrapper-list')}>
                                <li className={cx('footer__wrapper-item')}>
                                    <p className={cx('footer__wrapper-location')}>
                                        Hà Nội: 57 Quan Hoa, Cầu Giấy, Hà Nội
                                    </p>
                                </li>
                                <li className={cx('footer__wrapper-item')}>
                                    <p className={cx('footer__wrapper-location')}>
                                        Khánh Hòa : 272 Thống Nhất, Phường Phương Sơn, TP.Nha Trang
                                    </p>
                                </li>
                                <li className={cx('footer__wrapper-item')}>
                                    <p className={cx('footer__wrapper-location')}>
                                        TP.HCM: 258/3 Dương Quảng Hàm, Phường 5, Quận Gò Vấp, TP.HCM
                                    </p>
                                </li>
                                <li className={cx('footer__wrapper-item')}>
                                    <p className={cx('footer__wrapper-location')}>
                                        Ninh Thuận: 267 Ngô Gia Tự, phường Tấn Tài, Tp.Phan Rang- Tháp Chàm
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p className={cx('footer__license')}>© 2022 G5 Shoes. Tất cả các quyền được bảo lưu.</p>
            </div>
        </div>
    );
}

export default FooterComponent;
