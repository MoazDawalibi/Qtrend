'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import CardThirdService from './CardThirdService'
import { useTranslation } from 'react-i18next'
import { BaseURL, BaseURLImage } from '../../api/config'
import { TranslateObject } from '../../Utils/TranslateObject'
import {ThirdServiceBigImagesArray, ThirdServiceSmallImagesArray } from './ServicesConfig'
function ThirdPageService({data}) {
    const [t] = useTranslation()
    const {i18n} = useTranslation()

    useEffect(() => {

        const IMages = ThirdServiceBigImagesArray ||[]
        let i = 0;
        setInterval(() => {
            let index = i

            if (document.getElementById('dynmic-image')) {
                document.getElementById('dynmic-image').src = IMages[index]?.img
            }
            i = (i + 1) % IMages.length


        }, 3000)

    }, [ThirdServiceBigImagesArray])
    
    const Transion_page4 = () => {
        document.getElementById("Transion_page").classList.add("Transion_page4")

    }
    return (
        <div className='ThirdService_page' id='ThirdService_page' >
            <div className='Services3_Elements'>
                <div className='Services3_Elements_Container'>
                    <img src='../Services/Services3/3Services_4.svg' alt='' className='Elements3 ' onClick={()=>Transion_page4()} />
                    <img src='../Services/Services3/Polygon4.svg' alt='' className='Polygon4_Right ' />
                </div>


            </div>
            <div className='images'>
                  {
                        ThirdServiceSmallImagesArray?.map((img ,i)=>(
                        <div className={`img-service-container ${(i %3 ==0 ? 'down-image' :null)}`  }  key={img?.id}>
                            <img
                                alt='/service'
                                className='img-service'
                                src={img.img}
                            />
                        </div>  
                        ))
                    }
            </div>
            {/* <CardThirdService title={TranslateObject(data?.at(0)?.translations, i18n.language ,'title')}
                style={{
                    margin: "auto",
                    marginTop: "1.5vw"

                }}
                 description={TranslateObject(data?.at(0)?.translations, i18n.language ,'description')} /> */}
                <CardThirdService 
                 title={t("PHOTOS")}
                 style={{
                    margin: "auto",
                    marginTop: "1.5vw"
                 }}
                 description={t("Leverage your in-depth brand knowledge, seamless integration capabilities, cost savings, and collaborative spirit to create visuals that authentically represent your brand and resonate with your target audience.")} />

            <div className='third-row-service-third'>

                {/* <CardThirdService title={TranslateObject(data?.at(1)?.translations, i18n.language ,'title')} description={TranslateObject(data?.at(0)?.translations, i18n.language ,'description')}
                classNameForDescription={'card-service-third-row-p'}

                /> */}
                 <CardThirdService 
                 title={t("VIDEO TAPING")} 
                 description={t("Having our company in charge of video taping ensures that the videos align with your brand's visual identity and guidelines. The videos will reflect the same aesthetics, style, and tone that your brand is known for, creating a consistent and recognizable brand presence across all your video content.")}
                 classNameForDescription={'card-service-third-row-p'}/>

                <div className='img-service-container-third-row '>
                {/* {
                        ThirdServiceBigImagesArray?.map((img ,i)=>(
                            <img
                                // id='dynmic-image'
                                alt='/service'
                                className='img-service'
                                src={img.img}
                            />
                        ))
                    } */}
                    <img
                        id='dynmic-image'
                        alt='/service'
                        className='img-service'
                        src={'/Services/Services3/7.png'}
                    />
                </div>
            </div>

        </div>
    )
}

export default ThirdPageService