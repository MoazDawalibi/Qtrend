"use client"

import {TranslateObject} from '../../Utils/TranslateObject'
import React from 'react'
import { useTranslation } from 'react-i18next'
const FirstServiceFourInfo = ({data}) => {
  const {i18n} = useTranslation()
  const  [t] = useTranslation()
  return (
         <div className='FirstService_info remove-in-page-three'>
            <div className='FirstServiceFourInfo_First'>
                {/* <div>
                  <h6>{TranslateObject(data?.at(0)?.translations, i18n.language ,'title')}</h6>
                  <h5>{TranslateObject(data?.at(0)?.translations, i18n.language ,'description')}</h5>
                </div> 
                <div>
                  <h6>{TranslateObject(data?.at(1)?.translations, i18n.language ,'title')}</h6>
                  <h5>{TranslateObject(data?.at(1)?.translations, i18n.language ,'description')}</h5>
                </div> 
            </div>

            <div className='FirstServiceFourInfo_Second'>
            <div>
                  <h6>{TranslateObject(data?.at(2)?.translations, i18n.language ,'title')}</h6>
                  <h5>{TranslateObject(data?.at(2)?.translations, i18n.language ,'description')}</h5>
                </div> 
                <div>
                  <h6>{TranslateObject(data?.at(3)?.translations, i18n.language ,'title')}</h6>
                  <h5>{TranslateObject(data?.at(3)?.translations, i18n.language ,'description')}</h5>
                </div>  */}
                <div>
                  <h6>{t("LOGOS")}</h6>
                  <h5>{t("Our company is dedicated to delivering the best unique logos by combining our expertise in design, creativity, and strategic thinking. We follow a comprehensive process that ensures each logo we create is tailored to our clients' needs and exceeds their expectations.")}</h5>
                </div> 
                <div>
                  <h6>{t("BROCHURES")}</h6>
                  <h5>{t("By combining our collaborative approach, research-driven insights, meticulous design process, and dedication to meeting clients' objectives, we ensure that our company delivers the best unique brochures.")}</h5>
                </div> 
            </div>

            <div className='FirstServiceFourInfo_Second'>
            <div>
                  <h6>{t("CONTENT WRITING")}</h6>
                  <h5>{t("Our company is dedicated to delivering the best unique logos by combining our expertise in design, creativity, and strategic thinking. We follow a comprehensive process that ensures each logo we create is tailored to our clients' needs and exceeds their expectations.")}</h5>
                </div> 
                <div>
                  <h6>{t("POST DESIGNS")}</h6>
                  <h5>{t("Our company is dedicated to delivering the best unique logos by combining our expertise in design, creativity, and strategic thinking. We follow a comprehensive process that ensures each logo we create is tailored to our clients' needs and exceeds their expectations.")}</h5>
                </div>
            </div>
          </div>
  )
}

export default FirstServiceFourInfo