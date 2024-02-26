"use client"

import NavBar from "../../Components/Utils/NavBar";
import Image from "next/image";
import React from "react";
import Footer from "../../Components/Utils/Footer";
import { useTranslation } from "react-i18next";
import {useGetAllOurWorks} from '../../api/our_work'
import LoadingPage from "../loading";
import { BaseURLImage } from "../../api/config";
function Works() {
  const [t] = useTranslation()

  const {data, isLoading}  = useGetAllOurWorks()

  console.log(data)
  const images = data?.at(0)?.images || []

  if(isLoading) return <LoadingPage/>
  return (
    <>
    
    <div className="work_page">
      <NavBar />
      {/* <img className="works_img" src="../Works/Works_BG.jpg" alt=""/> */}
      <img className="works_img" src="../works/OurWorks.webp" alt=""/>
      {/* <div className="OUR_PROJECTS">
        <p className="OUR">{t("OUR")}</p>
        <p className="PROJECTS">{t("PROJECTS")}</p>
      </div> */}
      <div className="text_works">
        <p className="text_first">{t("OverAll")}</p>
        <p className="text_second">
         {t("Extend Your Market Reach by Establishing a Distinct")}<br/>
          {t("Brand Identity and Creating Appealing Marketing")} <br/> {t(" Content")}
          </p>  
          <p className="text_third">
            {t("Engage a Larger Customer Base with a Compelling Brand Identity and aCollection of ")}
            <br/>{t("Visually Striking Marketing Material s.Reach a Broader Customer Segment by Crafting a")}
            <br/>{t(" Standout Brand Identity and Compelling Visual Marketing Materials")}
          </p>
      </div>

      <div className="works_img" >

        <div className="img_first">
          
          {
              images?.at(0) &&
              <div className="img1">
              <img src={BaseURLImage + images?.at(0)?.path} alt=""/>
            </div>
          }
            {
              images?.at(1) &&
              <div className="img1">
              <img src={BaseURLImage + images?.at(1)?.path} alt=""/>
            </div>
          }
       
      
        </div>
        <div className="img_second">
        {
              images?.at(2) &&
              <div className="img1">
              <img src={BaseURLImage + images?.at(2)?.path} alt=""/>
            </div>
          }
            {
              images?.at(3) &&
              <div className="img1">
              <img src={BaseURLImage + images?.at(3)?.path} alt=""/>
            </div>
          }
            {
              images?.at(4) &&
              <div className="img1">
              <img src={BaseURLImage + images?.at(4)?.path} alt=""/>
            </div>
          }

          </div>
          
      </div>

      <Footer/>
    </div>
    

</>

  );
}

export default Works;
