import React, { ReactNode } from 'react'
import {IconType} from 'react-icons'
interface CardProps {
    Icon:IconType ,
    text:string,
    dir?:any
} 

function Card({Icon , text  ,dir="row"}: CardProps):ReactNode {
  return (
    <div className='six-part-card' style={{flexDirection:dir}}>
        <div className='icon-container'>
            <Icon className='icon'/>
        </div>
        <p>
            {text}
        </p>
    </div>
  )
}

export default Card