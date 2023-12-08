import classNames from 'classnames/bind';
import style from './Checkout.module.scss';
import { ErrorIcon } from '@/shared/components/Svg/index.component';

const cx = classNames.bind(style);

function CheckoutComponent() {
    return (
        <div className={cx('main')}>
            <div className={cx('grid wide')}>
                <h2 className={cx('main__title')}>Thanh toán</h2>
                <p className={cx('main__note')}>
                    <ErrorIcon />
                    <span className={cx('main__note-text')}>
                        G5 Shoes thông báo: quý khách vui lòng kiểm tra thông tin đầy đủ trước khi đặt hàng
                    </span>
                </p>
                <div className={cx('main__content')}>
                    <form action="../controller/BillController.php" method="post">
                        <div className={cx('row sm-gutter')}>
                            <div className={cx('col l-8')}>
                                <div className={cx('main__wrapper')}>
                                    <div className={cx('main__wrapper-box')}>
                                        <h1 className={cx('main__wrapper-box-title')}>Chi tiết cá nhân</h1>
                                        <div className={cx('main__wrapper-box-info')}>
                                            <div className={cx('row sm-gutter')}>
                                                <div className={cx('col l-6')}>
                                                    <div className={cx('main__wrapper-box-component')}>
                                                        <label
                                                            htmlFor="input-fullname"
                                                            className={cx('main__wrapper-box-component-label')}
                                                        >
                                                            Họ và tên
                                                        </label>
                                                        <input
                                                            id="input-fullname"
                                                            type="text"
                                                            className={cx('main__wrapper-box-component-input')}
                                                        />
                                                    </div>
                                                    <span className={cx('main__wrapper-box-component-error')}></span>
                                                </div>
                                                <div className={cx('col l-6')}>
                                                    <div className={cx('main__wrapper-box-component')}>
                                                        <label
                                                            htmlFor="input-numberphone"
                                                            className={cx('main__wrapper-box-component-label')}
                                                        >
                                                            Số điện thoại
                                                        </label>
                                                        <input
                                                            id="input-numberphone"
                                                            type="text"
                                                            className={cx('main__wrapper-box-component-input')}
                                                        />
                                                    </div>
                                                    <span className={cx('main__wrapper-box-component-error')}></span>
                                                </div>
                                            </div>
                                   
                                                <div className={cx('row sm-gutter')}>
                                                    <div className={cx('col l-12')}>
                                                        <div className={cx('main__wrapper-box-component')}>
                                                            <label
                                                                htmlFor="input-email"
                                                                className={cx('main__wrapper-box-component-label')}
                                                            >
                                                                Email
                                                            </label>
                                                            <input
                                                                id="input-email"
                                                                type="text"
                                                                className={cx('main__wrapper-box-component-input')}
                                                                name="email"
                                                            />
                                                        </div>
                                                        <span
                                                            className={cx('main__wrapper-box-component-error')}
                                                        ></span>
                                                    </div>
                                                </div>
                                        
                                        </div>
                                    </div>

                                    <div className={cx('main__wrapper-box mt-40')}>
                                        <h1 className={cx('main__wrapper-box-title')}>Chi tiết vận chuyển</h1>
                                        <div className={cx('main__wrapper-box-info')}>
                                            <div className={cx('row sm-gutter')}>
                                                <div className={cx('col l-12')}>
                                                    <div className={cx('main__wrapper-box-component')}>
                                                        <label
                                                            htmlFor="input-address"
                                                            className={cx('main__wrapper-box-component-label')}
                                                        >
                                                            Địa chỉ giao hàng
                                                        </label>
                                                        <input
                                                            id="input-address"
                                                            type="text"
                                                            className={cx('main__wrapper-box-component-input')}
                                                            name="address"
                                                        />
                                                    </div>
                                                    <span className={cx('main__wrapper-box-component-error')}></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('col l-4')}>
                                <div className={cx('main__wrapper')}>
                                    <div className={cx('main__wrapper-header')}>
                                        <h2 className={cx('main__wrapper-title')}>Giỏ hàng của tôi</h2>
                                        <button className={cx('main__wrapper-btn-remove-all')}>Xoá tất cả</button>
                                        <div className={cx('modal')}>
                                            <div className={cx('modal__message')}>
                                                <div className={cx('modal__header')}>
                                                    <i className={cx('fa-regular fa-circle-question')}></i>
                                                    <span className={cx('modal__header-title')}>G5 Thông Báo</span>
                                                </div>
                                                <div className={cx('modal__content')}>
                                                    <h3 className={cx('modal__content-text')}>
                                                        Bạn có muốn xoá hết tất cả sản phẩm không?
                                                    </h3>
                                                </div>
                                                <div className={cx('modal__actions')}>
                                                    <button className={cx('modal__actions-agree')}>
                                                        <i className={cx('fa-solid fa-check modal__icon')}></i>
                                                        <span className={cx('modal__actions-agree-title')}>Đồng Ý</span>
                                                    </button>
                                                    <button className={cx('modal__actions-cancel')}>
                                                        <i className={cx('fa-solid fa-xmark modal__icon')}></i>
                                                        <span className={cx('modal__actions-agree-title')}>Huỷ Bỏ</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className={cx('main__wrapper-list')}></ul>
                                    <div className={cx('main__order')}>
                                        <div className={cx('main__order-subtotal')}>
                                            <div className={cx('main__order-subtotal-title')}>Tổng phụ</div>
                                            <div className={cx('main__order-subtotal-price')}>0đ</div>
                                        </div>
                                        <div className={cx('main__order-total')}>
                                            <div className={cx('main__order-sales-discount')}>Tổng thanh toán</div>
                                            <div className={cx('main__order-total-price')} defaultValue="0">
                                                0đ
                                            </div>
                                        </div>
                                    </div>

                                    <input className={cx('data')} name="list-data" value="" hidden />
                                    <button type="submit" className={cx('main__order-btn-total-price')} name="submit">
                                        Thanh toán
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CheckoutComponent;
