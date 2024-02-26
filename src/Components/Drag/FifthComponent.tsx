'use client'
import React, { ReactNode } from 'react'

function FifthComponent({handelDrag , div}):ReactNode {
 
  const handleDragStart = () => {
    const myEle = document.getElementById('fifth-part')
    const nextEle  = document.getElementById('six-part')
    myEle.classList.add('transformToTop');
    
    setTimeout(() => {
      myEle.style.display='none'
    }, 2200);
    nextEle.classList.add('AddDisplayBlock');

  };


  return (
    <div className='page-six-service-drag AddDisplayNone' onDrag={handleDragStart} draggable  id='fifth-part'>FifthComponent</div>
  )
}

export default FifthComponent