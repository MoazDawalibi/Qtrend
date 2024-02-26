import React from 'react'
import {SwiperSlide} from 'swiper/react'
import { BaseURLImage } from '../../api/config'

const DragImages = ({data}) => {
  return (
            data?.map((img) => (
                
                  <SwiperSlide key={img?.id}>
                    <img src={BaseURLImage + img?.path} alt='' className='Swiper_image1' />
                  </SwiperSlide>
                
              ))
    )
}

export default DragImages