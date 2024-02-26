'use client'
import { NavLinks } from '../..//config/NavBarConfig'
import Link from 'next/link'
import React from 'react'
import Logo6 from './Logo6'
import BtnTranslate from '../Utils/BtnTranslate'
import { useTranslation } from 'react-i18next'
import MenuService from '../ui/Menu'
import useHover from '../../hooks/useHover'

function NavBar6() {
  const [t] = useTranslation()
  const { isHovered ,handleMouseEnter , handleMouseLeave} = useHover()

  return (
    <div className={`NavBar NavBar6`}>
          <Logo6 />
          <div className='Links'>
            <div className='In_Link'> 
            <Link  href={'/'}  >{t('HOME')}</Link>
                <Link  href={'/services?param=1'}  onMouseEnter={()=>handleMouseEnter()} >{t('OUR SERVICES')}</Link>
               
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

export default NavBar6