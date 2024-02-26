"use client"
import NavBar from '../../Components/Utils/NavBar'
import React, { useLayoutEffect } from 'react'
import Girl from './FirstService/Girl'
import Footer from '../../Components/Utils/Footer'
import FirstServiceFourInfo from '../../Components/Services/FirstServiceFourInfo'
import ServiceOverAll from '../../Components/Services/ServiceOverAll'
import ThirdPageService from '../../Components/Services/ThirdPageService'
import Hajeat from './FirstService/Hajeat'
import { ForthServicesPage } from '../../Components/Services/ForthServicesPage'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useSearchParams } from 'next/navigation'
import { BaseURL } from '../../api/config'


function FirstService({data , data2 , data3}) {
  const router = useSearchParams();

  
  const [t] =useTranslation()
  const Params =  router.get('param') ?? 1
  useLayoutEffect(() => {
      if(Params == 2 ){
        Transtion_Page2()
      }      
      if(Params == 3 ){
        Transtion_Page2()
        Transtion_Page3()
      }
      if(Params == 4 ){
        Transtion_Page2()
        Transtion_Page3()
        document.getElementById("Transion_page").classList.add("Transion_page4")
      }
     
  }, [Params])
  
  const Transtion_Page2 = () => {
    document.getElementById("Transion_page").classList.remove("Back_page")
    document.getElementById('ThirdService_page').style.display ='none'
    document.getElementById("Transion_page").classList.add("Transion_page")
    setTimeout(() => {
      document.getElementById("Transion_page").classList.add("Timer")
    }, "500");

  }
  const Transtion_Page3 = () => {
    document.getElementById("Transion_page").classList.add("Transion_page3")
    document.getElementById('ThirdService_page').style.display ='block'
    document.getElementById("Element1").src = "../Services/Services_Elements/3_Section2.svg"
    document.getElementById("Element2").src = "../Services/Services_Elements/3_Section3.svg"


  }
  const Back_Page1 = (e) => {

    const Src = e.target.src ;
    if (Src.includes('2_Section1')) {
      document.getElementById("Transion_page").classList.remove("Transion_page")
      document.getElementById("Transion_page").classList.add("Back_page")
      
    } else {
      document.getElementById('ThirdService_page').style.display ='none'

      document.getElementById("Transion_page").classList.remove("Back_page")
      document.getElementById("Transion_page").classList.add("Transion_page")


      
      document.getElementById("Transion_page").classList.remove("Transion_page3")
    document.getElementById("Element1").src = "../Services/Services_Elements/2_Section1.svg"
    document.getElementById("Element2").src = "../Services/Services_Elements/2_Section2.svg"
    }
   
   
  }
  return (
    <div className='Services_Pages' id='Transion_page'>
      <NavBar />
      <div className='Services123'>

     
      <div className='FirstService_page'>
        <div className='FirstService_Images'>

          <Hajeat/>

          <img src='../Services/Services1/Haje.webp' alt='' className='Haje' />

        </div>
        <div className='FirstService_Body'>
          <div className='Services1_Elements'>

            <img  src='../Services/Services_Elements/1_Section1.svg' alt='' className='Element1' />

            <div></div>
            <div onClick={() => Transtion_Page2()}>
              <img src='../Services/Services_Elements/1_Section2.svg' alt='' className='Element2' />
            </div>

          </div>
            <p className='FirstService_p'>{t("Branding and Identity:")}</p>
            <FirstServiceFourInfo data={data}/>
         

          <div className='FirstService_text'>
            <h3 className='title'>{t("Branding and Identity:")}</h3>
            <p className='description'>{t("We help businesses build strong and memorable brand identities. Our team of talented designers and strategists will work closely with you to develop a unique brand identity that reflects your values, resonates with your target audience, and sets you apart from the competition. From logo design to brand guidelines, we will ensure your brand stands out in a crowded marketplace.")}</p>
            <h3 className='title'>{t("Graphic Design:")}</h3>
            <p className='description'>{t("Our creative designers have an eye for detail and a passion for creating visually stunning designs. Whether you need eye-catching brochures, engaging social media graphics, impactful packaging, or stunning print materials, we will bring your vision to life and create designs that leave a lasting impression.")}</p>
        </div>

        </div>

 
      </div>

      <div className='SecondService_page'>
        <div className='SecondService_Images'>
          <Girl/>
          <img src='../Services/Services2/Polygon_Right.png' alt='' className='Polygon_Right ' />

        </div>
        <div className='SecondService_Body'>
          <div className='Services2_Elements'>
            <div className='Elements_2_1'>
              <img src='../Services/Services_Elements/2_Section2.svg' alt='' id='Element2' className='Element2' />
              <img src='../Services/Services_Elements/2_Section1.svg'  alt='' id='Element1' className='Element1' onClick={(e) => Back_Page1(e)} />
            </div>
            
            <FirstServiceFourInfo data={data}/>


            <ServiceOverAll/>
            <div >
              <img src='../Services/Services_Elements/2_Section3.svg' alt='' className='Element3'onClick={() => Transtion_Page3()}  />

            </div>
       
          </div>

        </div>
      </div> 
        <ThirdPageService data={data2} />
        </div>  
        <ForthServicesPage data={data3}/>

        <Footer/>
    </div>
  )
}

export default FirstService