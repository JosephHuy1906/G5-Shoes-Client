'use client';
import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Home.module.scss';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

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
const slideImages = [
    {
        url: '/images/banner.png',
        caption: 'Slide 1',
    },
    {
        url: '/images/banner2.png',
        caption: 'Slide 2',
    },
    {
        url: '/images/banner3.png',
        caption: 'Slide 3',
    },
];

function Home() {
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
                            <div className={cx('col l-3 m-6 c-6')}>
                                <div className={cx('main__product-box-picture')}>
                                    <div className={cx('new')}>
                                        <p>New</p>
                                    </div>

                                    <Image
                                        src={'/images/1.1adidas.png'}
                                        width={800}
                                        height={800}
                                        alt=""
                                        className={cx('main__product-box-img')}
                                    />
                                </div>
                                <h3 className={cx('main__product-box-title')}>1</h3>
                                <div className={cx('main__product-box-price')}>
                                    <span className={cx('main__product-box-current-price')}>1</span>
                                    <span className={cx('main__product-box-old-price')}>2</span>
                                </div>
                                <div className={cx('main__product-box-color')}>
                                    <a
                                        href="<?php echo './detail.php?id='.$productNew->getId() ?>"
                                        className={cx('main__product-box-color-title')}
                                    >
                                        Xem chi tiết
                                    </a>
                                </div>
                            </div>
                            <div className={cx('col l-3 m-6 c-6')}>
                                <div className={cx('main__product-box-picture')}>
                                    <div className={cx('new')}>
                                        <p>New</p>
                                    </div>

                                    <Image
                                        src={'/images/1.1adidas.png'}
                                        width={800}
                                        height={800}
                                        alt=""
                                        className={cx('main__product-box-img')}
                                    />
                                </div>
                                <h3 className={cx('main__product-box-title')}>1</h3>
                                <div className={cx('main__product-box-price')}>
                                    <span className={cx('main__product-box-current-price')}>1</span>
                                    <span className={cx('main__product-box-old-price')}>2</span>
                                </div>
                                <div className={cx('main__product-box-color')}>
                                    <a
                                        href="<?php echo './detail.php?id='.$productNew->getId() ?>"
                                        className={cx('main__product-box-color-title')}
                                    >
                                        Xem chi tiết
                                    </a>
                                </div>
                            </div>
                            <div className={cx('col l-3 m-6 c-6')}>
                                <div className={cx('main__product-box-picture')}>
                                    <div className={cx('new')}>
                                        <p>New</p>
                                    </div>

                                    <Image
                                        src={'/images/1.1adidas.png'}
                                        width={800}
                                        height={800}
                                        alt=""
                                        className={cx('main__product-box-img')}
                                    />
                                </div>
                                <h3 className={cx('main__product-box-title')}>1</h3>
                                <div className={cx('main__product-box-price')}>
                                    <span className={cx('main__product-box-current-price')}>1</span>
                                    <span className={cx('main__product-box-old-price')}>2</span>
                                </div>
                                <div className={cx('main__product-box-color')}>
                                    <a
                                        href="<?php echo './detail.php?id='.$productNew->getId() ?>"
                                        className={cx('main__product-box-color-title')}
                                    >
                                        Xem chi tiết
                                    </a>
                                </div>
                            </div>
                            <div className={cx('col l-3 m-6 c-6')}>
                                <div className={cx('main__product-box-picture')}>
                                    <div className={cx('new')}>
                                        <p>New</p>
                                    </div>

                                    <Image
                                        src={'/images/1.1adidas.png'}
                                        width={800}
                                        height={800}
                                        alt=""
                                        className={cx('main__product-box-img')}
                                    />
                                </div>
                                <h3 className={cx('main__product-box-title')}>1</h3>
                                <div className={cx('main__product-box-price')}>
                                    <span className={cx('main__product-box-current-price')}>1</span>
                                    <span className={cx('main__product-box-old-price')}>2</span>
                                </div>
                                <div className={cx('main__product-box-color')}>
                                    <a
                                        href="<?php echo './detail.php?id='.$productNew->getId() ?>"
                                        className={cx('main__product-box-color-title')}
                                    >
                                        Xem chi tiết
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('main__product-wrapper')}>
                    <h1 className={cx('main__product-title')}>Sản phẩm xem nhiều nhất</h1>
                    <div className={cx('main__product-content')}>
                        <div className={cx('row')}>
                            <div className={cx('col l-3 m-6 c-6')}>
                                <div className={cx('main__product-box-picture')}>
                                    <div className={cx('new')}>
                                        <p>Hot</p>
                                    </div>

                                    <Image
                                        src={'/images/1.1adidas.png'}
                                        width={800}
                                        height={800}
                                        alt=""
                                        className={cx('main__product-box-img')}
                                    />
                                </div>
                                <h3 className={cx('main__product-box-title')}>1</h3>
                                <div className={cx('main__product-box-price')}>
                                    <span className={cx('main__product-box-current-price')}>1</span>
                                    <span className={cx('main__product-box-old-price')}>2</span>
                                </div>
                                <div className={cx('main__product-box-color')}>
                                    <a
                                        href="<?php echo './detail.php?id='.$productNew->getId() ?>"
                                        className={cx('main__product-box-color-title')}
                                    >
                                        Xem chi tiết
                                    </a>
                                </div>
                            </div>
                            <div className={cx('col l-3 m-6 c-6')}>
                                <div className={cx('main__product-box-picture')}>
                                    <div className={cx('new')}>
                                        <p>Hot</p>
                                    </div>

                                    <Image
                                        src={'/images/1.1adidas.png'}
                                        width={800}
                                        height={800}
                                        alt=""
                                        className={cx('main__product-box-img')}
                                    />
                                </div>
                                <h3 className={cx('main__product-box-title')}>1</h3>
                                <div className={cx('main__product-box-price')}>
                                    <span className={cx('main__product-box-current-price')}>1</span>
                                    <span className={cx('main__product-box-old-price')}>2</span>
                                </div>
                                <div className={cx('main__product-box-color')}>
                                    <a
                                        href="<?php echo './detail.php?id='.$productNew->getId() ?>"
                                        className={cx('main__product-box-color-title')}
                                    >
                                        Xem chi tiết
                                    </a>
                                </div>
                            </div>
                            <div className={cx('col l-3 m-6 c-6')}>
                                <div className={cx('main__product-box-picture')}>
                                    <div className={cx('new')}>
                                        <p>Hot</p>
                                    </div>

                                    <Image
                                        src={'/images/1.1adidas.png'}
                                        width={800}
                                        height={800}
                                        alt=""
                                        className={cx('main__product-box-img')}
                                    />
                                </div>
                                <h3 className={cx('main__product-box-title')}>1</h3>
                                <div className={cx('main__product-box-price')}>
                                    <span className={cx('main__product-box-current-price')}>1</span>
                                    <span className={cx('main__product-box-old-price')}>2</span>
                                </div>
                                <div className={cx('main__product-box-color')}>
                                    <a
                                        href="<?php echo './detail.php?id='.$productNew->getId() ?>"
                                        className={cx('main__product-box-color-title')}
                                    >
                                        Xem chi tiết
                                    </a>
                                </div>
                            </div>
                            <div className={cx('col l-3 m-6 c-6')}>
                                <div className={cx('main__product-box-picture')}>
                                    <div className={cx('new')}>
                                        <p>Hot</p>
                                    </div>

                                    <Image
                                        src={'/images/1.1adidas.png'}
                                        width={800}
                                        height={800}
                                        alt=""
                                        className={cx('main__product-box-img')}
                                    />
                                </div>
                                <h3 className={cx('main__product-box-title')}>1</h3>
                                <div className={cx('main__product-box-price')}>
                                    <span className={cx('main__product-box-current-price')}>1</span>
                                    <span className={cx('main__product-box-old-price')}>2</span>
                                </div>
                                <div className={cx('main__product-box-color')}>
                                    <a
                                        href="<?php echo './detail.php?id='.$productNew->getId() ?>"
                                        className={cx('main__product-box-color-title')}
                                    >
                                        Xem chi tiết
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('main__product-wrapper')}>
                    <h1 className={cx('main__product-title')}>Sản phẩm khuyến mãi</h1>
                    <div className={cx('main__product-content')}>
                        <div className={cx('row')}>
                            <div className={cx('col l-3 m-6 c-6')}>
                                <div className={cx('main__product-box-picture')}>
                                    <div className={cx('new')}>
                                        <p>50%</p>
                                    </div>

                                    <Image
                                        src={'/images/1.1adidas.png'}
                                        width={800}
                                        height={800}
                                        alt=""
                                        className={cx('main__product-box-img')}
                                    />
                                </div>
                                <h3 className={cx('main__product-box-title')}>1</h3>
                                <div className={cx('main__product-box-price')}>
                                    <span className={cx('main__product-box-current-price')}>1</span>
                                    <span className={cx('main__product-box-old-price')}>2</span>
                                </div>
                                <div className={cx('main__product-box-color')}>
                                    <a
                                        href="<?php echo './detail.php?id='.$productNew->getId() ?>"
                                        className={cx('main__product-box-color-title')}
                                    >
                                        Xem chi tiết
                                    </a>
                                </div>
                            </div>
                            <div className={cx('col l-3 m-6 c-6')}>
                                <div className={cx('main__product-box-picture')}>
                                    <div className={cx('new')}>
                                        <p>50%</p>
                                    </div>

                                    <Image
                                        src={'/images/1.1adidas.png'}
                                        width={800}
                                        height={800}
                                        alt=""
                                        className={cx('main__product-box-img')}
                                    />
                                </div>
                                <h3 className={cx('main__product-box-title')}>1</h3>
                                <div className={cx('main__product-box-price')}>
                                    <span className={cx('main__product-box-current-price')}>1</span>
                                    <span className={cx('main__product-box-old-price')}>2</span>
                                </div>
                                <div className={cx('main__product-box-color')}>
                                    <a
                                        href="<?php echo './detail.php?id='.$productNew->getId() ?>"
                                        className={cx('main__product-box-color-title')}
                                    >
                                        Xem chi tiết
                                    </a>
                                </div>
                            </div>
                            <div className={cx('col l-3 m-6 c-6')}>
                                <div className={cx('main__product-box-picture')}>
                                    <div className={cx('new')}>
                                        <p>50%</p>
                                    </div>

                                    <Image
                                        src={'/images/1.1adidas.png'}
                                        width={800}
                                        height={800}
                                        alt=""
                                        className={cx('main__product-box-img')}
                                    />
                                </div>
                                <h3 className={cx('main__product-box-title')}>1</h3>
                                <div className={cx('main__product-box-price')}>
                                    <span className={cx('main__product-box-current-price')}>1</span>
                                    <span className={cx('main__product-box-old-price')}>2</span>
                                </div>
                                <div className={cx('main__product-box-color')}>
                                    <a
                                        href="<?php echo './detail.php?id='.$productNew->getId() ?>"
                                        className={cx('main__product-box-color-title')}
                                    >
                                        Xem chi tiết
                                    </a>
                                </div>
                            </div>
                            <div className={cx('col l-3 m-6 c-6')}>
                                <div className={cx('main__product-box-picture')}>
                                    <div className={cx('new')}>
                                        <p>50%</p>
                                    </div>

                                    <Image
                                        src={'/images/1.1adidas.png'}
                                        width={800}
                                        height={800}
                                        alt=""
                                        className={cx('main__product-box-img')}
                                    />
                                </div>
                                <h3 className={cx('main__product-box-title')}>1</h3>
                                <div className={cx('main__product-box-price')}>
                                    <span className={cx('main__product-box-current-price')}>1</span>
                                    <span className={cx('main__product-box-old-price')}>2</span>
                                </div>
                                <div className={cx('main__product-box-color')}>
                                    <a
                                        href="<?php echo './detail.php?id='.$productNew->getId() ?>"
                                        className={cx('main__product-box-color-title')}
                                    >
                                        Xem chi tiết
                                    </a>
                                </div>
                            </div>
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
                                    <a href="#" className={cx('main__product-box-color-title')}>
                                        Xem chi tiết
                                    </a>
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
                                    <a href="#" className={cx('main__product-box-color-title')}>
                                        Xem chi tiết
                                    </a>
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
                                    <a href="#" className={cx('main__product-box-color-title')}>
                                        Xem chi tiết
                                    </a>
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
                                    <a href="#" className={cx('main__product-box-color-title')}>
                                        Xem chi tiết
                                    </a>
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
