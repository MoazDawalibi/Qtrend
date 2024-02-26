import React from 'react'

const FifthServiceSquare = ({classNameForSquare,title, desc,last,icon}) => {
  return (
  
    <div className={classNameForSquare} >
                <h1 className='square_title'>{title}</h1>
                <h2 className='square_desc'>{desc}</h2>
                <div className='square_last_sec'>
                <h3 className='square_more'>{last} </h3>
                <span className='square_icon'>{icon}</span>
                </div>
    </div>
  )
}

export default FifthServiceSquare