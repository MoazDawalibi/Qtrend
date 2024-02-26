'use client'
import React, { useState } from 'react'
import Drage_Bg from './Drage_Bg'
import NavBar6 from '../../Components/Services6/NavBar6'
import { Footer } from '../../Components/Home'
import { useGetSixthService } from '../../api/service/first_services'
import { DragImages } from './DragImages'

const Page = () => {
  const [ClassName, setClassName] = useState("")
  const handleDragStart = (e) => {
    console.log(e);
    setClassName(e) 
    if(e==1){setClassName("T6_1")}
    if(e==2){setClassName("T6_1 T6_2")}
    if(e==3){setClassName("T6_1 T6_2 T6_3")}
    if(e==4){setClassName("T6_1 T6_2 T6_3 T6_4")}
    if(e==5){setClassName("T6_1 T6_2 T6_3 T6_4 T6_5")}
    if(e==6){setClassName("T6_1 T6_2 T6_3 T6_4 T6_5 T6_6")}
  };
  const { data, isLoading} = useGetSixthService();
  console.log(data);

  return (
    <div className={` Drag_Pages ${ClassName}`}>
         <NavBar6 />
      <Drage_Bg data={data}/>
      <div className='Drag_Down_1' onDrag={()=>handleDragStart(1)} draggable />
      <div className='Drag_Down_2' onDrag={()=>handleDragStart(2)} draggable />
      <div className='Drag_Down_3' onDrag={()=>handleDragStart(3)} draggable />
      <div className='Drag_Down_4' onDrag={()=>handleDragStart(4)} draggable />
      <div className='Drag_Down_5' onDrag={()=>handleDragStart(5)} draggable />
      <div className='Drag_Down_6' onDrag={()=>handleDragStart(6)} draggable />
      {/* <div className='Drag_Up_1' onDrag={()=>handleDragStart(1)} draggable /> */}
      <div className='Drag_Up_2' onDrag={()=>handleDragStart(0)} draggable />
      <div className='Drag_Up_3' onDrag={()=>handleDragStart(1)} draggable />
      <div className='Drag_Up_4' onDrag={()=>handleDragStart(2)} draggable />
      <div className='Drag_Up_5' onDrag={()=>handleDragStart(3)} draggable />
      <div className='Drag_Up_6' onDrag={()=>handleDragStart(4)} draggable />
<Footer/>

    </div>
  )
}

export default Page