'use client';
import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ProductDetail.module.scss';
import { ICart, IProduct } from '@/core/common/interfaces/collection.interface';
import AxiosConfig from '@/configs/AxiosConfig';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { formatMonneyCurrency } from '@/utils/format.util';
import { toast } from 'react-toastify';
import LoadingPage from '@/shared/components/Loading/LoadingPage/LoadingPage.component';
import { LocalStorageSide } from '@/utils/clientStore.util';

const cx = classNames.bind(styles);

function calculateDiscountPercentage(oldPrice: number, newPrice: number) {
    if (oldPrice > 0) {
        const discountPercentage = ((oldPrice - newPrice) / oldPrice) * 100;
        return isFinite(discountPercentage) ? Math.round(discountPercentage) : 0;
    } else {
        return 0;
    }
}

const size = [
    { id: 1, size: 39 },
    { id: 2, size: 40 },
    { id: 3, size: 41 },
    { id: 4, size: 42 },
];

const localStorageInstance = new LocalStorageSide();
export default function ProductDetail() {
    const router = usePathname();
    const routerpage = useRouter();
    const id = router.split('/product/')[1];
    const [product, setProduct] = useState<IProduct>();
    const [amount, setAmount] = useState<number>(1);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
    const [selectedImage, setSelectedImage] = useState<string>(product?.img1 || '');
    const [selectedSize, setSelectedSize] = useState<number | null>(null);
    const [selectedProductInfo, setSelectedProductInfo] = useState<ICart | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        detailPro();
    }, [amount, selectedSize]);

    const detailPro = () => {
        AxiosConfig.get('/products/' + id)
            .then((response) => {
                setProduct(response.data.data);
                setSelectedImage(response.data.data?.img1 || '');
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handleImageClick = (image: string) => {
        setSelectedImage(image);
    };
    const handleAmountChange = (value: number) => {
        const newAmount = amount + value;
        if (newAmount >= 1 && newAmount <= 99) {
            setAmount(newAmount);
        }
    };

    const handleSizeSelection = (size: number) => {
        setSelectedSize(size);
    };

    const handleAddToCart = async () => {
        if (selectedSize !== null && amount > 0) {
            const selectedInfo = {
                id: product?.id || '',
                name: product?.name || '',
                img1: product?.img1 || '',
                price: product?.newPrice || 0,
                sale: `${calculateDiscountPercentage(product?.oldPrice || 0, product?.newPrice || 0)}%`,
                total: (product?.newPrice || 0) * amount,
                size: selectedSize,
                quantity: amount,
            };

            const existingData = localStorageInstance.getStore('dataFromCart');

            if (existingData) {
                const existingProductIndex = existingData.findIndex(
                    (item: IProduct) => item.id === selectedInfo.id && item.size === selectedInfo.size,
                );

                if (existingProductIndex !== -1) {
                    existingData[existingProductIndex].quantity += selectedInfo.quantity;
                    existingData[existingProductIndex].total += selectedInfo.total;
                } else {
                    existingData.push(selectedInfo);
                }

                localStorage.setItem('dataFromCart', JSON.stringify(existingData));
            } else {
                const newData = [selectedInfo];
                localStorage.setItem('dataFromCart', JSON.stringify(newData));
                toast.success('Đã thêm sản phẩm vào giỏ hàng.');
                routerpage.refresh();
            }
            setSelectedSize(null);

            setAmount(1);
            toast.success('Đã thêm sản phẩm vào giỏ hàng.');
            routerpage.refresh();
        } else {
            toast.warn('Vui lòng chọn kích thước');
        }
    };

    const handleBuyNow = () => {
        if (isLoggedIn === false) {
            toast.error('Bạn cần đăng nhập để mua sản phẩm.');
        } else {
            routerpage.replace('/checkout');
        }
    };
    if (loading) {
        return <LoadingPage />;
    }

    return (
        <>
            {product && (
                <div className={cx('main')}>
                    <div className={cx('grid wide')}>
                        <h3 className={cx('main-part')}>Trang chủ {'>'} Chi tiết sản phẩm</h3>
                        <div className={cx('main__content')}>
                            <form id="form-action-detail" method="post">
                                <h3 id="id-product" hidden>
                                    {product.id}
                                </h3>
                                <div className={cx('row')}>
                                    <div className={cx('col l-6 m-6 c-12')}>
                                        <div className={cx('main__show')}>
                                            <div className={cx('main-show-img-root')}>
                                                <Image
                                                    src={'/images/' + selectedImage}
                                                    alt=""
                                                    height={200}
                                                    width={500}
                                                    className={cx('main__show-img')}
                                                />
                                            </div>

                                            <div className={cx('main__show-control')}>
                                                {['img1', 'img2', 'img3', 'img4'].map((img, index) => (
                                                    <div
                                                        key={index}
                                                        className={cx('main__show-control-box', {
                                                            active: selectedImage === (product as any)[img],
                                                        })}
                                                        onClick={() => handleImageClick((product as any)[img])}
                                                    >
                                                        <Image
                                                            height={90}
                                                            width={90}
                                                            src={'/images/' + (product as any)[img]}
                                                            alt=""
                                                            className={cx('main__show-control-img')}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('col l-6 m-6 c-12')}>
                                        <div className={cx('main__information')}>
                                            <form id="form-action-detail" method="post">
                                                <h1 className={cx('main__information-title')}>{product.name}</h1>

                                                <div className={cx('main__information-price')}>
                                                    <span className={cx('main__information-old-price')}>
                                                        {formatMonneyCurrency(product.oldPrice)}
                                                    </span>
                                                    <span className={cx('main-information-price-default')} hidden>
                                                        {formatMonneyCurrency(product.newPrice)}
                                                    </span>
                                                    <span className={cx('main__information-current-price')}>
                                                        {formatMonneyCurrency(product.newPrice)}
                                                    </span>
                                                    <span className={cx('price__store')} hidden>
                                                        {product.oldPrice}
                                                    </span>
                                                    <span className={cx('main__information-sale')}>
                                                        Sale:
                                                        <span className={cx('main__information-sale-number')}>
                                                            {calculateDiscountPercentage(
                                                                product.oldPrice,
                                                                product.newPrice,
                                                            )}
                                                            %
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className={cx('main__information-size')}>
                                                    <h3 className={cx('main__information-size-title')}>
                                                        Kích thước giày:
                                                    </h3>
                                                    <div className={cx('main__information-size-wrapper')}>
                                                        {size.map((item) => (
                                                            <div
                                                                key={item.id}
                                                                className={cx('main__information-size-box', {
                                                                    active: selectedSize === item.size,
                                                                })}
                                                                onClick={() => handleSizeSelection(item.size)}
                                                            >
                                                                <span className={cx('main__information-size-number')}>
                                                                    {item.size}
                                                                </span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <div className={cx('main__information-size-error')}>
                                                        <i className={cx('fa-solid fa-circle-exclamation')}></i>
                                                        <span
                                                            className={cx('main__information-size-error-text')}
                                                        ></span>
                                                    </div>
                                                </div>
                                                <div className={cx('main__information-amount')}>
                                                    <h3 className={cx('main__information-amount-title')}>Số lượng: </h3>
                                                    <div className={cx('main__information-amount-quantity')}>
                                                        <label
                                                            onClick={() => handleAmountChange(-1)}
                                                            className={cx('main__information-amount-quantity-decrease')}
                                                        >
                                                            -
                                                        </label>
                                                        <input
                                                            type="text"
                                                            value={amount}
                                                            min="1"
                                                            max="99"
                                                            name="input-amount"
                                                            className={cx('main__information-amount-quantity-input')}
                                                        />
                                                        <label
                                                            onClick={() => handleAmountChange(1)}
                                                            className={cx('main__information-amount-quantity-increase')}
                                                        >
                                                            +
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className={cx('main__information-order')}>
                                                    <button
                                                        id="add-cart"
                                                        type="button"
                                                        onClick={handleAddToCart}
                                                        className={cx('main__information-order-add-cart')}
                                                    >
                                                        <i
                                                            className={cx(
                                                                'fa-solid fa-cart-plus main__information-order-add-cart-icon',
                                                            )}
                                                        ></i>
                                                        <span>Thêm vào giỏ hàng</span>
                                                    </button>
                                                    <button
                                                        id="buy-now"
                                                        type="button"
                                                        onClick={handleBuyNow}
                                                        className={cx('main__information-buy-now')}
                                                    >
                                                        Mua ngay
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className={cx('main__detail')}>
                            <h2 className={cx('main__detail-title')}>Chi tiết sản phẩm</h2>
                            <p className={cx('main__detail-desc')}>{product.description}</p>
                        </div>
                        <div className={cx('main__review')}>
                            <h2 className={cx('main__review-title')}>Đánh giá</h2>
                            <div className={cx('main__review-wrapper')}>
                                <div className={cx('binhluan')}>
                                    <form id="comment">
                                        <h4>THÊM ĐÁNH GIÁ</h4>
                                        <div className={cx('user')}>
                                            <input type="hidden" name="userid" value="' . $_SESSION['userId'] . '" />
                                            <input type="hidden" name="idsp" value="' . $productID . '" />
                                            <input type="hidden" name="date" value="" />
                                            <textarea name="content" id="content"></textarea>
                                        </div>
                                        <input type="submit" value="Gửi" name="gui" />
                                    </form>

                                    <div className={cx('main__review-content')}>
                                        <div className={cx('main__review-content-avatar')}>
                                            <Image
                                                src="/images/hinh.png"
                                                width={40}
                                                height={40}
                                                alt="user"
                                                className={cx('main__review-content-img')}
                                            />
                                        </div>
                                        <div className={cx('main__review-content-text')}>
                                            <h3 className={cx('main__review-content-name')}>Nguyễn Quang Hy</h3>
                                            <p className={cx('main__review-content-timer')}>09/11/2023</p>
                                            <p className={cx('main__review-content-comment')}>sản phẩm tốt</p>
                                            <div className={cx('main__review-content-interactive')}>
                                                <button
                                                    type="button"
                                                    className={cx('main__review-content-interactive-btn like')}
                                                >
                                                    <i className={cx('fa-regular fa-thumbs-up')}></i>
                                                </button>
                                                <button
                                                    type="button"
                                                    className={cx('main__review-content-interactive-btn dislike')}
                                                >
                                                    <i className={cx('fa-regular fa-thumbs-down')}></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={cx('main__review_feedback')}>
                                        <div className={cx('main__review-content-avatar')}>
                                            <img
                                                src="/images/logo-chinh.jpg"
                                                alt=""
                                                className={cx('main__review-content-img')}
                                            />
                                        </div>
                                        <div className={cx('main__review-content-text')}>
                                            <h3 className={cx('main__review-content-name')}>G5 Shoes</h3>
                                            <p className={cx('main__review-content-timer')}>10/11/2023</p>
                                            <p className={cx('main__review-content-comment')}>Cảm ơn bạn</p>
                                            <div className={cx('main__review-content-inter active')}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
