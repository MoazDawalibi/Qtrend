"use client"

import React from 'react'
import GirlMedia from './GirlMedia'
import Services4_Images from './Services4_Images'
import Word_animation from './Word_animation'
import { useTranslation } from 'react-i18next'
export const ForthServicesPage = ({data}) => {

    console.log(data)
    const [t] = useTranslation()
    const Back_To_page3 = () => {
        document.getElementById("Transion_page").classList.remove("Transion_page4")
    }
    return (
        <div className='ForthServicesPage'>
            <div className='modles_div'>
                <div className='female'>
                    <div className='female_models'>{t("female")}</div>
                    <span>{t("models")}</span>
                </div>
                <div className='male'>
                    <div className='male_models'>{t("male")}</div>
                    <span>{t("models")}</span>
                </div>
                <div className='kids'>
                    <div className='Kids_models'>{t("kids")}</div>
                    <span>{t("models")}</span>
                </div>
            </div>
            <img src='../Services/Services4/Ibrahem.webp' alt='' className='Ibrahem' />
            <div className='ForthServices_Body'>
                <div className='First_Section'>
                    <img src='../Services/Services4/Logo&Words.svg' alt='' className='Logo_Words' />
                        <Word_animation/>
                </div>  
                <div className='Second_Section'>
                    <div className='Section_Section_Left'>
                        <div className='First_LeftSection'>
                        <img  src='../Services/Services_Elements/4_Section4.svg' alt='' className='Element4_4' />
                        <img  src='../Services/Services_Elements/4_Section3.svg' alt='' className='Element4_3' onClick={()=>Back_To_page3()} />

                        </div>
                        <div className='Second_LeftSection'>
                            <h3>
                            {t("We understand that every project is unique, and we pride ourselves on offering a wide range of models to meet your specific requirements. Whether you need fashion models, runway models, commercial models, or promotional models, we have a diverse pool of talent ready to fulfill your needs.")}
                            </h3>
                        </div>
                        <div className='Third_LeftSection'>
                            <GirlMedia/>
                        </div>
                    </div>
                    <div className='Section_Section_Rigth'>

                        <div className='Section_Rigth_Top'>
                                <Services4_Images Word={`female`} Data={data?.at(0)?.images}/>
                                <Services4_Images Word={`male`} Data={data?.at(1)?.images}/>
                                <Services4_Images Word={`kids`} Data={data?.at(2)?.images}/>
                        </div>
                        <div className='Section_Rigth_Down'>
                            <h3>
                            {t("Our models boast an impressive portfolio that showcases their versatility and talent")}
                            </h3>
                            <p>
                            {t("Are you in search of exceptional models to bring your creative vision to life? Look no further! At Qtrend, we specialize in providing professional models tailored to your specific requirements. With our extensive network of diverse and talented individuals, we ensure that you find the perfect match for your project.")}
                            </p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
