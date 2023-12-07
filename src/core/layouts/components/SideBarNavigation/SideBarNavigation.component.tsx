import classNames from 'classnames/bind';
import Link from 'next/link';
import styles from './SideBarNavigation.module.scss';
import Image from 'next/image';
import {
    CartIcon,
    CartMenuIcon,
    CloseIcon,
    ErrorIcon,
    HomeIcon,
    LogoutIcon,
    ProductIcon,
    ProfileIcon,
    UserIcon,
} from '@/shared/components/Svg/index.component';

const cx = classNames.bind(styles);
interface Imenu {
    popup: (isReload: boolean) => void;
}
function SideBarNavigation({ popup }: Imenu) {
    return (
        <div className={cx('sidebar')}>
            <div className={cx('sidebar-overlay')}></div>
            <div className={cx('sidebar__wrapper')}>
                <button type="button" onClick={() => popup(true)} className={cx('sidebar__wrapper-close')}>
                    <CloseIcon width="70" height="70" />
                </button>

                <div className={cx('sidebar__wrapper-info')}>
                    <div className={cx('sidebar__wrapper-info-avatar')}>
                        <Image
                            src="/images/thang.jpg"
                            alt=""
                            width={800}
                            height={800}
                            className={cx('sidebar__wrapper-info-img')}
                        />
                    </div>
                    <h3 className={cx('sidebar__wrapper-info-name')}>Nguyễn Cao Thăng</h3>
                </div>
                <div className={cx('sidebar__wrapper-seperate')}></div>
                <ul className={cx('sidebar__wrapper-list')}>
                    <li className={cx('sidebar__wrapper-item')}>
                        <Link href="/" className={cx('sidebar__wrapper-link')}>
                            <HomeIcon width="50" height="50" className={cx('icon-menu')} />
                            <span className={cx('sidebar__wrapper-link-title')}>Trang chủ</span>
                        </Link>
                    </li>
                    <li className={cx('sidebar__wrapper-item')}>
                        <Link href="/cart" className={cx('sidebar__wrapper-link')}>
                            <CartMenuIcon width="50" height="50" className={cx('icon-menu')} />
                            <span className={cx('sidebar__wrapper-link-title')}>Giỏ hàng</span>
                        </Link>
                    </li>
                    <li className={cx('sidebar__wrapper-item')}>
                        <Link href="/profile/1" className={cx('sidebar__wrapper-link')}>
                            <UserIcon fill="#5ec9dd" width="50" height="50" className={cx('icon-menu')} />
                            <span className={cx('sidebar__wrapper-link-title')}>Thay đổi thông tin</span>
                        </Link>
                    </li>

                    <li className={cx('sidebar__wrapper-item')}>
                        <Link href="/product" className={cx('sidebar__wrapper-link')}>
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
                        <Link href="/logout" className={cx('sidebar__wrapper-link')}>
                            <LogoutIcon width="50" height="50" className={cx('icon-menu')} />
                            <span className={cx('sidebar__wrapper-link-title')}>Đăng xuất</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SideBarNavigation;
