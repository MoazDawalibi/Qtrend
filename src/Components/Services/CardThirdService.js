import React from 'react'

function CardThirdService({title , description , style , classNameForDescription, id}) {
  return (
    <div className='second-row-third-service' style={style} id={id}>
    <h2>{title}</h2>
    <p className={classNameForDescription}>
    {description}
      
    </p> 
</div>
  )
}

export default CardThirdService