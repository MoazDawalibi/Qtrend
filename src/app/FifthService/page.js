"use client"

import FifthServiceSquare from '../../Components/Services/FifthServiceSquare';
import Footer from '../../Components/Utils/Footer'
import NavBar2 from '../../Components/Utils/NavBar2'
import React from 'react'
import {BsArrowRight} from "react-icons/bs"
import { FaFacebookF, FaTiktok, FaWhatsapp, FaSnapchatGhost, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import {BiSolidRightArrow} from 'react-icons/bi'
import Services5_BG from '../../Components/Services/Services5_BG';
import { useTranslation } from 'react-i18next';
import { useGetFifthService } from '../../api/service/first_services';
import { TranslateObject } from '../../Utils/TranslateObject';
import i18n from '../../translate/Translate';

const FifthService = () => {
  const [t] = useTranslation()
  const {i18n} = useTranslation()
  const { data, isloading} = useGetFifthService();
  console.log(data);
  return (
      // Main Dev Page
    <div className='FifthService_page'>
      <div className='First'>
        <h1 className='APPS'>{t("APPSs")}</h1>
        <h2 className='DEVELOPMENT'>{t("DEVELOPMENTt")}</h2>
      </div>  
      <div className='Second'>  
        <h1 className='WEB'>{t("WEBb")}</h1>
        <h2 className='DEVELOPMENT'>{t("DEVELOPMENTtt")}</h2>
      </div> 
      <div className='Third'>
        <h1 className='APPS_and_WEB'>{t("APPS & WEBb")}</h1>
        <h2 className='DEVELOPMENT'>{t("DEVELOPMENTttt")}</h2>
      </div>  
      {/* NavBar */}
        <NavBar2/>
      {/* BG Image */}
        <div className='FifthService_page_BG'>
          {/* <img src='../Services/Services5/FifthService.png' alt='www'/> */}
          <Services5_BG/>
        </div>
      {/* Mid Section */}
        <div className='FifthService_mid_sec'>
      {/* Left Sec */}
            <div className='FifthService_mid_sec_left'>
                <h1 className='FifthService_title'>{t("Looking For a Modern Web/App design?")}</h1>
                <h2 className='FifthService_desc'>{t("You can count on us to provide you with cutting-edge and visually appealing website designs. Our team of skilled designers specializes in creating modern and sleek designs that align with the latest design trends and industry standards. Here are some key aspects of our modern web design services:")}</h2>
                <div className="Shit_div">
                <a href='../../meet_us' className='ContactUS_a'>
                <button className='FifthService_button'>
                  {t("Contact us")}
                </button>
                <span className='FifthService_button_hover'><BiSolidRightArrow/></span>
                </a>
                </div>
            </div>
      {/* Right Sec */}
            {/* <div className='FifthService_mid_sec_right'>
              <div className='FifthServiceSquare_first'>
              <FifthServiceSquare 
              classNameForSquare={"FifthService_square2"}
              title={TranslateObject(data?.at(0)?.translations, i18n.language, 'title')}
              desc={TranslateObject(data?.at(0)?.translations, i18n.language, 'description')}
              last={t("Learn more about Exchanges")}
              icon={<BsArrowRight/>}
              />  
              </div>
              <span className='scale_span'>
                <FifthServiceSquare
              classNameForSquare={"FifthService_square1"} 
              title={TranslateObject(data?.at(1)?.translations, i18n.language, 'title')}
              desc={TranslateObject(data?.at(1)?.translations, i18n.language, 'description')}
              last={t("Discover Expenses")}
              icon={<BsArrowRight/>}
              />
              <div className='FifthServiceSquare_second'>
              <FifthServiceSquare 
              classNameForSquare={"FifthService_square"}
              title={TranslateObject(data?.at(2)?.translations, i18n.language, 'title')}
              desc={TranslateObject(data?.at(2)?.translations, i18n.language, 'description')}
              last={t("Get started")}
              icon={<BsArrowRight/>}
              />
              <FifthServiceSquare 
              classNameForSquare={"FifthService_square4"}
              title={TranslateObject(data?.at(3)?.translations, i18n.language, 'title')}
              desc={TranslateObject(data?.at(3)?.translations, i18n.language, 'description')}
              last={t("Get started")}
              icon={<BsArrowRight/>}
              />
              </div>
              </span>
            </div> */}
            <div className='FifthService_mid_sec_right'>
              <div className='FifthServiceSquare_first'>
              <FifthServiceSquare 
              classNameForSquare={"FifthService_square2"}
              title={t("Website Design and Layout:")}
              desc={t("This involves creating the overall visual design of the website, including the color scheme, typography, graphics, and layout. It focuses on creating an aesthetically pleasing and engaging user interface (UI) design.")}
              last={t("Learn more about Exchanges")}
              icon={<BsArrowRight/>}
              />  
              </div>
              <span className='scale_span'>
                <FifthServiceSquare
              classNameForSquare={"FifthService_square1"} 
              title={t("User Experience (UX) Design:")}
              desc={t("UX design focuses on creating a positive and intuitive user experience for website visitors. It involves designing the website's navigation, interaction elements, and user flows to ensure ease of use and satisfaction.")}
              last={t("Discover Expenses")}
              icon={<BsArrowRight/>}
              />
              <div className='FifthServiceSquare_second'>
              <FifthServiceSquare 
              classNameForSquare={"FifthService_square"}
              title={t("Responsive Design:")}
              desc={t("With the increasing use of mobile devices, responsive design is crucial. It involves designing websites that adapt and display properly on various screen sizes and devices, providing an optimal user experience for both desktop and mobile users.")}
              last={t("Get started")}
              icon={<BsArrowRight/>}
              />
              <FifthServiceSquare 
              classNameForSquare={"FifthService_square4"}
              title={t("Wireframing and Prototyping:")}
              desc={t("Before starting the actual design process, web designers often create wireframes and prototypes to outline the structure and functionality of the website. This helps visualize the layout, navigation, and content placement before moving on to the actual design phase.")}
              last={t("Get started")}
              icon={<BsArrowRight/>}
              />
              </div>
              </span>
            </div>
        </div>
      {/* Social Media */}
        <div className='FifthService_last_sec'>
            <div className='FifthService_icons'>
            <div className='single_icon'><FaFacebookF/></div>
            <div className='single_icon'><FaTiktok/></div>
            <div className='single_icon'><FaInstagram/></div>
            <div className='single_icon'><FaWhatsapp/></div>
            <div className='single_icon'><FaLinkedinIn/></div>
            <div className='single_icon'><FaSnapchatGhost/></div>
            </div>
        </div>
      {/* Footer */}
          <Footer/>
    </div>
  )
}

export default FifthService