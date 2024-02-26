import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function useGetFromLocalStorage(key , initvalue=[]) {
    const [value , setValue] = useState(initvalue)
    
    useEffect(()=>{
        setValue(localStorage.getItem(key))
    },[key])
  return (
     value
    )
}

export default useGetFromLocalStorage