import React from 'react'
import Home3_Sections from './Home3_Sections'

const Home4 = ({t}) => {
  const Data1=
    {
      src: `../Home/4/Home4_Image/production.gif`,
      h1: "How to learn Javascript by yourself",
      p: "Ac aliquet vitae sem quis turpis neque. Nec ut urna consectetur vitae nunc sed elit lacus."
    }
  const Data2 = 

    {
      src: `../Home/4/Home4_Image/Home3_Image2.png`,
      h1: "10 important design tips for absolute beginners",
      p: "Ac aliquet vitae sem quis turpis neque. Nec ut urna consectetur vitae nunc sed elit lacus."
    }
  
  const Data3 = 

    {
      src: `../Home/4/Home4_Image/video.gif`,
      h1: "How can you re-use any source code in  your projects",
      p: "Ac aliquet vitae sem quis turpis neque. Nec ut urna consectetur vitae nunc sed elit lacus."
    }
  
  return (

    <div className='Home3'>
      <div className='Home3_Left'>
        <Home3_Sections t={t} src={Data1.src} h1={Data1.h1} p={Data1.p} />
        <Home3_Sections t={t} src={Data2.src} h1={Data2.h1} p={Data2.p} />

      </div>
      <div className='Home3_Right'>
        <Home3_Sections t={t} src={Data3.src} h1={Data3.h1} p={Data3.p} />

      </div>

    </div>
  )
}

export default Home4