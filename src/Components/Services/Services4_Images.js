import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Arrow from './Arrow';
import { BaseURLImage } from '../../api/config';

const Services4_Images = ({ Word, Data=[] }) => {
  

  return (
    <div className='Services4_Images'>
      <div className='Swiper_Image'>
        {/* <img alt=' ' src={`../Services/Services4/${Word}.svg`} className='Swiper_Words' /> */}

        <Swiper
          spaceBetween={50}
          slidesPerView={3}>
          {
            Data?.map((img) => (
              <>
                <SwiperSlide>
                  <img src={BaseURLImage + img?.path} alt='' className='Swiper_image1' />
                  
                </SwiperSlide>
              </>
            ))

          }


        </Swiper>
      </div>
      <Arrow />

    </div>
  )
}

export default Services4_Images