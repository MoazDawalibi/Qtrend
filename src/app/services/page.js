'use client'
import React from 'react'
import FirstService from './Service'
import { useGetFirstService, useGetFourthService, useGetThirdService } from '../../api/service/first_services'
import LoadingPage from '../loading'



 function  Page() {
  

  
    const {data , isLoading}  = useGetFirstService()  
    const {data:data2 , isLoading:Loading}  = useGetThirdService()  
    const {data:data3 , isLoading:Loading2}  = useGetFourthService()  


      if(isLoading || Loading || Loading2){
        return <LoadingPage />
      }
  return (
    
    <FirstService data={data}  data2={data2}  data3={data3} />
  )
}

export default Page