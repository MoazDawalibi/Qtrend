'use client'

import React, { ReactNode } from 'react'

function SecondComponent():ReactNode {
  const handleDragStart = () => {
    const myEle = document.getElementById('second-part')
    const nextEle  = document.getElementById('third-part')
    myEle.classList.add('transformToTop');
    setTimeout(() => {

      myEle.style.display='none'
    }, 2200);
    nextEle.classList.add('AddDisplayBlock');
  };


  return (
    <div className='page-six-service-drag AddDisplayNone' onDrag={handleDragStart} draggable  id='second-part'>SecondComponent</div>
  )
}

export default SecondComponent