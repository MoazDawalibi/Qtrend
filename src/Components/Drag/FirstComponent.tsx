'use client'
import React, { ReactNode } from 'react'

function FirstComponent():ReactNode {

  const handleDragStart = () => {
    const myEle = document.getElementById('first-part')
    const nextEle  = document.getElementById('second-part')
    myEle.classList.add('transformToTop');
    setTimeout(() => {
      myEle.classList.add('AddDisplayNone');
    }, 2200);
    nextEle.classList.add('AddDisplayBlock');
  };

  
  return (
    <div className='page-six-service-drag ' onDrag={handleDragStart} draggable  id='first-part'>FirstComponent</div>
  )
}

export default FirstComponent