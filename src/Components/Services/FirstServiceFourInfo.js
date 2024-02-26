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
                <div>
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
                </div> 
            </div>
          </div>
  )
}

export default FirstServiceFourInfo