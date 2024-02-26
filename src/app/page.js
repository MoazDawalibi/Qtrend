'use client'
import { useTranslation } from 'react-i18next';
import { Home4, Home5, Home2, Footer, Home1 } from '../Components/Home/index'
import {useGetAllSocialMedia} from '../api/social_media'
import CheckInternetComponent from '../Components/internet/ChckInternetComponent'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
const Page = () => {
  const [t] = useTranslation();
  const {data} = useGetAllSocialMedia()

  const [isOffline , setIsOffline] = useState(false) 
  const route = useRouter();

  // useEffect(()=>{

  //   route.push('/NotFound')
  // },[])

  //  useEffect(()=>{


  //    window.addEventListener('offline', function () {
  //      return setIsOffline(true);
  //   });

  //    window.addEventListener('online', function () {
  //     return setIsOffline(false);
  //  });
  // });

  if(isOffline) return "You Are Offline PLease Connect in the internet "
 
  return (
    <div className='HOME_PAGE'>
      <CheckInternetComponent />
      <Home1 t={t}/>
      <Home2 t={t} data={data}/>
      <Home4 t={t}/>
      <Home5 t={t}/>
      <Footer t={t} data={data} />
    </div>

  )
}

export default Page