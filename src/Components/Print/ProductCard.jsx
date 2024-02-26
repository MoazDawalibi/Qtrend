'use client '
import { BaseURL } from '../../api/config'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/navigation'
import AddToCartButton from './AddToCartButton'
import useManageCart from '../../zustand/cart'
import {TranslateObject} from '../../Utils/TranslateObject'
import { toast } from 'react-toastify'
function ProductCard({name  , image  ,price , from_price , id ,  to_price ,translate ,index = 0  }) {
    const {addProductToCart} = useManageCart()
    const is_odd  = index %2 == 1 
    const {t ,i18n}   = useTranslation()
    const route = useRouter()
    const handelGoToSingleProduct = ()=>{
      route.push('/SingleProduct?product_id='+ id)
    }
  return (
    <div className='product_card'
     style={{background:is_odd ? "black" :'#FFF'}}>
         {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={BaseURL +image} alt="Product IMage "   onClick={handelGoToSingleProduct}/>

        <h2 className='produc_name' style={{color:is_odd ? '#F4F4F4' :"black"}}  onClick={handelGoToSingleProduct} >{TranslateObject(translate,i18n.language , 'name' )} </h2>

        <div className='card-body' style={{color:is_odd ? '#F4F4F4' :"black"}}   onClick={handelGoToSingleProduct}>
                <div className='card-body-left'>
                    <p className='quick_overview'>{TranslateObject(translate,i18n.language , 'quick_overview' ).length > 34 ?TranslateObject(translate,i18n.language , 'quick_overview' ) +"..." :TranslateObject(translate,i18n.language , 'quick_overview' ) }</p>
                    <p className='price'>{t('From')} <b>{from_price}QR</b></p>
                    <p className='price'>{t("to")} <b>{to_price}QR</b></p>
                </div>
        </div>
        <AddToCartButton onClick={()=>{
          addProductToCart({
            id,
            quantity:1,
            price:price,
            image:image,
            name:name,
            is_customized_design:false
          })
          toast.success(t("Add Successfully"))
        } 
      }
        />
    </div>
  )
}

export default ProductCard  