'use client'
// Import necessary modules and components
import React, { useEffect, useState } from 'react';
import TopHeader from '../../Components/Print/TopHeader';
import PrintNavBar from '../../Components/Print/PrintNavBar';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { Footer } from '../../Components/Home';
import CopyRight from '../../Components/Utils/CopyRight';
import { useRouter } from 'next/navigation';
import useManageCart from '../../zustand/cart';
import {getTotalPrice} from '../../Utils/CalcFinalPrice' 
import { BaseURL } from '../../api/config';
import { useTranslation } from 'react-i18next';
import EmptyCart from '../../Components/Print/EmptyCart'
import { toast } from 'react-toastify';
const MyCart = () => {
  const route = useRouter();
  const {cart ,removeProductFromCart} = useManageCart()
  const {t} = useTranslation();

  const [MyCart  ,  setMyCart] = useState([''])
  useEffect(()=>{
    setMyCart(cart)
  },[cart])
  const handelGoToCheckout = ()=>{
    route.push('/Checkout')
  }
  if(MyCart.length == 0){
    return(
    <EmptyCart/>
    )
  }
// console.log(item);

  return (
    <div className='main_page'>
      {/* Display the top header */}
      <TopHeader />
      {/* Display the navigation bar */}
      <PrintNavBar />
      <div className='MyCart'>
        <div className='MyCart_container'>
          {/* Page location */}
          <h1 className='location_page' onClick={()=> route.push('/print')}>{t("Home")} {">"} <span> {t("My Cart")}</span></h1>
          <div className='header'>
            <h1 className='header_page'>{t("My Cart")}</h1>
            <MdOutlineShoppingBag />
          </div>
          {/* Checkout steps */}
          <div className='steps_pay'>
            <div className='first-level'>
              <span className='circle'>
                1
              </span>
              <span>
                {t("My Cart")}
              </span>
            </div>
            <div className='mid-level'>

            </div>
            <div className='last-level'>
              <span className='circle' onClick={handelGoToCheckout}>
                2
              </span>
              <span className='checkout_span' onClick={handelGoToCheckout}>
                {t("Checkout")}
              </span>
            </div>
          </div>
          {/* Edit product */}
          <div className='product_cart_container'>
          {
            MyCart?.map(item =>
              (
              <>
            <div className='edit_product' key={item?.id}>
            <span className='span1'></span>
            <div className='sec'>
              <div className='left_sec'>
                <div className='left_left'>
                  <img src={'/Print/Rectangle 9629.png'} alt='Product Image' />
                </div>
                <div className='right_left'>
                  <p className='right_left_first'>{item?.name}</p>
                  <p className='right_left_second'>{t("Quantity")}: {item?.quantity}</p>
                  <p className='right_left_third'>{item?.quantity * 120} Qr</p>
                </div>
              </div>
              <div className='right_sec'  onClick={()=>{
                      toast.success(t("Removed Successfully"))

                removeProductFromCart(item?.id)}}>
                X
              </div>
            </div>
            <span className='span2'></span>
          </div>
              </>
            ))
          }
           </div>
          {/* Order summary */}
          <div className='summary'>
            <p className='summary_title'>{t("Summary")}</p>
            <div className='summary_total'>
              <p className='total'>{t("Total")}</p>
              {/* <p className='price'>{getTotalPrice(MyCart)} Qr</p> */}
              <p className='price'>{1 * 120} Qr</p>
            </div>
            {/* Checkout and Continue Shopping buttons */}
            <button className='Checkout_button' onClick={() => route.push('/Checkout')}>{t("Checkout")}</button>
            <p className='summary_continue' onClick={() => route.push('/print')}>{t("Continue Shopping")}</p>
          </div>
        </div>
      </div>
      {/* Display the footer */}
      <Footer />
      {/* Display the copyright information */}
      <CopyRight />
    </div>
  );
}

export default MyCart;
