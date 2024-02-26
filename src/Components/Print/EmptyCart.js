import React from 'react'
import TopHeader from './TopHeader'
import PrintNavBar from './PrintNavBar'
import Footer from '../Utils/Footer'
import CopyRight from '../Utils/CopyRight'
import {BsEmojiFrownFill} from 'react-icons/bs'
import { useRouter } from 'next/navigation'
import { useTranslation } from 'react-i18next'
const EmptyCart = () => {
    const route = useRouter();
    const {t} = useTranslation();
  return (
        <div className='EmptyCart_page'>
        
            {/* <TopHeader/> */}
            {/* <PrintNavBar/> */}
            
            <div className='empty_cart'>
                <BsEmojiFrownFill/>
                <p className='empty_cart_text'>{t("Ops.. Your Cart Is")}<span>{t("Empty!")}</span></p>
                <div className='return_button' onClick={() => route.push('/Print')} >
                    <p className='return_p'>{t("Return to Print Page")}</p>
                </div>
            </div>

            <Footer/>
            <CopyRight/>
        </div>
    )
}

export default EmptyCart