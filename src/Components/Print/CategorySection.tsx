import React, {ReactNode} from 'react'
import Arrow from '../Services/Arrow';
import CategoryCard from './CategoryCard';
import ProductCard from './ProductCard';
import {Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
type CategorySectionProps = {
    index:number
   };
const CategorySection = ({index}:CategorySectionProps) => {

    const is_odd = index %2 ==1 ;
  return (
    <div className='CategorySection'>
        <div className='CategoryCard_section'>
            <CategoryCard
            name='PAPER PRINTS'
            index={1}
            desc='Top quality paper prints in Qatar'
            image='../Print/Union.jpg'
            />
        </div>
        <div className='product_swiper'>
            <Swiper
            spaceBetween={50}
            slidesPerView={3}>
                <SwiperSlide>
                    <div className='img_container'>
                    <img src={'../Print/Union.jpg'}/>
                    <img src={'../Print/Union.jpg'}/>
                    <img src={'../Print/Union.jpg'}/>
                    <img src={'../Print/Union.jpg'}/>
                    <img src={'../Print/Union.jpg'}/>
                    </div>
               {/* <div className='ProductCard'>
               <ProductCard
                name='Business Cards'
                index={1}
                image='../Print/Rectangle 9629.png'
                id={1}
                from_price='130'
                quick_overview='Top quality brochures in Qatar'
                to_price='15'
                />
               </div>
                <div className='ProductCard'>
                <ProductCard
                name='Business Cards'
                index={1}
                image='../Print/Rectangle 9629.png'
                id={1}
                from_price='130'
                quick_overview='Top quality brochures in Qatar'
                to_price='15'
                />
                </div>
                <div className='ProductCard'>
                <ProductCard
                name='Business Cards'
                index={1}
                image='../Print/Rectangle 9629.png'
                id={1}
                from_price='130'
                quick_overview='Top quality brochures in Qatar'
                to_price='15'
                />
                </div> */}
                </SwiperSlide>
            </Swiper>
        </div>
        <div className='arrow'>
            <Arrow/>
        </div>
    </div>
  )
}

export default CategorySection