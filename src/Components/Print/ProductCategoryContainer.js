import React from 'react'
import ProductCard from './ProductCard'

function ProductCategoryContainer({color , index , products}) {
    const is_odd = index %2 ==1 
    
  return (
    <>
    <div style={{background:is_odd? "#EDF1F4" :color , display:products?.length == 0 ? 'none' :"block"}} className='product_category_row'>
      <div className='simple-continer-row ' >

        {
          products.map(product =>(
            <ProductCard 
            index={index}
                key={product.id}
                translate={product?.translations}
                image={product?.product_main_image}
                {...product}
                price={product?.product_price}
                from_price={product?.low_price}
                to_price={product?.high_price}
                />
                ))
              }
      </div>
    </div>  
    </>
  )
}

export default ProductCategoryContainer


//  0 *4 =>  0+4
//  1*4 => 4+ 4
// 