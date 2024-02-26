"use client"
import React from 'react'
import GreenLogo from '/public/GreenLogo'
import { useRouter } from 'next/navigation'
import { useTranslation } from 'react-i18next'

const NotFound = () => {

    const route = useRouter();
    const {t} = useTranslation();
    
  return (
    <div className='notFound_main_page'>
        <div className='notFound_icon'><GreenLogo/></div>
        <p className='notFound_text'>{t("Sorry")}..</p>
        <p className='notFound'>{t("404 Not Found")}</p>
        {/* <div className='return_button' onClick={() => route.push('/')} >
            <p className='return_p'>{t("Return to Main Page")}</p>
        </div> */}
    </div>
  )
}

export default NotFound