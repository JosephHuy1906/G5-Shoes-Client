import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import Link from 'next/link';

const cx = classNames.bind(styles);

function ListOderComponent() {
    return (
        <div className={cx('main__wrapper-box')}>
            <div className={cx('main__wrapper-profile-header')}>
                <h2 className={cx('main__wrapper-profile-header-title')}>Đơn hàng của tôi</h2>
                <p className={cx('main__wrapper-profile-header-desc')}>Quản lý thông tin đơn hàng ở mọi trạng thái</p>
            </div>
            <div className={cx('main__wrapper-parent')}>
                <div className={cx('main__wrapper-search')}>
                    <button className={cx('main__wrapper-search-btn')}>
                        <i className={cx('fa-solid fa-magnifying-glass')}></i>
                    </button>
                    <input
                        type="text"
                        className={cx('main__wrapper-search-input')}
                        placeholder="Tìm kiếm theo tên sản phẩm"
                    />
                </div>
                <ul className={cx('main__wrapper-list')}>
                    <li className={cx('main__wrapper-item')}>
                        <form method="post">
                            <div className={cx('main__wrapper-component')}>
                                <div className={cx('main__wrapper-component-info')}>
                                    <div className={cx('main__wrapper-component-info-avatar')}>
                                        <img
                                            src="<?php echo $name->getAvatar1(); ?>"
                                            alt=""
                                            className={cx('main__wrapper-component-info-img')}
                                        />
                                    </div>
                                    <div className={cx('main__wrapper-component-info-text')}>
                                        <h3 className={cx('main__wrapper-component-info-name')}></h3>
                                        <div className={cx('main__wrapper-component-info-desc')}>
                                            <p className={cx('main__wrapper-component-info-word')}>Size:</p>
                                            <p className={cx('main__wrapper-component-info-word')}>Hãng:</p>
                                            <p className={cx('main__wrapper-component-info-word')}>Số lượng: 1</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('main__wrapper-component-actions')}>
                                    <div className={cx('main__wrapper-component-status')}>
                                        Trạng thái:
                                        <p className={cx('main__wrapper-component-status-text delivery')}>
                                            <i className={cx('fa-solid fa-arrow-up-from-ground-water')}></i>
                                            <span className={cx('main__wrapper-component-status-word')}>
                                                Chờ xác nhận
                                            </span>
                                        </p>
                                    </div>

                                    <div className={cx('main__wrapper-component-status')}>
                                        Trạng thái:
                                        <p className={cx('main__wrapper-component-status-text confirmed')}>
                                            <i className={cx('fa-solid fa-clipboard-check')}></i>
                                            <span className={cx('main__wrapper-component-status-word')}>
                                                Đã xác nhận
                                            </span>
                                        </p>
                                    </div>

                                    <div className={cx('main__wrapper-component-status')}>
                                        Trạng thái:
                                        <p className={cx('main__wrapper-component-status-text delivery')}>
                                            <i className={cx('fa-solid fa-truck')}></i>
                                            <span className={cx('main__wrapper-component-status-word')}>
                                                Đang giao hàng
                                            </span>
                                        </p>
                                    </div>

                                    <div className={cx('main__wrapper-component-status')}>
                                        Trạng thái:
                                        <p className={cx('main__wrapper-component-status-text success')}>
                                            <i className={cx('fa-solid fa-people-carry-box')}></i>
                                            <span className={cx('main__wrapper-component-status-word')}>
                                                Đã giao hàng thành công
                                            </span>
                                        </p>
                                    </div>

                                    <div className={cx('main__wrapper-component-status')}>
                                        Trạng thái:
                                        <p className={cx('main__wrapper-component-status-text canceled')}>
                                            <i className={cx('fa-solid fa-rectangle-xmark')}></i>
                                            <span className={cx('main__wrapper-component-status-word')}>Đã Huỷ</span>
                                        </p>
                                    </div>

                                    <div className={cx('main__wrapper-component-total')}>
                                        Tổng thanh toán:
                                        <span className={cx('main__wrapper-component-old-price')}>đ</span>
                                        <span className={cx('main__wrapper-component-current-price')}>đ</span>
                                    </div>
                                    <div className={cx('main__wrapper-component-submit')}>
                                        <a
                                            href="<?php echo './detail.php?id='.$query->getProductIDFromBillDetail() ?>"
                                            className={cx('main__wrapper-component-btn')}
                                        >
                                            {' '}
                                            Mua lại{' '}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ListOderComponent;
