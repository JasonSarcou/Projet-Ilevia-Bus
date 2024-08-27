import React, { useRef, useState } from 'react';
import './Carousel.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Carousel() {


    return(
        <div className="carousel">
            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                speed={2200}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                pagination={{ clickable: true, 
                              bulletClass: "swiper-pagination-bullet",
                }}
                onSwiper={(swiper) => console.log(swiper)}
                className="mySwiper"
                >
                <SwiperSlide><img className="img-carousel" src="src\assets\sliderImages\image1.png" alt="" /></SwiperSlide>
                <SwiperSlide><img className="img-carousel" src="src\assets\sliderImages\image2.png" alt="" /></SwiperSlide>
                <SwiperSlide><img className="img-carousel" src="src\assets\sliderImages\image3.png" alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Carousel