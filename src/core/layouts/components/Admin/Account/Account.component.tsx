import React from 'react';
import classNames from 'classnames/bind';
import styles from './Account.module.scss';

const cx = classNames.bind(styles);
export default function AccountComponent() {
    return (
        <div className={cx('js-tab-content')}>
            <div className={cx('manage-content')}>
                <div className={cx('manage-content-account-tab active')}>
                    <h1 className={cx('manage-content__title')}>Manage User</h1>
                    <div className={cx('user-wrapper')}>
                        <div className={cx('user-box')}>
                            <table className={cx('table-user')}>
                                <thead className={cx('thead-user')}>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Address</th>
                                    <th>Birthday</th>
                                    <th>Phone</th>
                                    <th>Actions</th>
                                </thead>

                                <tbody className={cx('tbody-user')}>
                                    <tr className={cx('tbody-row')}>
                                        <td>
                                            <span></span>
                                        </td>
                                        <td className={cx('col-user-info')}>
                                            <div className={cx('user-avatar')}>
                                                <img src="" alt="" className={cx('user-img')} />
                                            </div>
                                            <h3 className={cx('user-name')}></h3>
                                        </td>

                                        <td>
                                            <span></span>
                                        </td>
                                        <td>
                                            <span></span>
                                        </td>

                                        <td>
                                            <span></span>
                                        </td>
                                        <td>
                                            <span></span>
                                        </td>
                                        <td>
                                            <a href="../controller/AdminController.php?act=deleteUser&id=<?php echo $userid;?>">
                                                {' '}
                                                <button className={cx('action-btn-remove')}>Xoá</button>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
