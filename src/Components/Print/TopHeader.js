import React from 'react'
import {LuMail} from 'react-icons/lu'
import{FaMobileAlt}from 'react-icons/fa'
import { useGetALlStatics } from '../../api/ContactUs/Contact';
import NavBar3 from '../../Components/Utils/NavBar3'
import { DATASOCIALMEDIA } from '../../config/SOCIALMEDIA';
import { useGetAllSocialMedia } from '../../api/social_media';
import { useTranslation } from 'react-i18next';
function TopHeader() {
    const {data  , isError}  = useGetALlStatics()
    const {data2} = useGetAllSocialMedia()
    const [t] = useTranslation();
  return (
    <>
    <div className='HEADER'>
     <div className='header_container'>
        <div className='header_left'>
            <div className='Print_info_1'>
              <FaMobileAlt/>
            <p className='NUM'>
              {data?.find(static_info => static_info.key == 'phone')?.value}
              </p>
            </div>
            <div className='Print_info_2'>
            <LuMail/>
            <p className='EMAIL'>
            {data?.find(static_info => static_info.key == 'email')?.value}
            </p>
            </div>
          </div>

          <div className='header_right'>
            <div className='print_info_3'>
             {
                DATASOCIALMEDIA.map((icon ,index) =>{
                  const object_is_exist = data2?.find(social => social.icon == icon.key)
                  return (    
                          <a href={object_is_exist?.link} target='_blank' className='btn  btn-lg btn-floating' key={index} style={{marginLeft:"5px"}} >
                            {icon.icon}
                          </a>
                    )
                  }
                )
              }
            </div>
          </div>
        </div>
    </div>
        <NavBar3/>
    </>
  )
}

export default TopHeader