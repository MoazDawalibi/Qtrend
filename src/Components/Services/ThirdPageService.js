'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import CardThirdService from './CardThirdService'
import { useTranslation } from 'react-i18next'
import { BaseURL, BaseURLImage } from '../../api/config'
import { TranslateObject } from '../../Utils/TranslateObject'
function ThirdPageService({data}) {
    const [t] = useTranslation()
    const {i18n} = useTranslation()

    useEffect(() => {

        const IMages = data?.at(1)?.images ||[]
        let i = 0;
        setInterval(() => {
            let index = i

            if (document.getElementById('dynmic-image')) {
                document.getElementById('dynmic-image').src =BaseURLImage+ IMages[index]?.path
            }
            i = (i + 1) % IMages.length


        }, 3000)

    }, [])
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
                        data?.at(0)?.images?.map((img ,i)=>(
                        <div className={`img-service-container ${(i %3 ==0 ? 'down-image' :null)}`  }  key={img?.id}>
                            <img
                                alt='/service'
                                className='img-service'
                                src={BaseURLImage + img.path}
                            />
                        </div>  
                        ))
                    }
            </div>
            <CardThirdService title={TranslateObject(data?.at(0)?.translations, i18n.language ,'title')}
                style={{
                    margin: "auto",
                    marginTop: "1.5vw"

                }}
                 description={TranslateObject(data?.at(0)?.translations, i18n.language ,'description')} />


            <div className='third-row-service-third'>

                <CardThirdService title={TranslateObject(data?.at(1)?.translations, i18n.language ,'title')} description={TranslateObject(data?.at(0)?.translations, i18n.language ,'description')}
                classNameForDescription={'card-service-third-row-p'}

                />

                <div className='img-service-container-third-row '>
                    <img
                        id='dynmic-image'
                        alt='/service'
                        className='img-service'
                        src={'../Services/Services3/first.webp'}
                    />
                </div>
            </div>

        </div>
    )
}

export default ThirdPageService