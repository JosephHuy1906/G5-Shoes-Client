'use client';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Link from 'next/link';
import AxiosConfig from '@/configs/AxiosConfig';
import Image from 'next/image';
import { calculateDiscountPercentage, formatMonneyCurrency } from '@/utils/format.util';
import styles from './Product.module.scss';
import './product.css';
import classNames from 'classnames/bind';
import { IProduct } from '@/core/common/interfaces/collection.interface';
import LoadingSpinner from '@/shared/components/Loading/LoadingSpinner/LoadingSpinner.component';
import LoadingPage from '@/shared/components/Loading/LoadingPage/LoadingPage.component';

const cx = classNames.bind(styles);

function ProductPage() {
    const [proSale, setProSale] = useState<IProduct[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const pageSize = 8;

    useEffect(() => {
        ProductSale();
    }, [currentPage]);

    const ProductSale = () => {
        setLoading(true);
        const apiUrl = `products`;

        AxiosConfig.get(apiUrl)
            .then((response) => {
                setProSale(response.data.data);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handlePageChange = (selectedPage: { selected: number }) => {
        setCurrentPage(selectedPage.selected + 1);
    };

    const totalPages = Math.ceil(proSale.length / pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const displayedProducts = proSale.slice(startIndex, startIndex + pageSize);

    if (loading) {
        return <LoadingPage />;
    }

    return (
        <div className={cx('grid wide')}>
            <div className={cx('main__product')}>
                <div className={cx('main__product-wrapper')}>
                    <h1 className={cx('main__product-title')}>Sản phẩm </h1>
                    <div className={cx('main__product-content')}>
                        <div className={cx('row')}>
                            {Array.isArray(displayedProducts) &&
                                displayedProducts.map((item) => (
                                    <div key={item.id} className={cx('col l-3 m-6 c-6')}>
                                        <div className={cx('main__product-box-picture')}>
                                            <div className={cx('new')}>
                                                <p>{calculateDiscountPercentage(item.oldPrice, item.newPrice)}%</p>
                                            </div>

                                            <Image
                                                src={`/images/${item.img1}`}
                                                width={800}
                                                height={800}
                                                alt={item.img1}
                                                priority
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
                                                href={`/product/${item.id}`}
                                                className={cx('main__product-box-color-title')}
                                            >
                                                Xem chi tiết
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div className={cx('pagination')}>
                        <ReactPaginate
                            pageCount={totalPages}
                            pageRangeDisplayed={5}
                            marginPagesDisplayed={2}
                            onPageChange={handlePageChange}
                            containerClassName={'paginationNextBtns'}
                            activeClassName={'paginationActive'}
                            forcePage={currentPage - 1}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
