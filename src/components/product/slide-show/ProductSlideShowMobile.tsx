'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './slideshow.css'
import Image from 'next/image';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';

type Props = {
    images: string[],
    title: string,
    className?: string
}

export const ProductSlideShowMobile = ({ images, title, className = '' }: Props) => {
    return (
        <div className={className}>
            <Swiper
                style={{
                    width: '94vw',
                    height: '500px',
                    '--swiper-navigation-color': '#BEBFBF',
                    '--swiper-pagination-color': '#BEBFBF',
                } as React.CSSProperties
                }
                pagination
                autoplay={{ delay: 3000 }}
                modules={[FreeMode, Autoplay, Pagination]}
                className="mySwiper2"
            >
                {
                    images.map(image => (
                        <SwiperSlide key={image}>
                            <Image src={`/products/${image}`} alt={title} width={600} height={500}
                                className='object-fill' />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}
