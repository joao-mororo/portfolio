import React, { useState } from 'react'
import Slider from 'react-slick'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useMediaQuery } from 'react-responsive'
import styles from './Carousel.module.css'
import './SlickCarousel.css'

const images = [
    "https://raw.githubusercontent.com/chrisdesilva/3d-slider/main/src/assets/astronaut.png",
    'https://raw.githubusercontent.com/chrisdesilva/3d-slider/main/src/assets/celebrating.png',
    'https://raw.githubusercontent.com/chrisdesilva/3d-slider/main/src/assets/education.png',
    'https://raw.githubusercontent.com/chrisdesilva/3d-slider/main/src/assets/taken.png'
]

const Carousel = ({ children }) => {
    const [imageIndex, setImageIndex] = useState(0);
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 600px)' })

    const NextArrow = ({ onClick }) => {
        return (
            <button className={`${styles.arrow} ${styles.next}`} onClick={onClick}>
                <IoIosArrowForward />
            </button>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <button className={`${styles.arrow} ${styles.prev}`} onClick={onClick}>
                <IoIosArrowBack />
            </button>
        );
    };

    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: isTabletOrMobile ? 1 : 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
    }

    return (
        <div className={styles.container}>
            <Slider {...settings}>
                {children.map((item, idx) => (
                    <div className={`${styles.slide} ${idx === imageIndex && styles.activeSlide}`}>
                        {item}
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Carousel