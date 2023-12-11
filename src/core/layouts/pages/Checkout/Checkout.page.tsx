'use client';
import classNames from 'classnames/bind';
import style from './Checkout.module.scss';
import { DeleteIcon, ErrorIcon } from '@/shared/components/Svg/index.component';
import { FormEvent, useCallback, useEffect, useState } from 'react';
import { LocalStorageSide } from '@/utils/clientStore.util';
import { ICart, IUser } from '@/core/common/interfaces/collection.interface';
import { formatMonneyCurrency } from '@/utils/format.util';
import Image from 'next/image';
import swal from 'sweetalert2';
import AxiosConfig from '@/configs/AxiosConfig';
import { useRouter } from 'next/navigation';
import LoadingPage from '@/shared/components/Loading/LoadingPage/LoadingPage.component';
import { toast } from 'react-toastify';

const cx = classNames.bind(style);
const localStorageInstance = new LocalStorageSide();

function CheckoutComponent() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [totalAmount, setTotalAmount] = useState<number>();
    const [cart, setCart] = useState<ICart[]>([]);
    const [user, setUser] = useState<IUser>();
    const token = localStorageInstance.getStore('access_token');
    const [dataCart, setDataCart] = useState<ICart[]>(() => {
        const dataCart = localStorageInstance.getStore('dataFromCart');
        return dataCart || [];
    });
    const oderDetail = localStorageInstance.getStore('dataFormCheckOut');
    useEffect(() => {
        calculateTotal();
    }, [dataCart]);

    useEffect(() => {
        if (!token) {
            setIsLoading(true);
            router.push('/login');
        }
    }, [token, router]);

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
                swal('Xoá thành công!', 'Sản phẩm đã bị xoá', 'success');
                router.refresh();
            },
            function (dismiss) {
                if (dismiss === 'cancel') {
                    swal('Huỷ', 'Sản phẩm vẫn còn', 'error');
                }
            },
        );
    };
    const calculateTotal = () => {
        const totalAmounts = dataCart.reduce((total, item) => total + item.total, 0);
        setTotalAmount(totalAmounts);
    };

    const profile = useCallback(() => {
        if (token) {
            AxiosConfig.get('/auth/profile').then((response) => {
                if (response.data.success) {
                    setUser(response.data.data);
                } else {
                    location.replace('/login');
                }
            });
        }
    }, [token]);

    useEffect(() => {
        if (!user) {
            profile();
        }
    }, [user, profile]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!user) {
            return;
        }

        if (!user.address || !user.phone) {
            toast.error('Hãy thêm địa chỉ giao hàng và số điện thoại');
            router.replace('/profile/' + user.id);
        } else {
            const dataOder = {
                userID: user.id,
                total: totalAmount,
                address: user.address,
                phone: user.phone,
            };

            AxiosConfig.post('/oder', dataOder).then((response) => {
                const dataDetail = oderDetail.map((item: any) => ({
                    oderID: response.data.data.id,
                    productID: item.productID,
                    size: item.sizeID,
                    price: item.price,
                    quantity: item.quantity,
                }));

                AxiosConfig.post('/oderdetail', dataDetail).then((response) => {
                    toast.success('Bạn đã đặt hàng thành công');
                    localStorage.removeItem('dataFormCheckOut');
                    localStorage.removeItem('dataFromCart');
                    router.replace('/');
                });
            });
        }
    };

    return (
        <div className={cx('main')}>
            {isLoading && <LoadingPage />}
            {!isLoading && user && (
                <div className={cx('grid wide')}>
                    <h2 className={cx('main__title')}>Thanh toán</h2>
                    <p className={cx('main__note')}>
                        <ErrorIcon />
                        <span className={cx('main__note-text')}>
                            G5 Shoes thông báo: quý khách vui lòng kiểm tra thông tin đầy đủ trước khi đặt hàng
                        </span>
                    </p>
                    <div className={cx('main__content')}>
                        <form onSubmit={handleSubmit} encType="multipart/form-data">
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
                                                                type="text"
                                                                name="name"
                                                                id="name"
                                                                className={cx('main__wrapper-box-component-input')}
                                                                defaultValue={user.name}
                                                                disabled
                                                            />
                                                        </div>
                                                        <span
                                                            className={cx('main__wrapper-box-component-error')}
                                                        ></span>
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
                                                                defaultValue={user.phone}
                                                                className={cx('main__wrapper-box-component-input')}
                                                                disabled
                                                            />
                                                        </div>
                                                        <span
                                                            className={cx('main__wrapper-box-component-error')}
                                                        ></span>
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
                                                                defaultValue={user.email}
                                                                disabled
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
                                                                defaultValue={user.address}
                                                                className={cx('main__wrapper-box-component-input')}
                                                                name="address"
                                                                disabled
                                                            />
                                                        </div>
                                                        <span
                                                            className={cx('main__wrapper-box-component-error')}
                                                        ></span>
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
                                        </div>
                                        <ul className={cx('main__wrapper-list')}>
                                            {dataCart &&
                                                dataCart.map((item, index) => (
                                                    <li className={cx('main__wrapper-item')}>
                                                        <div className={cx('main__wrapper-box-item')}>
                                                            <div className={cx('main__wrapper-box-avatar')}>
                                                                <Image
                                                                    src={'/images/' + item.img1}
                                                                    width={100}
                                                                    height={50}
                                                                    alt=""
                                                                    className={cx('main__wrapper-box-img')}
                                                                />
                                                            </div>
                                                            <div className={cx('main__wrapper-box-detail')}>
                                                                <h3 className={cx('main__wrapper-box-detail-title')}>
                                                                    <p
                                                                        className={cx(
                                                                            'main__wrapper-box-detail-title-text',
                                                                        )}
                                                                    >
                                                                        {item.name}
                                                                    </p>
                                                                    <button
                                                                        type="button"
                                                                        className={cx(
                                                                            'main__wrapper-box-detail-btn-remove',
                                                                        )}
                                                                        onClick={() => removeItem(index)}
                                                                    >
                                                                        <DeleteIcon height="30" width="30" />
                                                                    </button>
                                                                </h3>
                                                                <p className={cx('main__wrapper-box-detail-desc')}>
                                                                    Size:{item.size}
                                                                </p>
                                                                <div className={cx('main__wrapper-box-detail-footer')}>
                                                                    <div
                                                                        className={cx('main__wrapper-box-detail-price')}
                                                                    >
                                                                        {formatMonneyCurrency(item.total)}
                                                                    </div>
                                                                    <div
                                                                        className={cx(
                                                                            'main__wrapper-box-control-quantity',
                                                                        )}
                                                                    >
                                                                        <p>Số lượng: {item.quantity}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                        </ul>
                                        <div className={cx('main__order')}>
                                            <div className={cx('main__order-total')}>
                                                <div className={cx('main__order-sales-discount')}>Tổng thanh toán</div>
                                                <div className={cx('main__order-total-price')}>
                                                    {formatMonneyCurrency(totalAmount || 0)}
                                                </div>
                                            </div>
                                        </div>

                                        <input className={cx('data')} name="list-data" value="" hidden />
                                        <button
                                            type="submit"
                                            className={cx('main__order-btn-total-price')}
                                            name="submit"
                                        >
                                            Thanh toán
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CheckoutComponent;
