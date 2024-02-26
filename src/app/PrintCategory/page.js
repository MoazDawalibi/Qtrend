'use client'
// Import necessary modules and components
import React, { useTransition } from 'react';
import TopHeader from '../../Components/Print/TopHeader';
import PrintNavBar from '../../Components/Print/PrintNavBar';
import CircleServiceFifth from '../../Components/Services/CircleServiceFifth';
import CategorySlider from '../../Components/Print/CategorySlider';
import ProductCategoryContainer from '../../Components/Print/ProductCategoryContainer';
import Section from '../../Components/mhmad/Section';
import { Footer } from '../../Components/Home';
import CopyRight from '../../Components/Utils/CopyRight';
import useGetWidth from '../../hooks/useGetWidth';
import Refreash from '../../Components/Print/Refrech';
import { useParams, useSearchParams } from 'next/navigation';
import { useGetAllProductForCategory } from '../../api/category';
import { useTranslation } from 'react-i18next';
import { TranslateObject } from '../../Utils/TranslateObject';
import LoadingPage from '../loading'

function PrintCategory() {
  // Get the 'category_id' parameter from the URL
  const category_id = useSearchParams().get('category_id');
  const category_index = useSearchParams().get('index');

  // Fetch data for the specified category
  const { data , isLoading } = useGetAllProductForCategory({ category_id: category_id });

  // Extract product data from the fetched data
  const product = data?.products;

  // Get the current window width
  const width = useGetWidth();

  // Determine the number of products per page based on window width
  const per_page = width < 500 ? 2 : width < 800 ? 2 :width <950 ? 3: 4;
  console.log(data?.translations);
  const [i18n] = useTranslation()
  // const {i} = useTransition()
  if(isLoading) return <LoadingPage/>

  return (
    <div className='main_page'>
      {/* Display the top header */}
      <TopHeader/>
      {/* Display the navigation bar */}
      <PrintNavBar />
      <div className='category-product-page'>
        <div className='header-category-product-page'>
          <div className='left1'>
            {/* Display a refresh button */}
            <Refreash />
          </div>
          <div className='center'>
            {/* Display a category slider */}
            <CategorySlider />
          </div>
          <div className='left' style={{ opacity: '0' }}>
            {/* Display another refresh button */}
            <Refreash />
          </div>
        </div>
        {/* Display a section with category information */}
        <Section  image={data?.category_image} translations={data?.translations} is_odd={category_index %2 ==1}/>
      </div>
      <div className='category_product'>
        {
          // Map and display product containers
          product?.map((row, index) => (
            <ProductCategoryContainer
              color={data?.background_color}
              key={index}
              products={product?.slice(index * per_page, index * per_page + per_page)}
              index={index}
            />
          ))
        }
      </div>
      {/* Display the footer */}
      <Footer />
      {/* Display the copyright information */}
      <CopyRight />
    </div>
  );
}

export default PrintCategory;
