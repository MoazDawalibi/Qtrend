import { getTotalPrice } from "../../Utils/CalcFinalPrice"


export  const ConvertArrayToFatora = (array) =>{



    return `
    total: ${getTotalPrice(array?.myCart)}
    
    ${array?.myCart?.map(product => (
      `x${product.quantity} ${product?.name}   ${product.price}`
    )).join('\n')}
    
    customer_name: ${array?.name}
    customer_phone: ${array?.phone}
    customer_note: ${array?.note}
    `
    
}