'use client'
import { QueryClient, QueryClientProvider } from 'react-query'
import i18n from '../../src/translate/Translate'
import '../Styles/App/Import.scss'
import CustomToastContainer from '../Utils/ToastifyContainer'
import Head from 'next/head'
import { useRouter } from 'next/navigation'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useEffect } from 'react'

export default function RootLayout({ children }) {



  const queryClient = new QueryClient()
  
  const route = useRouter();

  // useEffect(()=>{
  //   route.push('/NotFound')

  // },[])
  
  return (
    <html lang="en">
      <Head>
      <link rel='image_src' href='/LogoBlack.png' />
        <title>Qtrend Company</title>
        <meta 
        name='description' content='Protfolio that is my pesonal website with the best 
        animation skill that i show information about me and
        my skill , project  Nextjs ,tailiwndCss, frame-motion' />
        <meta name="keywords" content='Qtrend , Qtrend Company , Qtrend Services 
        , Company , qtrend Company ,Qtrend Website ,
        Website , Web Development Company , Qtrend For Web Development  , ' />
        <link rel="canonical" href={typeof window == "undefined"? "" : window.location.href} />
        <meta name="robots" content="index" />
        <meta name="author" content='Qtrend' />
        <link href={typeof window == "undefined"? "" : window.location.href} rel="publisher" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="black" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.9.2/css/flag-icons.min.css"
        />


      </Head>
      <QueryClientProvider client={queryClient}>
        <CustomToastContainer/>
      <body>{children}</body>
      </QueryClientProvider>
    </html>
  )
}
