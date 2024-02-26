'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import {FiMail} from 'react-icons/fi'
import {MdOutlineShoppingBag, MdKeyboardArrowDown} from 'react-icons/md'
import { useGetAllCategory } from '../../api/category'
import useManageCart from '../../zustand/cart'
import { useTranslation } from 'react-i18next'
import { TranslateObject } from '../../Utils/TranslateObject'
import { useRouter } from 'next/navigation';

const PrintNavBar = () => {
    const {data} = useGetAllCategory()
    const {cart} = useManageCart()
    const [length , setLength] = useState(0)
    const [t  ] = useTranslation()
    const {i18n}  = useTranslation()
    const route = useRouter();
  //   function onClickCategory(id) {
  //     document.getElementById('CatLink'+id).style.cssText = 'fontWeight:700; color: #B0D04F; transform: scale(1.25);';
  // }
    useEffect(()=>(
      setLength(cart?.length)
    ),[cart])
    return (
    <div className='PrintNavBar'>
        <div className='print_links'>
            <div><Link className='Link LinkAll' href={'/Print'}>{t("ALL PRINTS")}</Link></div>
            <div className='middle'>
            {
                data?.category?.map((nav , index) =>(
                    <div className='link_with_arrow' key={nav.id}>
                      <Link 
                      // id={'CatLink'+nav.id} onClick={()=>onClickCategory(nav.id)}
                       className='Link'  href={'/PrintCategory?category_id='+nav.id+"&index="+(index)}>
                        {TranslateObject(nav?.translations ,i18n.language , 'name' )} 
                        <MdKeyboardArrowDown/>
                      </Link>
                   </div>
                ))
            }
            </div>
        
        </div>
        <div className='print_icons' style={{zIndex:"0"}} onClick={()=> route.push('/MyCart')}>
            <span className='notifictaion_circle'>{length || 0}</span>
            {/* <Link> */}
                     <MdOutlineShoppingBag className='icon_cart'/>
            {/* </Link> */}
       
        </div>
    </div>
  )
}

export default PrintNavBar