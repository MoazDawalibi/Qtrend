'use client'
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { create } from 'zustand';

const useManageCart = create((set) => ({
  
  cart: typeof window !== 'undefined' && window.localStorage ?  JSON.parse(localStorage.getItem('cart')) || [] : [],
  totalPrice:0 ,
  // Add a product to the cart
  addProductToCart: (product) =>
    set((state) =>{
      console.log(product);
      const is_product_exists =  state.cart.find(productInCart => productInCart.id == product.id);

      if(is_product_exists){
        const new_Cart = state.cart.map(productInCart => {
          if(productInCart.id == product.id){
            productInCart.quantity += 1 
          }
          return productInCart
        })

        localStorage.setItem('cart', JSON.stringify(new_Cart))
        return {
          cart : new_Cart
        }  
      }
      const new_Cart = [...state.cart , product]
      localStorage.setItem('cart', JSON.stringify(new_Cart))

      return {
        cart : new_Cart
      }
    }),

    addProductToCartWithQuantity: (product) =>
    set((state) =>{
      console.log(product);
      const is_product_exists =  state.cart.find(productInCart => productInCart.id == product.id);

      if(is_product_exists){
        const new_Cart = state.cart.map(productInCart => {
          if(productInCart.id == product.id){
            productInCart.quantity = (+productInCart.quantity) +  (+product.quantity)
          }
          return productInCart
        })

        localStorage.setItem('cart', JSON.stringify(new_Cart))
        return {
          cart : new_Cart
        }  
      }
      const new_Cart = [...state.cart , product]
      localStorage.setItem('cart', JSON.stringify(new_Cart))
      return {
        cart : new_Cart
      }
    }),
  // Remove a product from the cart
  removeProductFromCart: (productId) =>
    set((state) =>{
      const new_Cart = state.cart.filter((product) => product.id != productId)
      localStorage.setItem('cart', JSON.stringify(new_Cart))

      return ({
      cart: new_Cart ,
    })
    
  }),
    
  // Clear the cart (remove all products)
  clearCart: () => set(()=>{

    localStorage.removeItem('cart')
    return { cart: [] }
  }),
  
  // Calculate the total price of items in the cart

})
);

export default useManageCart;
