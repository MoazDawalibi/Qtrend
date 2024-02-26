'use client'
import React, { FC, ReactNode, useRef } from 'react'
import Card from './Card'
import  {AiOutlineTwitter ,AiOutlineInstagram} from 'react-icons/ai'
import {FaTiktok ,FaSnapchatGhost} from 'react-icons/fa'


function SixComponent({div , handelDrag}):ReactNode{
  // const handelDrag:()=>void = ()=> {

  //   let myDiv =   document.getElementById('divtotransform')
  // myDiv.classList.add('transformToTop')
  //   setTimeout(()=>{
  //     myDiv.classList.add('AddDisplayNone')
  //   },2200)
  //       console.log('Div Has Been Drag')
  // }
  return (
    <div className='six-component' onDrag={(handelDrag)} id={`divtotransform`} ref={div}>
        
        <Card  Icon={FaSnapchatGhost} text={`If you are looking for a third-party account verification service that specializes in verifying social media accounts, there are various companies and services available. These services are typically used by businesses, influencers, or individuals 
        who want to establish credibility and trust by verifying their social media accounts.`}  />
        <Card Icon={AiOutlineInstagram} text={`If you are looking for a third-party account verification service that specializes in verifying social media accounts, there are various companies and services available. These services are typically used by businesses, influencers, or individuals
         who want to establish credibility and trust by verifying their social media accounts.`}  dir={'row-reverse'}/>
           <Card Icon={FaTiktok} text={`If you are looking for a third-party account verification service that specializes in verifying social media accounts, there are various companies and services available. These services are typically used by businesses, influencers, or individuals
         who want to establish credibility and trust by verifying their social media accounts.`} />
    </div>
  )
}

export default SixComponent



