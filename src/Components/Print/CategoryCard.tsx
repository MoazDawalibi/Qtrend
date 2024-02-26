import React, {ReactNode} from 'react'
import CategoryCardGreen from '../../../public/Print/CategoryCardGreen';
type CategoryCardProps = {
   name:string,
   desc:string,
   image:string,
   index:number
  };
const CategoryCard = ({name, desc, image, index}:CategoryCardProps) => {

  const is_odd = index %2 ==1 ; 
  return (
    <div className='container' style={{background:is_odd ? 'white' :'#181818'}}>
          <CategoryCardGreen/>
        <img className='CatCom_img' src={image} alt='categoryImage' style={{background:is_odd ? 'black' :'#272727'}}/>
        <div className='mid_section'>
            <p className='first_word' style={{color:is_odd ? 'black' :'white'}}>{name}</p>
            <p className='second_word' style={{color:is_odd? 'black': 'white'}}>{desc}</p>
        </div>
        <div className='last_section'>
            <button style={{background:is_odd? 'black': 'white',color:is_odd? 'white': 'black'}}>VIEW ALL</button>
            <div className='left_and_right'>
                <span className='left_arrow' style={{background:is_odd? 'black': '#858585'}}> {"<"}</span>
                <span className='right_arrow' style={{background:is_odd? 'black': '#858585'}}>{">"}</span>
            </div>
        </div>
    </div>
  )
}

export default CategoryCard

{/* <CategoryCard
index='1'
image='../Print/Union.jpg'
name='PAPER PRINTS'
desc='Top quality paper prints in Qatar'
/> */}