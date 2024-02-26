import React from 'react'
import AllSquare from '../../../public/Print/AllSquare'
import { useTranslation } from 'react-i18next'
const PrintLastSection = () => {
  const {t} = useTranslation()
  return (
    <div className='PrintLastSection'>
        <div className='Text'>
            <p className='title'>{t("Advertising Products Printing:")}</p>
            <p className='description'>{t(("Refers to the process of printing promotional materials and branding on various items and products. This practice is commonly used by businesses and organizations to market their products or services, increase brand visibility, and create promotional merchandise for events or giveaways."))}</p>
            <p className='description2'>{t("Advertising products printing can involve printing a companys logo, slogan, contact information, or other marketing messages on a variety of items, including but not limited to:")}</p>
        </div>
        <div className='image_container'>
            <AllSquare/>
        </div>
    </div>
  )
}

export default PrintLastSection