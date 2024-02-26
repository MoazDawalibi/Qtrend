import React from 'react'
import ShopIconCartBackGround from './Icon/ShopIconCartBackGround'
import MainCategoryIcon from './Icon/MainCategoryIcon'
import Humnan from './Icon/Humnan'

type MainCategoryCardProps = {
    id:number  
    name :string 
    quick_overview :string 
    img :string 
}
function MainCategoryCard({ id, name, quick_overview ,img}:MainCategoryCardProps) {
  return (
    <div className='main_category_card'>
            <div className='main_category_card_text'>
                <h1>{name}</h1>
                <p>{quick_overview}</p>
                <button> All</button>
            </div>
            <div className='main_category_card_img'>
                <MainCategoryIcon />
                <Humnan />
            </div>
    </div>
  )
}

export default MainCategoryCard