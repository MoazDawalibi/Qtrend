"use client"
import React, { useEffect, useState } from 'react';
import TopHeader from '../../Components/Print/TopHeader';
import PrintNavBar from '../../Components/Print/PrintNavBar';
import { useGetAllCategory } from '../../api/category';
import CategorySection from '../../Components/Print/CategorySection';
import PrintLastSection from '../../Components/Print/PrintLastSection';
import Footer from '../../Components/Utils/Footer';
import CopyRight from '../../Components/Utils/CopyRight';
import CategoryHomeSectionWithProduct from '../../Components/Print/CategoryHomeSectionWIthProduct';
import useGetWidth from '../../hooks/useGetWidth';
import { useTranslation } from 'react-i18next';
import LoadingPage from '../loading'
import BGPrint from '../../Components/Print/BGPrint';
const Page = () => {
  const [categoryData, setCategoryData] = useState([]);
  const width = useGetWidth();
  const perPage = width < 500 ?  2 : width< 810 ? 1 : width < 1150 ? 2 : 3;
  
  const {t} = useTranslation()
  const { data: categoryApiResponse, error: categoryApiError , isLoading } = useGetAllCategory();
  useEffect(() => {
    if (categoryApiError) {
      console.error(categoryApiError);
      // Handle error here, e.g., show an error message to the user
    } else if (categoryApiResponse) {
      setCategoryData(categoryApiResponse.category);
    }
  }, [categoryApiResponse, categoryApiError]);

  if(isLoading) return <LoadingPage/>

  return (
    <div className='print_page'>
      <TopHeader />
      <PrintNavBar />
      <div className='home_section'>
        <div className='home_second'>
          <div className='home_second_left'>
            <p className='frist_p'>{t("WE OFFER TOP")}</p>
            <p className='second_p'>{t('PRINTING SERVICES')}</p>
            <p className='third_p'>{t('AFFORDABLE RATES FOR QUALITY PRINTS WITH PROFESSIONAL RESULTS.')}</p>
            <button className='request_button' >{t("REQUEST NOW")}</button>
          </div>
          <div className='home_second_right' style={{ zIndex: 0 }}>
            {/* <img src='/Print/Prints.png' alt='Print Services' /> */}
            <BGPrint/>
          </div>
        </div>
      </div>
      <div className='category_product'>
        {categoryData.map((category, index) => (
          <CategoryHomeSectionWithProduct
            key={index}
            color={category.background_color}
            products={category.products}
            index={index}
            perPage={perPage}
            category={category}
          />
        ))}
      </div>
      <PrintLastSection />
      <Footer />
      <CopyRight />
    </div>
  );
};

export default Page;
