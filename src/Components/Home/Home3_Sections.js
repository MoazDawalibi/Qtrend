import React from 'react'
const Home3_Sections = ({src,h1,p,t}) => {
  return (
    <div className='Home3_Sections'>
        <div className='Image_Wraper'>
        <img src={src} alt='' height={300} width={300} />

        </div>
        <h1>{t(h1)}</h1>
        <p>
          {t(p)}
        </p>
        <a>{t("Read more")}</a>
    </div>
  )
}

export default Home3_Sections