'use client'
import { NavLinks } from '../../config/NavBarConfig'
import Link from 'next/link'
import React, { useRef } from 'react'
import Logo from './Logo'
import BtnTranslate from './BtnTranslate'
import { useTranslation } from 'react-i18next'
import MenuService from '../../Components/ui/Menu'
import useHover from '../../hooks/useHover'
function NavBar() {
  const [t] = useTranslation();
  const ref  = useRef()
  const { isHovered ,handleMouseEnter , handleMouseLeave} = useHover()
  return (
    <div className={`NavBar`}>
          <Logo />
          <div className='Links'>
            <div className='In_Link' ref={ref} > 
            
             
                <Link  href={'/'}  >{t('HOME')}</Link>
                <Link  href={'/services?param=1'}  onMouseEnter={()=>handleMouseEnter()} >{t('OUR SERVICES')}</Link>
                <Link href={'/Print'}  >{t("PRINTS")}</Link> 
                <Link  href={'/works'}  >{t("OUR WORKS")}</Link>

                {
                  isHovered &&
                  <MenuService handleMouseLeave={handleMouseLeave}  t={t}/>
                }
                <Link  href={'/about_us'}  >{t('ABOUT US')}</Link>
                <Link  href={'meet_us'}  >{t('MEET US')}</Link>

          
            </div>
           
            <BtnTranslate/>
          </div>

        </div>
  )
}

export default NavBar