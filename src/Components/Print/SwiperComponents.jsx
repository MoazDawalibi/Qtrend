'use client'
import React, { useEffect, useState } from 'react';
import  { Navigation, Pagination, Scrollbar, A11y, Autoplay  } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SwiperComponent = ({ children, slidesPerView =null }) => {

  const [mount  , setMount] = useState(false)


    const statment  =2
  return (
    

    <Swiper
    modules={[Navigation, Pagination , A11y , Autoplay]}
    spaceBetween={20}
    slidesPerView={statment}
    pagination={{ clickable: true }}
    // onSwiper={(swiper) => }
    // onSlideChange={() => console.log('slide change')}
    centeredSlides={true}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
    >
     {children}
    </Swiper>


  );
};

export default SwiperComponent;
