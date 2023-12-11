'use client';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { ReactNode, useEffect, useState } from 'react';

import { ELocalStorageKey } from '@/core/common/constants/common.constant';
import useDebounce from '@/core/common/hooks/useDebounce.hook';
import { ISearch } from '@/core/common/interfaces/collection.interface';
import { LocalStorageSide } from '@/utils/clientStore.util';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { SearchIcon } from '../Svg/index.component';
import styles from './InputSearch.module.scss';

const cx = classNames.bind(styles);

interface ISearchResult {
    _id: string;
    keywordSuggest: string;
}
const localStorageInstance = new LocalStorageSide();
function InputSearchComponent(): ReactNode {
    const loginInfo = localStorageInstance.getStore(ELocalStorageKey.PROFILE);
    const [keyword, setKeyword] = useState<string>('');
    const debounce = useDebounce(keyword, 500);
    const [searchResult, setSearchResult] = useState<ISearch | null>();
    const [showHeadless, setShowHeadless] = useState<boolean>(true);
    const router = useRouter();

    const handleKeyDown = (e: any) => {
        if (e.key === 'Enter') {
            router.push('/search?search_query=' + debounce);
            setSearchResult(null);
            setKeyword('');
        }
    };

    return (
        <>
            <div className={cx('header-search')}>
                <div className={cx('header-search-wrap-box')}>
                    <HeadlessTippy
                        interactive
                        placement="bottom"
                        className={cx('input-search')}
                        visible={showHeadless}
                        render={(attrs) => (
                            <>
                                {searchResult && (
                                    <div className={cx('popper-search')} tabIndex={-1} {...attrs}>
                                        {
                                            <ul className={cx('popper-search-list')}>
                                                {searchResult && searchResult.product.length > 0 && (
                                                    <>
                                                        <h3 className={cx('title-search')}>Product</h3>
                                                        {searchResult.product.map((result, index) => (
                                                            <li key={index} className={cx('popper-search-item')}>
                                                                <div className={cx('popper-search-content')}>
                                                                    <Link
                                                                        href={'/composer/@' + result.name}
                                                                        className={cx('popper-search-info')}
                                                                    >
                                                                        <Image
                                                                            className={cx('img')}
                                                                            src={result.img1}
                                                                            height={50}
                                                                            width={50}
                                                                            alt=""
                                                                        />
                                                                        <span className={cx('search-info-text')}>
                                                                            {result.name}
                                                                        </span>
                                                                    </Link>
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </>
                                                )}
                                                {searchResult?.product.length === 0 && (
                                                    <div className={cx('search-not-data')}>
                                                        <SearchIcon className={cx('icon-not-search')} />
                                                        <h3>Không tìm thấy kết quả</h3>
                                                    </div>
                                                )}
                                            </ul>
                                        }
                                    </div>
                                )}
                            </>
                        )}
                        onClickOutside={() => setShowHeadless(false)}
                    >
                        <div className={cx('container-header')}>
                            <div className={cx('search-icon-wrapper')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('search-icon-style')} />
                            </div>
                            <div className={cx('search-input-wrapper')}>
                                <div className={cx('search-input')}>
                                    <input
                                        className={cx('search-input-tag')}
                                        type="text"
                                        placeholder="Tìm kiếm"
                                        value={keyword}
                                        onChange={(e) => setKeyword(e.target.value)}
                                        onFocus={() => setShowHeadless(true)}
                                        onKeyDown={handleKeyDown}
                                    />
                                </div>
                            </div>
                            <div className={cx('search-clear')} onClick={() => setKeyword('')}>
                                <FontAwesomeIcon icon={faXmark} className={cx('search-clear-icon')} />
                            </div>
                        </div>
                    </HeadlessTippy>
                </div>
            </div>
        </>
    );
}

export default InputSearchComponent;
