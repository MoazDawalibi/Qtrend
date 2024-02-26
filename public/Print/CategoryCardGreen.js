import React from 'react'

const CategoryCardGreen = () => {
  return (
    <svg
    className='CategoryCardGreen'
    xmlns="http://www.w3.org/2000/svg"
    width={203}
    height={338}
    viewBox="0 0 203 338"
    fill="none"
    >
    <g filter="url(#filter0_d_6_6732)">
        <path
        d="M15 19.2422C15 14.0389 19.8889 10.2202 24.9373 11.4803L181.937 50.6669C185.5 51.5561 188 54.7567 188 58.4287V310.53C188 317.814 179.059 321.308 174.12 315.955L17.12 145.773C15.7569 144.296 15 142.359 15 140.349V19.2422Z"
        fill="#C4FD14"
        />
    </g>
    <defs>
        <filter
        id="filter0_d_6_6732"
        x={0}
        y="0.238281"
        width={203}
        height="337.308"
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
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation="7.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        />
        <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_6_6732"
        />
        <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_6_6732"
            result="shape"
        />
        </filter>
    </defs>
    </svg>
  )
}

export default CategoryCardGreen