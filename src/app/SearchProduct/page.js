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
import { useGetAllProductForCategory, useGetAllProductWithSearch } from '../../api/category';
import { useTranslation } from 'react-i18next';
import { TranslateObject } from '../../Utils/TranslateObject';

function PrintCategory() {
  // Get the 'category_id' parameter from the URL
  const keySearch = useSearchParams().get('search');

  // Fetch data for the specified category
  const { data } = useGetAllProductWithSearch({ search_keyword: keySearch });

  
  console.log(data);// const data  = []
  // Extract product data from the fetched data
  
  // Get the current window width
  const width = useGetWidth();

  // Determine the number of products per page based on window width
  const per_page = width < 500 ? 2 : width < 800 ? 2 :width <950 ? 3: 4;

  return (
    <div className='main_page'>
      {/* Display the top header */}
      <TopHeader/>
      {/* Display the navigation bar */}
      <PrintNavBar />
      <div className='category-product-page'>
        <div className='header-category-product-page'>
          <div className='left'>
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
      </div>
      <div className='category_product'>
        {
          // Map and display product containers
          data?.map((product, index) => (
            <ProductCategoryContainer
              color={'#1995ca'}
              key={index}
              products={data?.slice(index * per_page, index * per_page + per_page)}
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
