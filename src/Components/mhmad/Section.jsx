import React from 'react'
import { BaseURL } from '../../api/config'
import { TranslateObject } from '../../Utils/TranslateObject'
import { useTranslation } from 'react-i18next'


const Section = ({translations , image, is_odd, id}) => {
    const {i18n} = useTranslation();
    const {t} = useTranslation();
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    // width={900}
    // height={240}
    className='category_section_body'
    viewBox="0 0 1351 356"
  >
    <defs>
      <filter
        id="Rectangle_9625"
        x={0}
        y={26}
        width={1343}
        height={330}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy={11}  />
        <feGaussianBlur stdDeviation={13} result="blur" />
        <feFlood floodOpacity="0.251" />
        <feComposite operator="in" in2="blur" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter
        id="Rectangle_9626"
        x={860}
        y="12.157"
        width={491}
        height="342.843"
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy={4}  />
        <feGaussianBlur stdDeviation={15} result="blur-2" />
        <feFlood floodOpacity="0.102" />
        <feComposite operator="in" in2="blur-2" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <g id="Section" transform="translate(39 28.921)" className='category_section_body'>
      <g id="Group_237700" data-name="Group 237700">
        <g
          transform="matrix(1, 0, 0, 1, -39, -28.92)"
          filter="url(#Rectangle_9625)"
        >
          <rect
            id="Rectangle_9625-2"
            data-name="Rectangle 9625"
            width={1265}
            height={252}
            rx={8}
            transform="translate(39 54)"
            fill={is_odd ? "black" : "white"}
            />
        </g>
        <g
          transform="matrix(1, 0, 0, 1, -39, -28.92)"
          filter="url(#Rectangle_9626)"
        >
          <path
            id="Rectangle_9626-2"
            data-name="Rectangle 9626"
            d="M0,0H401V252.843L0,82.789Z"
            transform="translate(905 53.16)"
            fill="#c4fd14"
          />
        </g>
        <image
          id="image"
          width={194}
          height={219}
          transform="translate(1066 -28.921)"
          xlinkHref={BaseURL +image}
        />
      </g>
      <text
        id="ADVERTISING_PRODUCTS"
        data-name="ADVERTISING PRODUCTS"
        transform="translate(45 60.631)"
        fontSize={54}
        fontFamily="Poppins-Black, Poppins"
        fontWeight={800}
        fill={!is_odd ? "black" : "white"}
      >
        <tspan x={0} y={57} style={{fontFamily:"BPoppins"}}>
        {TranslateObject(translations ,i18n?.language , 'name' )}


        </tspan>
      </text>
      <text
        id="Top_quality_paper_prints_in_Qatar"
        data-name="Top quality paper prints in Qatar"
        transform="translate(45 132.205)"
        fontSize={34}
        fontFamily="Poppins-Regular, Poppins"
        fill={!is_odd ? "black" : "white"}
      >
        <tspan x={0} y={36}>
            {TranslateObject(translations ,i18n?.language , 'description' )}
          </tspan>
      </text>
      <g id="View_All" data-name="View All" transform="translate(45 212.079)">
        <rect
          id="Rectangle_9627"
          data-name="Rectangle 9627"
          width={124}
          height={38}
          rx={12}
          fill={!is_odd ? "#060606" : "white"}
        />
        <text
          id="ALL"
          transform="translate(0 4.96)"
          // fill="#fff"
          fontSize={20}
          fontFamily="Poppins-Black, Poppins"
          fontWeight={800}
          fill={!is_odd ? "white" : "black"}
        >
          <tspan x="40" y={21} xmlSpace="preserve">
            {" "}
            {t("ALL")}
          </tspan>
        </text>
      </g>
    </g>
  </svg>
  
    )
}

export default Section