"use client"
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
const BtnTranslate = () => {
  const [t, i18n] = useTranslation();

  const [Word, setWord] = useState("AR")


  function Trans(){
    console.log(i18n.language)
      if(i18n.language =='en'){
        lungAR()
      }
      else{
        lungEN()
      }
  }
  function lungAR() { i18n.changeLanguage('ar'); document.body.classList.add('ar'); localStorage.setItem("Lung", "ar");setWord("EN") }
  function lungEN() { i18n.changeLanguage('en'); document.body.classList.remove('ar'); localStorage.setItem("Lung", "en");setWord("AR") }

  return (
    <div className='Lung'>
      <span className="switch-left" onClick={() => Trans()}>{t(i18n.language !='en' ? 'EN':"AR")}</span>
    </div>
  )
}

export default BtnTranslate