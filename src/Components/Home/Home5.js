import React from 'react'
import LogoAnimation from './LogoAnimation';
import Ibrahem from './Ibrahem';

const Home5 = ({t}) => {
  return (
    <div className='Home4'>

    <img className='Home4_BG_Image' src="../Home/5/Home5_Image/Home5_BG.png" alt="Image" />
    <div className='Home4_Top'>
      <h1>{t("Our Awesome Portofolio")}</h1>
      <LogoAnimation/>

    </div>
    <div className='Home4_Down'>
      <div className='Home4_Down_Right'>

        <div className="ImageContainer">
          <img className='Home4_Sec2' src='../Home/5/Home5_Image/Home5_Sec3.svg' alt='' />
          <img className='Home4_Sec2' src='../Home/5/Home5_Image/Home5_Sec2.svg' alt='' />
          <img className='Home4_Sec2' src='../Home/5/Home5_Image/Home5_Sec3.svg' alt='' />
        </div>
        <img className='Rectangle' src='../Home/5/Home5_Image/Rectangle.svg' alt='' />
        <div className='Home4_Text'>
          <h3>
           {t("PLEASE NOTE")}
          </h3>
          <p>
          {t(`This is a brief overview of our portfolio, and each project represents our capabilities in branding, marketing, and video/photo production. We would be delighted to provide more detailed information and showcase our work in a comprehensive portfolio presentation tailored to your specific requirements.`)}
          </p>

        </div>
      </div>

    </div>
      <Ibrahem/>
  </div>
  )
}

export default Home5