'use client'
import React from 'react'
import NavBar from '../Utils/NavBar'
import Home_BG from './Home_BG'
import {useRouter} from 'next/navigation'
const Home1 = ({t}) => {
  const navigate   = useRouter()
  return (
    <div className='Home'>
    <NavBar />
    <h2 className='HomeCenter_h'>{t("We Boost Businesses Success")}</h2>
    <button className='HomeCenter_button' onClick={()=>navigate.replace('meet_us')}>{t("Lets get in touch!")}</button>
    <Home_BG/>

  </div>
  )
}

export default Home1