import React from 'react'

function ShopIconCartBackGround() {
  return (
    <svg
    className='shop_icon_cart_back_ground'
    xmlns="http://www.w3.org/2000/svg"
    width={175}
    height={80}
    viewBox="0 0 209 108"
    fill="none"

  >
    <g filter="url(#filter0_d_6_7063)">
      <path
        d="M187.417 10.1C192.331 10.1 195.801 14.9129 194.248 19.5747L172.371 85.2747C171.392 88.2158 168.64 90.2 165.54 90.2L21.5745 90.2C14.5138 90.2 11.6719 81.0938 17.4794 77.078L112.49 11.378C113.693 10.5458 115.122 10.1 116.585 10.1L187.417 10.1Z"
        fill="#C4FD14"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_6_7063"
        x="0.86084"
        y="0.199975"
        width="207.262"
        height="107.1"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="3.6" />
        <feGaussianBlur stdDeviation="6.75" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_6_7063"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_6_7063"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
  
  )
}

export default ShopIconCartBackGround