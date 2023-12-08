import classNames from 'classnames/bind';
import style from './Cart.module.scss';

const cx = classNames.bind(style);

function CartComponent() {
    return (
        <div className={cx("grid wide")}>
            <h2 className={cx("main__title")}>Giỏ hàng của tôi</h2>
            <p className={cx("main__note")}>
                <i className={cx("fa-solid fa-circle-exclamation main__note-icon")}></i>
                <span className={cx("main__note-text")}>
                    G5 Shoes thông báo: quý khách vui lòng kiểm tra thông tin đầy đủ trước khi đặt hàng
                </span>
            </p>
            <div className={cx("main__wrapper")}>
                <div className={cx("main__wrapper-table")}>
                    <label htmlFor="checkbox-all-" className={cx("main__wrapper-stardust")}>
                        <input
                            id="checkbox-all"
                            name="check"
                            type="checkbox"
                            className={cx("main__wrapper-stardust-input")}
                        />
                        <div className={cx("main__wrapper-stardust-box")}>
                            <i className={cx("fa-solid fa-check main__wrapper-stardust-box-icon")}></i>
                        </div>
                    </label>
                    <div className={cx("main__wrapper-title product")}>Sản phẩm</div>
                    <div className={cx("main__wrapper-title size")}>Size giày</div>
                    <div className={cx("main__wrapper-title quantity")}>Số lượng</div>
                    <div className={cx("main__wrapper-title price")}>Thành tiền</div>
                </div>

                <div className={cx("main-render-product")}></div>
            </div>
            <div className={cx("main__checkout")}>
                <div className={cx("main__checkout-left")}>
                    <label htmlFor="#checkout-all" className={cx("main__checkout-stardust js-checkAll-footer")}>
                        <input id="checkout-all" type="checkbox" className={cx("main__checkout-stardust-input")} />
                        <div className={cx("main__checkout-stardust-box")}>
                            <i className={cx("fa-solid fa-check main__checkout-stardust-box-icon")}></i>
                        </div>
                    </label>
                    <button className={cx("main__checkout-btn-select-all")}>Chọn tất cả</button>
                    <button className={cx("main__checkout-btn-remove")}>
                        <i className={cx("fa-regular fa-trash-can")}></i>
                        <span className={cx("main__checkout-btn-remove-text")}>Xoá</span>
                    </button>
                    <p className={cx("main__checkout-selected")}>0 sản phẩm đã chọn</p>
                    <div className={cx("main__checkout-modal")}>
                        <div className={cx("main__checkout-message")}>
                            <h3 className={cx("main__checkout-message-header")}>
                                <i className={cx("fa-regular fa-circle-question main__checkout-message-icon")}></i>
                                <span className={cx("main__checkout-message-title")}>G5 Shoes Thông Báo</span>
                            </h3>
                            <div className={cx("main__checkout-message-content")}>
                                <h4 className={cx("ain__checkout-message-content-title")}>
                                    Bạn có muốn xoá 1 sản phẩm không?
                                </h4>
                            </div>
                            <div className={cx("main__checkout-message-actions")}>
                                <button className={cx("main__checkout-message-agree")}>Đồng ý</button>
                                <button className={cx("main__checkout-message-cancel")}>Huỷ bỏ</button>
                            </div>
                        </div>
                    </div>
                    <div className={cx("main__checkout-note")}>
                        <div className={cx("main__checkout-message")}>
                            <h3 className={cx("main__checkout-message-header")}>
                                <i className={cx("fa-regular fa-circle-question main__checkout-message-icon")}></i>
                                <span className={cx("main__checkout-message-title")}>G5 Shoes Thông Báo</span>
                            </h3>
                            <h4 className={cx("main__checkout-note-text")}>Vui lòng chọn sản phẩm</h4>
                        </div>
                    </div>
                </div>
                <div className={cx("main__checkout-right")}>
                    <div className={cx("main__checkout-right-total")}>
                        <span className={cx("main__checkout-total-title")}>
                            Tổng thanh toán(<span>0</span> sản phẩm):
                        </span>
                        <span className={cx("main__checkout-right-total-price")} defaultValue="0">
                            0đ
                        </span>
                    </div>
                    <a href="/checkout" className={cx("main__checkout-right-link-checkout")}>
                        Mua Hàng
                    </a>
                </div>
            </div>
        </div>
    );
}

export default CartComponent;
