import React from 'react';
import classNames from 'classnames/bind';
import styles from './Product.module.scss';

const cx = classNames.bind(styles);

export default function EditProductComponent() {
    return (
        <div className={cx('manage-content-tab active')}>
            <h1 className={cx('manage-content__title')}>Manage Edit Product</h1>
            <div className={cx('content-tab-edit')}>
                <table className={cx('table table-border')}>
                    <thead>
                        <tr>
                            <th className={cx('table__product-id')}>ID</th>
                            <th className={cx('table__product-name')}>Name Product</th>
                            <th className={cx('table__product-image')}>Image Product</th>
                            <th className={cx('table__product-price')}>Price Product</th>
                            <th className={cx('table__product-price')}>Price Old Product</th>
                            <th className={cx('table__product-brand')}>Brand Product</th>
                            <th className={cx('table__product-describe')}>Describe Product</th>
                            <th className={cx('table__product-location')}>Size</th>
                            <th className={cx('table__product-edit')}>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={cx('product-items')}>
                            <td>
                                <span className={cx('table__tbody-id')}></span>
                            </td>
                            <td>
                                <span className={cx('table__tbody-name')}></span>
                            </td>
                            <td>
                                <div className={cx('table__tbody-img')}></div>
                            </td>
                            <td>
                                <span className={cx('table__tbody-price')}>đ</span>
                            </td>
                            <td>
                                <span className={cx('table__tbody-price')}></span>
                            </td>
                            <td>
                                <span className={cx('table__tbody-brand')}></span>
                            </td>
                            <td>
                                <span className={cx('table__tbody-describe')}></span>
                            </td>
                            <td>
                                <span className={cx('table__tbody-location')}></span>
                            </td>
                            <td>
                                <a className={cx('table__tbody-link edit-each-product')} href="#">
                                    Sửa
                                </a>
                                <a className={cx('table__tbody-link')} href="">
                                    Xoá
                                </a>
                            </td>
                            <td className={cx('table__td-modal')}>
                                <div className={cx('modal__edit-product')}>
                                    <div className={cx('modal__edit-overlay')}></div>
                                    <div className={cx('modal__edit-auth')}>
                                        <div className={cx('modal__edit-product-close')}>
                                            <i
                                                className={cx(
                                                    'fa-solid fa-circle-xmark modal__edit-product-close-icon',
                                                )}
                                            ></i>
                                        </div>
                                        <h2 className={cx('modal__edit-auth-title')}>
                                            Edit Product Method {')}>'} ID:{' '}
                                        </h2>
                                        <div className={cx('modal__edit-wrapper-img')}>
                                            <div className={cx('modal__edit-avatar')}>
                                                <img
                                                    src="<?php  echo $productNew->getAvatar1(); ?>"
                                                    alt=""
                                                    className={cx('modal__edit-img')}
                                                />
                                            </div>
                                        </div>
                                        <form
                                            action="../controller/AdminController.php?act=updateProduct"
                                            method="post"
                                            encType="multipart/form-data"
                                            id="form-id-edit"
                                            className={cx('form__edit-product')}
                                        >
                                            <div className={cx('form-group-edit')}>
                                                <label htmlFor="" className={cx('form-group-edit-label')}>
                                                    Name Product
                                                </label>
                                                <div className={cx('form-group-content')}>
                                                    <input type="hidden" name="productId" />
                                                    <input
                                                        type="text"
                                                        className={cx('form-group-edit-input')}
                                                        name="namePro"
                                                    />
                                                    <div className={cx('form-group-edit-btn-edit')}>
                                                        <i
                                                            className={cx(
                                                                'fa-regular fa-pen-to-square form-group-edit-btn-edit-icon',
                                                            )}
                                                        ></i>
                                                    </div>
                                                    <span className={cx('form-group-edit-error')}></span>
                                                </div>
                                            </div>
                                            <div className={cx('form-group-edit')}>
                                                <label htmlFor="" className={cx('form-group-edit-label')}>
                                                    Image Product
                                                </label>
                                                <div className={cx('form-group-content')}>
                                                    <input
                                                        id="file-input-edit"
                                                        name="img1"
                                                        type="file"
                                                        className={cx('edit-input-file form-group-edit-input')}
                                                    />
                                                    <div className={cx('form-group-edit-btn-edit')}>
                                                        <i
                                                            className={cx(
                                                                'fa-regular fa-pen-to-square form-group-edit-btn-edit-icon',
                                                            )}
                                                        ></i>
                                                    </div>
                                                    <label
                                                        htmlFor="file-input-edit<?php  echo $productNew->getID(); ?>"
                                                        className={cx('form-group-content-sticker-file')}
                                                    >
                                                        <span
                                                            className={cx('form-group-content-sticker-file-title')}
                                                        ></span>
                                                    </label>
                                                    <span className={cx('form-group-edit-error')}></span>
                                                </div>
                                            </div>
                                            <div className={cx('form-group-edit')}>
                                                <label htmlFor="" className={cx('form-group-edit-label')}>
                                                    Price Product
                                                </label>
                                                <div className={cx('form-group-content')}>
                                                    <input
                                                        type="number"
                                                        className={cx('form-group-edit-input')}
                                                        name="price"
                                                    />
                                                    <div className={cx('form-group-edit-btn-edit')}>
                                                        <i
                                                            className={cx(
                                                                'fa-regular fa-pen-to-square form-group-edit-btn-edit-icon',
                                                            )}
                                                        ></i>
                                                    </div>
                                                    <span className={cx('form-group-edit-error')}></span>
                                                </div>
                                            </div>
                                            <div className={cx('form-group-edit')}>
                                                <label htmlFor="" className={cx('form-group-edit-label')}>
                                                    Price Old Product
                                                </label>
                                                <div className={cx('form-group-content')}>
                                                    <input
                                                        type="number"
                                                        className={cx('form-group-edit-input')}
                                                        name="priceOld"
                                                    />
                                                    <div className={cx('form-group-edit-btn-edit')}>
                                                        <i
                                                            className={cx(
                                                                'fa-regular fa-pen-to-square form-group-edit-btn-edit-icon',
                                                            )}
                                                        ></i>
                                                    </div>
                                                    <span className={cx('form-group-edit-error')}></span>
                                                </div>
                                            </div>
                                            <div className={cx('form-group-edit')}>
                                                <label htmlFor="" className={cx('form-group-edit-label')}>
                                                    Brand Product
                                                </label>
                                                <div className={cx('form-group-content')}>
                                                    <input
                                                        type="number"
                                                        className={cx('form-group-edit-input')}
                                                        name="brand"
                                                    />

                                                    <div className={cx('form-group-edit-btn-edit')}>
                                                        <i
                                                            className={cx(
                                                                'fa-regular fa-pen-to-square form-group-edit-btn-edit-icon',
                                                            )}
                                                        ></i>
                                                    </div>
                                                    <span className={cx('form-group-edit-error')}></span>
                                                    <span className={cx('form-group-edit-error')}></span>
                                                </div>
                                            </div>
                                            <div className={cx('form-group-edit ')}>
                                                <label htmlFor="" className={cx('form-group-edit-label')}>
                                                    Describe Product
                                                </label>
                                                <div className={cx('form-group-content')}>
                                                    <input
                                                        type="text"
                                                        name="describe"
                                                        className={cx('form-group-edit-input')}
                                                    />
                                                    <div className={cx('form-group-edit-btn-edit')}>
                                                        <i
                                                            className={cx(
                                                                'fa-regular fa-pen-to-square form-group-edit-btn-edit-icon',
                                                            )}
                                                        ></i>
                                                    </div>
                                                    <span className={cx('form-group-edit-error')}></span>
                                                </div>
                                            </div>
                                            <div className={cx('form-group-edit')}>
                                                <label htmlFor="" className={cx('form-group-edit-label')}>
                                                    Size Product
                                                </label>
                                                <div className={cx('form-group-content')}>
                                                    <input
                                                        type="number"
                                                        className={cx('form-group-edit-input')}
                                                        name="size"
                                                    />
                                                    <div className={cx('form-group-edit-btn-edit')}>
                                                        <i
                                                            className={cx(
                                                                'fa-regular fa-pen-to-square form-group-edit-btn-edit-icon',
                                                            )}
                                                        ></i>
                                                    </div>
                                                    <span className={cx('form-group-edit-error')}></span>
                                                    <span className={cx('form-group-edit-error')}></span>
                                                </div>
                                            </div>
                                            <div className={cx('form-group-actions')}>
                                                <button type="button" className={cx('form-group-actions-btn cancel')}>
                                                    Cancel
                                                </button>
                                                <button type="button" className={cx('form-group-actions-btn submit')}>
                                                    Save Changes
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
