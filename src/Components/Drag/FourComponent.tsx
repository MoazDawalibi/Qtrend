import React, { ReactNode } from 'react'

function FourComponent():ReactNode {
  const handleDragStart = () => {
    const myEle = document.getElementById('four-part')
    const nextEle  = document.getElementById('fifth-part')
    myEle.classList.add('transformToTop');
    setTimeout(() => {
      myEle.style.display='none'
    }, 2200);
    nextEle.classList.add('AddDisplayBlock');
  };


  return (
    <div className='page-six-service-drag AddDisplayNone' onDrag={handleDragStart} draggable  id='four-part'>FOurComponent</div>
  )
}

export default FourComponent