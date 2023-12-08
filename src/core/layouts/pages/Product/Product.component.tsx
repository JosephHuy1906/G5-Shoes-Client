'use client';
import classNames from 'classnames/bind';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { memo, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './Product.module.scss';

const cx = classNames.bind(styles);

function ProductPage() {
    return (
        <div className={cx('main__product')}>
            <div className={cx('main__product-wrapper')}>
                <div className={cx('main__product-content')}>
                    <div className={cx('row')}>
                        <div className={cx('grid wide')}>
                            <h3 className={cx('main-part')}>Trang chủ sản phẩm</h3>
                        </div>

                        <div className={cx('col l-3')}>
                            <a
                                href="<?php echo './detail.php?id='.$productNew->getId() ?>"
                                className={cx('main__product-box')}
                            >
                                <div className={cx('main__product-box-picture')}>
                                    <div className={cx('giamgia')}>
                                        <p>1%</p>
                                    </div>

                                    <div className={cx('main__product-box-img')}></div>
                                </div>
                                <h3 className={cx('main__product-box-title')}>1</h3>
                                <div className={cx('main__product-box-price')}>
                                    <span className={cx('main__product-box-current-price')}>1đ</span>
                                    <span className={cx('main__product-box-old-price')}>1</span>
                                </div>
                                <div className={cx('main__product-box-color')}>
                                    <a
                                        href="<?php echo './detail.php?id='.$productNew->getId() ?>"
                                        className={cx('main__product-box-color-title')}
                                    >
                                        Xem chi tiết
                                    </a>
                                </div>
                            </a>
                        </div>

                        <div className={cx('col l-3')}>
                            <a
                                href="<?php echo './detail.php?id='.$productNew->getId() ?>"
                                className={cx('main__product-box')}
                            >
                                <div className={cx('main__product-box-picture')}>
                                    <div className={cx('giamgia')}>
                                        <p>%</p>
                                    </div>

                                    <div className={cx('main__product-box-img')}></div>
                                </div>
                                <h3 className={cx('main__product-box-title')}>1</h3>
                                <div className={cx('main__product-box-price')}>
                                    <span className={cx('main__product-box-current-price')}>1đ</span>
                                    <span className={cx('main__product-box-old-price')}>1</span>
                                </div>
                                <div className={cx('main__product-box-color')}>
                                    <a
                                        href="<?php echo './detail.php?id='.$productNew->getId() ?>"
                                        className={cx('main__product-box-color-title')}
                                    >
                                        Xem chi tiết
                                    </a>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className={cx('main__product-content')}>
                    <div className={cx('row')}>
                        <div className={cx('grid wide')}>
                            <h3 className={cx('main-part')}>Thương hiệu nổi tiếng</h3>
                        </div>

                        <div className={cx('col l-3')}>
                            <a
                                href="<?php echo './detail.php?id='.$productNew->getId() ?>"
                                className={cx('main__product-box')}
                            >
                                <div className={cx('main__product-box-picture')}>
                                    <div className={cx('main__product-box-img')}></div>
                                </div>
                                <h3 className={cx('main__product-box-title')}>Nike</h3>
                            </a>
                        </div>

                        <div className={cx('col l-3')}>
                            <a
                                href="<?php echo './detail.php?id='.$productNew->getId() ?>"
                                className={cx('main__product-box')}
                            >
                                <div className={cx('main__product-box-picture')}>
                                    <div className={cx('main__product-box-img')}></div>
                                </div>
                                <h3 className={cx('main__product-box-title')}>Adidat</h3>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(ProductPage);
