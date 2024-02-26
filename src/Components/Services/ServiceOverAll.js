"use client"
import React from 'react'
import { useTranslation } from 'react-i18next'

const ServiceOverAll = () => {
  const [t] = useTranslation()
  return (
    <div className='ServiceOverAll'>
        <h4 className='ServiceOverAll_title'>{t("OverAll")}</h4>
        <h1 className='ServiceOverAll_desc'>{t("Extend Your Market Reach by Establishing a Distinct Brand Identity and Creating Appealing Marketing Content")}</h1>
        <h6 className='ServiceOverAll_end'>{t(" and a Collection of Visually Striking Marketing Materials.Reach a Broader Customer Segment by Crafting a Standout Brand Identity and Compelling Visual Marketing Materials")}</h6>
    </div>
  )
}

export default ServiceOverAll