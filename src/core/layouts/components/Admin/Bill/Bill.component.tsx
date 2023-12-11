import React from 'react';
import classNames from 'classnames/bind';
import styles from './Bill.module.scss';

const cx = classNames.bind(styles);
export default function BillComponent() {
    return (
        <div className={cx('js-tab-content')}>
            <div className={cx('manage-content')}>
                <div className={cx('manage-content-bill-tab active')}>
                    <h1 className={cx('manage-content__title')}>Manage All Bill</h1>
                    <div className={cx('comment-all__wrapper')}>
                        <div className={cx('scroll-comment')}>
                            <div className={cx('comment-all__box')}>
                                <div className={cx('comment-all__content js-tab-bill')}>
                                    <div className={cx('comment-all__content-index')}></div>
                                    <div className={cx('comment-all__content-info bill')}>
                                        <div className={cx('comment-all__content-info-avatar')}>
                                            <img src="" alt="" className={cx('comment-all__content-info-img')} />
                                        </div>
                                        <div className={cx('comment-all__content-info-text bill')}>
                                            <h3 className={cx('comment-all__content-info-name')}></h3>
                                            <p className={cx('comment-all__content-info-time')}></p>
                                            <div className={cx('bill__content')}>
                                                <div className={cx('bill__content-line')}>
                                                    <h3 className={cx('bill__content-line-one-title')}>
                                                        <span className={cx('bill__content-line-one-text')}>
                                                            Bill id:{' '}
                                                        </span>
                                                        <span className={cx('bill__content-line-one-text')}></span>
                                                    </h3>
                                                    <h3 className={cx('bill__content-line-one-title')}>
                                                        <span className={cx('bill__content-line-one-text')}>
                                                            User id:{' '}
                                                        </span>
                                                        <span className={cx('bill__content-line-one-text')}></span>
                                                    </h3>
                                                    <h3 className={cx('bill__content-line-one-title')}>
                                                        <span className={cx('bill__content-line-one-text')}>
                                                            Phone number:{' '}
                                                        </span>
                                                        <span className={cx('bill__content-line-one-text')}></span>
                                                    </h3>

                                                    <h3 className={cx('bill__content-line-one-title')}>
                                                        <span className={cx('bill__content-line-one-text')}>
                                                            Purchase Date:{' '}
                                                        </span>
                                                        <span className={cx('bill__content-line-one-text')}></span>
                                                    </h3>
                                                </div>
                                                <div className={cx('bill__content-line')}>
                                                    <h3 className={cx('bill__content-line-one-title ml0')}>
                                                        <span className={cx('bill__content-line-one-text')}>
                                                            Total Bill:{' '}
                                                        </span>
                                                        <span className={cx('bill__content-line-one-text')}></span>
                                                    </h3>
                                                    <h3 className={cx('bill__content-line-one-title ml0')}>
                                                        <span className={cx('bill__content-line-one-text')}>
                                                            Address Bill:{' '}
                                                        </span>
                                                        <span className={cx('bill__content-line-one-text')}></span>
                                                    </h3>
                                                </div>
                                            </div>

                                            <div className={cx('form__bill-chitiet')}>
                                                <div className={cx('bill_chitiet')}>
                                                    <img src="" alt="" />
                                                    <div className={cx('Bill_chitiets')}>
                                                        <h4></h4>
                                                        <div className={cx('chitiets_nameProduct')}>
                                                            <p>Size:</p>
                                                            <p>Giá: đ</p>
                                                        </div>
                                                    </div>
                                                    <div className={cx('bill_trangthai')}></div>
                                                </div>
                                            </div>

                                            <div className={cx('form__bill-wrapper')}>
                                                <form id="form-bill-confirmed" className={cx('form__bill')}>
                                                    <input id="input-confirmed" type="hidden" name="detailId" />
                                                    <input
                                                        id="input-confirmed"
                                                        type="hidden"
                                                        value="2"
                                                        name="status-id-input"
                                                    />
                                                    <button
                                                        type="submit"
                                                        name="submit"
                                                        className={cx('form__bill-btn confirmed')}
                                                    >
                                                        Đã xác nhận
                                                    </button>
                                                </form>
                                                <form id="form-bill-delivering" className={cx('form__bill')}>
                                                    <input
                                                        id="input-confirmed"
                                                        type="hidden"
                                                        value="<?php echo $bills->getBillID();?>"
                                                        name="detailId"
                                                    />
                                                    <input
                                                        id="input-delivering"
                                                        type="text"
                                                        value="3"
                                                        name="status-id-input"
                                                        hidden
                                                    />
                                                    <button
                                                        type="submit"
                                                        name="submit"
                                                        className={cx('form__bill-btn delivering')}
                                                    >
                                                        Đang giao hàng
                                                    </button>
                                                </form>
                                                <form id="form-bill-delivered" className={cx('form__bill')}>
                                                    <input
                                                        id="input-confirmed"
                                                        type="hidden"
                                                        value="<?php echo $bills->getBillID();?>"
                                                        name="detailId"
                                                    />
                                                    <input
                                                        id="input-delivered"
                                                        type="text"
                                                        value="4"
                                                        name="status-id-input"
                                                        hidden
                                                    />
                                                    <button
                                                        type="submit"
                                                        name="submit"
                                                        className={cx('form__bill-btn delivered')}
                                                    >
                                                        Đã giao hàng thành công
                                                    </button>
                                                </form>
                                                <form id="form-bill-order-cancellation" className={cx('form__bill')}>
                                                    <input
                                                        id="input-confirmed"
                                                        type="hidden"
                                                        value="<?php echo $bills->getBillID();?>"
                                                        name="detailId"
                                                    />
                                                    <input
                                                        id="input-order-cancellation"
                                                        type="text"
                                                        value="5"
                                                        name="status-id-input"
                                                        hidden
                                                    />
                                                    <button
                                                        type="submit"
                                                        name="submit"
                                                        className={cx('form__bill-btn order-cancellation')}
                                                    >
                                                        Đã huỷ
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={cx('comment-all__actions')}>
                                        <button className={cx('bill-all__actions-btn')}>Actions</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
