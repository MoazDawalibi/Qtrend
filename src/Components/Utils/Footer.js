'use client'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { useTranslation } from 'react-i18next';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { DATASOCIALMEDIA } from '../../config/SOCIALMEDIA';
import { useGetAllSocialMedia } from '../../api/social_media';

const Footer = () => {

    const {data} = useGetAllSocialMedia()
    const [t] = useTranslation()
    return (
        <div className='Footer'>
            <div className='Footer_Left'>
                <img src='../Logo_Qtrend.svg' alt='logo' width="8vw" height="30vw" />
                <p className='p'>

                  {t("Qtrend is a creative design agency that specializes in delivering the best full creative branding , logo creation, and posts creation digital design solutions. With a passion for visual aesthetics and a deep understanding of branding strategies, Qtrend aims to help businesses establish a strong and impactful brand presence.")}
                </p>
                <div className='Footer_SocialMedia'>
   
            {
              
              DATASOCIALMEDIA.map((icon ,index) =>{

                const object_is_exist = data?.find(social => social.icon == icon.key)
                return (    
                         <a href={object_is_exist?.link} target='_blank' className='btn btn-primary btn-lg btn-floating' key={index} style={{display:object_is_exist? 'inline-flex' :"none"}}>
                           {icon.icon}
                         </a>
   
                 )
              }
              )
            }
    
                </div>
            </div>
            <div className='Footer_Right'>
                <div className='Footer_Row'>
                    <h3>{t("Company")}</h3>
                    <Link aria-label='About' href="about_us">{t("About")}</Link> 
                     <Link aria-label='Meet US' href="soon">{t("Meet US")}</Link>
                      <Link aria-label='Support' href="soon">{t("Support")}</Link>
                       <Link aria-label='Our work' href="works">{t("Our work")}</Link>
                </div>
                <div className='Footer_Row'>
                    <h3>
                        {t("Quick Link")}
                    </h3>
                    <a aria-label="Share Location" href="#!">{t("Share Location")}</a>  <a aria-label="FAQs" href="#!">{t("FAQs")}</a>
                </div>
                <div className='Footer_Row'>
                    <h3>{t("Legal")}</h3>
                    <a aria-label="Terms & conditions" href="#!">{t("Terms & conditions")}</a>   <a aria-label="Privacy Policy" href="#!"> {t("Privacy Policy")}</a>
                </div>
            </div>

        </div>
    )
}

export default Footer