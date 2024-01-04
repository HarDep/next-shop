'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './slideshow.css'
import { useState } from 'react';
import { Swiper as SwiperObject } from 'swiper';
import Image from 'next/image';
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';

type Props = {
    images: string[],
    title: string,
    className?: string
}

export const ProductSlideShow = ({ images, title, className = '' }: Props) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();
    return (
        <div className={className}>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#BEBFBF',
                    '--swiper-pagination-color': '#BEBFBF',
                } as React.CSSProperties
                }
                spaceBetween={10}
                navigation={true}
                autoplay={{ delay: 3000 }}
                thumbs={{
                    swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
                }}
                modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                className="mySwiper2"
            >
                {
                    images.map(image => (
                        <SwiperSlide key={image}>
                            <Image src={`/products/${image}`} alt={title} width={1024} height={800}
                                className='rounded-lg object-fill' />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                {
                    images.map(image => (
                        <SwiperSlide key={image}>
                            <Image src={`/products/${image}`} alt={title} width={300} height={300}
                                className='rounded-lg object-fill' />
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    )
}
