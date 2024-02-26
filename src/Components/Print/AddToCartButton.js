import React from 'react'
import ShopIconCartBackGround from './Icon/ShopIconCartBackGround'
import ShopIcon from './Icon/ShopIcon'
import { useTranslation } from 'react-i18next'

function AddToCartButton({onClick}) {
  const {t} = useTranslation();
  return (
    <div className='add_to_cart_button' onClick={onClick}>
    <ShopIconCartBackGround/>
    <div className='add_To_cart_button_body'>
        <p style={{color:"black"}}> {t("Add to Cart")} </p>
        <div className='AddToCardIcon'>
        <ShopIcon />

        </div>
    </div>
</div>
  )
}

export default AddToCartButton