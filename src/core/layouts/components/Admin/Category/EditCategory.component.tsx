import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Category.module.scss';
const cx = classNames.bind(styles);
export default function EditCategoryComponent() {
    return (
        <div className={cx('manage-content-category-tab active')}>
            <h1 className={cx('manage-content__title')}>Manage Edit Category</h1>
            <div className={cx('content-tab-edit')}>
                <table className={cx('table table-border')}>
                    <thead>
                        <tr>
                            <th className={cx('table__product-id')}>ID</th>
                            <th className={cx('table__product-name')}>Name Category</th>
                            <th className={cx('table__product-edit')}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <span className={cx('table__tbody-id')}></span>
                            </td>
                            <td>
                                <span className={cx('table__tbody-name')}></span>
                            </td>
                            <td>
                                <a className={cx('table__tbody-link')}>Xoá</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
