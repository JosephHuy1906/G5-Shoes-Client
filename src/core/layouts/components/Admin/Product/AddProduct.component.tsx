import React from 'react';
import classNames from 'classnames/bind';
import styles from './Product.module.scss';

const cx = classNames.bind(styles);

export default function AddProductComponent() {
    return (
        <div className={cx('manage-content-tab active')}>
            <h1 className={cx('manage-content__title')}>Manage Add Product</h1>
            <div className={cx('manage-content__wrapper')}>
                <form
                    id="form-add-product"
                    action="../controller/AdminController.php?act=addProduct"
                    method="post"
                    encType="multipart/form-data"
                >
                    <div className={cx('form-box')}>
                        <div className={cx('manage-content__box-left')}>
                            <div className={cx('form-group')}>
                                <label htmlFor="" className={cx('form-group__title')}>
                                    Name Product
                                </label>
                                <input
                                    type="text"
                                    name="namePro"
                                    className={cx('form-group__input')}
                                    placeholder="Ex: Nike Air"
                                />
                                <span className={cx('form-group__error')}></span>
                            </div>
                            <div className={cx('form-group mt-40')}>
                                <label htmlFor="" className={cx('form-group__title')}>
                                    Price Product
                                </label>
                                <input
                                    type="number"
                                    name="giaMoi"
                                    className={cx('form-group__input isPrice')}
                                    placeholder="Ex: 700000"
                                />
                                <span className={cx('form-group__error')}></span>
                            </div>
                            <div className={cx('form-group mt-40')}>
                                <label htmlFor="" className={cx('form-group__title')}>
                                    Size Product
                                </label>
                                <select name="sizePro" className={cx('form-group__input')}>
                                    <option></option>
                                </select>
                                <span className={cx('form-group__error')}></span>
                            </div>

                            <div className={cx('form-group mt-40')}>
                                <label htmlFor="" className={cx('form-group__title ')}>
                                    Image 1 Product
                                </label>
                                <label htmlFor="#upload" className={cx('file-upload')}>
                                    <i className={cx('fa-solid fa-image')}></i>
                                    Upload Image
                                </label>
                                <input
                                    id="upload"
                                    type="file"
                                    name="img1"
                                    className={cx('form-group__input input-file')}
                                    placeholder="Ex: Nike Cortez SP"
                                />
                                <span className={cx('form-group__error')}></span>
                            </div>
                            <div className={cx('form-group mt-40')}>
                                <label htmlFor="" className={cx('form-group__title ')}>
                                    Image 2 Product
                                </label>
                                <label htmlFor="#upload" className={cx('file-upload')}>
                                    <i className={cx('fa-solid fa-image')}></i>
                                    Upload Image
                                </label>
                                <input
                                    id="upload"
                                    type="file"
                                    name="img2"
                                    className={cx('form-group__input input-file')}
                                    placeholder="Ex: Nike Cortez SP"
                                />
                                <span className={cx('form-group__error')}></span>
                            </div>
                        </div>
                        <div className={cx('manage-content__box-right')}>
                            <div className={cx('form-group')}>
                                <label htmlFor="" className={cx('form-group__title')}>
                                    Category Product
                                </label>
                                <select name="category" className={cx('form-group__input')}>
                                    <option></option>
                                </select>
                                <span className={cx('form-group__error')}></span>
                            </div>

                            <div className={cx('form-group  mt-40')}>
                                <label htmlFor="" className={cx('form-group__title ')}>
                                    Image 3 Product
                                </label>
                                <label htmlFor="#upload" className={cx('file-upload')}>
                                    <i className={cx('fa-solid fa-image')}></i>
                                    Upload Image
                                </label>
                                <input
                                    id="upload"
                                    type="file"
                                    name="img3"
                                    className={cx('form-group__input input-file')}
                                    placeholder="Ex: Nike Cortez SP"
                                />
                                <span className={cx('form-group__error')}></span>
                            </div>

                            <div className={cx('form-group mt-40')}>
                                <label htmlFor="" className={cx('form-group__title ')}>
                                    Image 4 Product
                                </label>
                                <label htmlFor="#upload" className={cx('file-upload')}>
                                    <i className={cx('fa-solid fa-image')}></i>
                                    Upload Image
                                </label>
                                <input
                                    id="upload"
                                    type="file"
                                    name="img4"
                                    className={cx('form-group__input input-file')}
                                    placeholder="Ex: Nike Cortez SP"
                                />
                                <span className={cx('form-group__error')}></span>
                            </div>

                            <div className={cx('form-group mt-40')}>
                                <label htmlFor="" className={cx('form-group__title')}>
                                    Old Price
                                </label>
                                <input
                                    type="number"
                                    name="oldprice"
                                    className={cx('form-group__input')}
                                    placeholder="Ex: 1562000"
                                />
                                <span className={cx('form-group__error')}></span>
                            </div>

                            <div className={cx('form-group mt-40')}>
                                <label htmlFor="" className={cx('form-group__title')}>
                                    Describe
                                </label>
                                <input
                                    type="text"
                                    name="mota"
                                    className={cx('form-group__input')}
                                    placeholder="Ex: Với chất liệu 100% Poly được xử lý hoàn thiện..."
                                />
                                <span className={cx('form-group__error')}></span>
                            </div>
                        </div>
                    </div>

                    <div className={cx('form-footer')}>
                        <button type="submit" name="submit" className={cx('btn-submit')}>
                            Add Product
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
