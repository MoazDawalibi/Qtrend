'use client'
import React, { ReactNode } from 'react'

function ThirdComponent():ReactNode {
  const handleDragStart = () => {
    const myEle = document.getElementById('third-part')
    const nextEle  = document.getElementById('four-part')
    myEle.classList.add('transformToTop');
    setTimeout(() => {
      myEle.style.display='none'
    }, 2200);
    nextEle.classList.add('AddDisplayBlock');
    // nextEle.classList.add('transformToTop');

  };


  return (
    <div className='page-six-service-drag  AddDisplayNone' onDrag={handleDragStart} draggable  id='third-part'>ThirdComponent</div>
  )
}

export default ThirdComponent