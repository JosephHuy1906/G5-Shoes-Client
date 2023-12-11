'use client';
import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Home.module.scss';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import AxiosConfig from '@/configs/AxiosConfig';
import { useEffect, useState } from 'react';
import { IProduct } from '@/core/common/interfaces/collection.interface';
import { calculateDiscountPercentage, formatMonneyCurrency } from '@/utils/format.util';
import LoadingPage from '@/shared/components/Loading/LoadingPage/LoadingPage.component';

const cx = classNames.bind(styles);
const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000',
};

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '450px',
    borderRadius: '20px',
    margin: '10px',
};
const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
};
const slideImages = [
    {
        url: '/images/banner.png',
        caption: 'Slide 1',
    },
    {
        url: '/images/banner3.jpg',
        caption: 'Slide 2',
    },
    {
        url: '/images/banner3.png',
        caption: 'Slide 3',
    },
];

function Home() {
    const [proNew, setProNew] = useState<IProduct[]>();
    const [loading, setLoading] = useState(true);
    const [proHot, setProHot] = useState<IProduct[]>();
    const [proSale, setProSale] = useState<IProduct[]>();

    useEffect(() => {
        ProductNew();
        ProductHot();
        ProductSale();
    }, []);

    const ProductNew = () => {
        AxiosConfig.get('/products/create')
            .then((reponse) => {
                setProNew(reponse.data.data);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });
    };
    const ProductHot = () => {
        AxiosConfig.get('/products/ramdom')
            .then((reponse) => {
                setProHot(reponse.data.data);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });
    };
    const ProductSale = () => {
        AxiosConfig.get('/products/4/edit')
            .then((reponse) => {
                setProSale(reponse.data.data);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    if (loading) {
        return <LoadingPage />;
    }
    return (
        <div className={cx('grid wide')}>
            <div className={cx('banner')}>
                <Slide>
                    {slideImages.map((slideImage, index) => (
                        <div key={index}>
                            <div style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}></div>
                        </div>
                    ))}
                </Slide>
            </div>

            <div className={cx('main__product')}>
                <div className={cx('main__product-wrapper')}>
                    <h1 className={cx('main__product-title')}>Sản phẩm mới</h1>
                    <div className={cx('main__product-content')}>
                        <div className={cx('row')}>
                            {Array.isArray(proNew) &&
                                proNew.map((item) => (
                                    <div key={item.id} className={cx('col l-3 m-6 c-6')}>
                                        <div className={cx('main__product-box-picture')}>
                                            <div className={cx('new')}>
                                                <p>New</p>
                                            </div>

                                            <Image
                                                src={'/images/' + item.img1}
                                                width={800}
                                                height={800}
                                                alt=""
                                                className={cx('main__product-box-img')}
                                            />
                                        </div>
                                        <h3 className={cx('main__product-box-title')}>{item.name}</h3>
                                        <div className={cx('main__product-box-price')}>
                                            <span className={cx('main__product-box-current-price')}>
                                                {formatMonneyCurrency(item.newPrice)}
                                            </span>
                                            <span className={cx('main__product-box-old-price')}>
                                                {formatMonneyCurrency(item.oldPrice)}
                                            </span>
                                        </div>
                                        <div className={cx('main__product-box-color')}>
                                            <Link
                                                href={'/product/' + item.id}
                                                className={cx('main__product-box-color-title')}
                                            >
                                                Xem chi tiết
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>

                <div className={cx('main__product-wrapper')}>
                    <h1 className={cx('main__product-title')}>Sản phẩm xem nhiều nhất</h1>
                    <div className={cx('main__product-content')}>
                        <div className={cx('row')}>
                            {Array.isArray(proHot) &&
                                proHot.map((item) => (
                                    <div key={item.id} className={cx('col l-3 m-6 c-6')}>
                                        <div className={cx('main__product-box-picture')}>
                                            <div className={cx('new')}>
                                                <p>Hot</p>
                                            </div>

                                            <Image
                                                src={'/images/' + item.img1}
                                                width={800}
                                                height={800}
                                                alt=""
                                                className={cx('main__product-box-img')}
                                            />
                                        </div>
                                        <h3 className={cx('main__product-box-title')}>{item.name}</h3>
                                        <div className={cx('main__product-box-price')}>
                                            <span className={cx('main__product-box-current-price')}>
                                                {formatMonneyCurrency(item.newPrice)}
                                            </span>
                                            <span className={cx('main__product-box-old-price')}>
                                                {formatMonneyCurrency(item.oldPrice)}
                                            </span>
                                        </div>
                                        <div className={cx('main__product-box-color')}>
                                            <Link
                                                href={'/product/' + item.id}
                                                className={cx('main__product-box-color-title')}
                                            >
                                                Xem chi tiết
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>

                <div className={cx('main__product-wrapper')}>
                    <h1 className={cx('main__product-title')}>Sản phẩm khuyến mãi</h1>
                    <div className={cx('main__product-content')}>
                        <div className={cx('row')}>
                            {Array.isArray(proSale) &&
                                proSale.map((item) => (
                                    <div key={item.id} className={cx('col l-3 m-6 c-6')}>
                                        <div className={cx('main__product-box-picture')}>
                                            <div className={cx('new')}>
                                                <p>{calculateDiscountPercentage(item.oldPrice, item.newPrice)}%</p>
                                            </div>

                                            <Image
                                                src={'/images/' + item.img1}
                                                width={800}
                                                height={800}
                                                alt=""
                                                className={cx('main__product-box-img')}
                                            />
                                        </div>
                                        <h3 className={cx('main__product-box-title')}>{item.name}</h3>
                                        <div className={cx('main__product-box-price')}>
                                            <span className={cx('main__product-box-current-price')}>
                                                {formatMonneyCurrency(item.newPrice)}
                                            </span>
                                            <span className={cx('main__product-box-old-price')}>
                                                {formatMonneyCurrency(item.oldPrice)}
                                            </span>
                                        </div>
                                        <div className={cx('main__product-box-color')}>
                                            <Link
                                                href={'/product/' + item.id}
                                                className={cx('main__product-box-color-title')}
                                            >
                                                Xem chi tiết
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>

                <div className={cx('main__product-wrapper')}>
                    <h1 className={cx('main__product-title')}>Tin tức</h1>
                    <div className={cx('main__product-content')}>
                        <div className={cx('row')}>
                            <div className={cx('col l-3 m-6 c-6')}>
                                <div className={cx('main__product-box-picture news')}>
                                    <div className={cx('main__product-box-img news')}>
                                        <Image
                                            src={'/images/new1.jpg'}
                                            alt=""
                                            width={800}
                                            height={800}
                                            className={cx('main__product-box-img-new')}
                                        />
                                    </div>
                                </div>
                                <h3 className={cx('main__product-box-title news')}>
                                    Aimé Leon Dore là gì? Tại sao bản collab New Blance 550 x Aimé Leon Dore lại có giá
                                    lên
                                </h3>
                                <div className={cx('main__product-box-color')}>
                                    <Link href="#" className={cx('main__product-box-color-title')}>
                                        Xem chi tiết
                                    </Link>
                                </div>
                            </div>

                            <div className={cx('col l-3 m-6 c-6')}>
                                <div className={cx('main__product-box-picture news')}>
                                    <div className={cx('main__product-box-img news')}>
                                        <Image
                                            src={'/images/new2.jpg'}
                                            width={800}
                                            height={800}
                                            alt=""
                                            className={cx('main__product-box-img-new')}
                                        />
                                    </div>
                                </div>
                                <h3 className={cx('main__product-box-title news')}>
                                    Những sự thật bí ẩn đằng sau thương hiệu thời trang nổi tiếng của Đức - Adidas
                                </h3>
                                <div className={cx('main__product-box-color')}>
                                    <Link href="#" className={cx('main__product-box-color-title')}>
                                        Xem chi tiết
                                    </Link>
                                </div>
                            </div>

                            <div className={cx('col l-3 m-6 c-6')}>
                                <div className={cx('main__product-box-picture news')}>
                                    <div className={cx('main__product-box-img news')}>
                                        <Image
                                            src={'/images/new2.png'}
                                            width={800}
                                            height={800}
                                            alt=""
                                            className={cx('main__product-box-img-new')}
                                        />
                                    </div>
                                </div>
                                <h3 className={cx('main__product-box-title news')}>
                                    OFF-WHITE ™ x Church's: có gì phía sau bản hợp tác cuối cùng của Virgil Abloh
                                </h3>
                                <div className={cx('main__product-box-color')}>
                                    <Link href="#" className={cx('main__product-box-color-title')}>
                                        Xem chi tiết
                                    </Link>
                                </div>
                            </div>

                            <div className={cx('col l-3 m-6 c-6 ')}>
                                <div className={cx('main__product-box-picture news')}>
                                    <div className={cx('main__product-box-img news')}>
                                        <Image
                                            src={'/images/new4.png'}
                                            width={800}
                                            height={800}
                                            alt=""
                                            className={cx('main__product-box-img-new')}
                                        />
                                    </div>
                                </div>

                                <h3 className={cx('main__product-box-title news')}>
                                    BST Dior x Travis Scott ra mắt hoành tráng tại tuần lễ thời trang Paris
                                </h3>
                                <div className={cx('main__product-box-color')}>
                                    <Link href="#" className={cx('main__product-box-color-title')}>
                                        Xem chi tiết
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
