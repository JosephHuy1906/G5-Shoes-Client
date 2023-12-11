import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Category.module.scss';

const cx = classNames.bind(styles);
export default function AddCategoryComponent() {
    return (
        <div className={cx('manage-content-category-tab active')}>
            <h1 className={cx('manage-content__title')}>Add Category</h1>
            <div className={cx('manage-content__wrapper')}>
                <form className={cx('form-add-product')} >
                    <div className={cx('form-box')}>
                        <div className={cx('manage-content__box-left')}>
                            <div className={cx('form-group')}>
                                <label htmlFor="" className={cx('form-group__title')}>
                                    Id Category
                                </label><br />
                                <span>AUTO INCREMENT</span>
                                <span className={cx('form-group__error')}></span>
                            </div>
                        </div>
                        <div className={cx('manage-content__box-right')}>
                            <div className={cx('form-group')}>
                                <label htmlFor="" className={cx('form-group__title')}>
                                    Name Category
                                </label>
                                <input
                                    type="text"
                                    name="nameCategory"
                                    className={cx('form-group__input')}
                                    placeholder="Ex: Nike Air"
                                />
                                <span className={cx('form-group__error')}></span>
                            </div>
                        </div>
                    </div>

                    <div className={cx('form-footer')}>
                        <button type="submit" name="submit" className={cx('btn-submit')}>
                            Add Category
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
