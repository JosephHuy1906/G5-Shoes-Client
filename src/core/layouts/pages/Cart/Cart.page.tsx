'use client';
import classNames from 'classnames/bind';
import style from './Cart.module.scss';
import { LocalStorageSide } from '@/utils/clientStore.util';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ICart, IProduct } from '@/core/common/interfaces/collection.interface';
import { formatMonneyCurrency } from '@/utils/format.util';
import { DeleteIcon } from '@/shared/components/Svg/index.component';
import { useRouter } from 'next/navigation';
import swal from 'sweetalert2';

import Link from 'next/link';

const cx = classNames.bind(style);
const localStorageInstance = new LocalStorageSide();
function CartComponent() {
    const router = useRouter();
    const [totalAmount, setTotalAmount] = useState<number>();
    const [cart, setCart] = useState<ICart[]>([]);
    const [dataCart, setDataCart] = useState<ICart[]>(() => {
        const dataCart = localStorageInstance.getStore('dataFromCart');
        return dataCart || [];
    });

    useEffect(() => {
        calculateTotal();
    }, [dataCart]);

    const updateQuantity = (index: number, newQuantity: number) => {
        const updatedCart = [...dataCart];
        updatedCart[index].quantity = newQuantity;
        updatedCart[index].total = updatedCart[index].quantity * updatedCart[index].price;
        setCart(updatedCart);
        localStorageInstance.setStore('dataFromCart', updatedCart);
        calculateTotal();
    };

    const removeItem = (index: number) => {
        const updatedCart = [...dataCart];
        swal({
            title: 'Bạn có chắc chắn không?',
            text: 'Xoá sản phẩm này khỏi giỏ hàng!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Có, tôi muốn xoá!',
            cancelButtonText: 'Không',
        }).then(
            function () {
                updatedCart.splice(index, 1);
                setCart(updatedCart);
                localStorageInstance.setStore('dataFromCart', updatedCart);
                calculateTotal();
                window.location.reload();
                swal('Xoá thành công!', 'Sản phẩm đã bị xoá', 'success');
            },
            function (dismiss) {
                if (dismiss === 'cancel') {
                    swal('Huỷ', 'Sản phẩm vẫn còn', 'error');
                }
            },
        );
    };
    const convertToCheckoutData = (cartData: ICart[]) => {
        return cartData.map((item) => {
            return {
                productID: item.id,
                sizeID: item.size,
                price: item.price,
                quantity: item.quantity,
            };
        });
    };
    const increaseQuantity = (index: number) => {
        const updatedQuantity = dataCart[index].quantity + 1;
        updateQuantity(index, updatedQuantity);
    };

    const decreaseQuantity = (index: number) => {
        const updatedQuantity = Math.max(dataCart[index].quantity - 1, 1);
        updateQuantity(index, updatedQuantity);
    };

    const calculateTotal = () => {
        const totalAmounts = dataCart.reduce((total, item) => total + item.total, 0);
        setTotalAmount(totalAmounts);
    };

    const handleCheckout = () => {
        const checkoutData = convertToCheckoutData(dataCart);
        localStorageInstance.setStore('dataFormCheckOut', checkoutData);
        router.replace('/checkout');
    };
    return (
        <div className={cx('grid wide')}>
            <h2 className={cx('main__title')}>Giỏ hàng của tôi</h2>
            <p className={cx('main__note')}>
                <i className={cx('fa-solid fa-circle-exclamation main__note-icon')}></i>
                <span className={cx('main__note-text')}>
                    G5 Shoes thông báo: quý khách vui lòng kiểm tra thông tin đầy đủ trước khi đặt hàng
                </span>
            </p>
            <div className={cx('main__wrapper')}>
                <tr className={cx('main__wrapper-table')}>
                    <td className={cx('td-product')}>Sản phẩm</td>
                    <td className={cx('td-size')}>Size giày</td>
                    <td className={cx('td-quantity')}>Số lượng</td>
                    <td className={cx('td-price')}>Thành tiền</td>
                </tr>

                <div className={cx('main-render-product')}>
                    {dataCart.length > 0 &&
                        dataCart.map((item, index) => (
                            <div key={index} className={cx('main__wrapper-product')}>
                                <span hidden className={cx('idProd__store')}></span>
                                <div className={cx('main__wrapper-product-main')}>
                                    <div className={cx('main__wrapper-product-info')}>
                                        <a className={cx('main__wrapper-product-info-avatar')}>
                                            <Image
                                                src={'/images/' + item.img1}
                                                alt=""
                                                width={150}
                                                height={150}
                                                className={cx('main__wrapper-product-info-img')}
                                            />
                                        </a>
                                        <div className={cx('main__wrapper-product-info-text')}>
                                            <h3 className={cx('main__wrapper-product-info-name')}>{item.name}</h3>
                                            <div className={cx('main__wrapper-product-info-desc')}>
                                                <span className={cx('main__wrapper-product-info-sale')}>
                                                    {item.sale} Giảm
                                                </span>
                                                <span className={cx('main__wrapper-product-info-freeship')}>
                                                    Free ship
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('main__wrapper-product-size')}>{item.size}</div>
                                    <div className={cx('main__wrapper-product-quantity')}>
                                        <div className={cx('main__wrapper-product-quantity-box')}>
                                            <button
                                                type="button"
                                                className={cx('main__wrapper-product-quantity-discount')}
                                                onClick={() => decreaseQuantity(index)}
                                            >
                                                -
                                            </button>
                                            <input
                                                type="text"
                                                min="1"
                                                max="99"
                                                className={cx('main__wrapper-product-quantity-input')}
                                                value={item.quantity}
                                                readOnly
                                            />
                                            <button
                                                type="button"
                                                className={cx('main__wrapper-product-quantity-increase')}
                                                onClick={() => increaseQuantity(index)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <div className={cx('main__wrapper-product-quantity-price')}>
                                        <span className={cx('main__wrapper-product-quantity-price-current')}>
                                            {formatMonneyCurrency(item.total)}
                                        </span>
                                    </div>
                                </div>
                                <div className={cx('main__wrapper-product-manipulation')}>
                                    <div
                                        className={cx('main__wrapper-product-remove')}
                                        onClick={() => removeItem(index)}
                                    >
                                        <DeleteIcon width="20" height="50" />
                                        <span className={cx('main__wrapper-product-text')}>Xoá</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
            <div className={cx('main__checkout')}>
                <div className={cx('main__checkout-right')}>
                    <div className={cx('main__checkout-right-total')}>
                        <span className={cx('main__checkout-total-title')}>
                            Tổng thanh toán ({dataCart.length} sản phẩm):
                        </span>
                        <span className={cx('main__checkout-right-total-price')} defaultValue="0">
                            {formatMonneyCurrency(totalAmount || 0)}
                        </span>
                    </div>
                    <button onClick={handleCheckout} className={cx('main__checkout-right-link-checkout')}>
                        Mua Hàng
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartComponent;
