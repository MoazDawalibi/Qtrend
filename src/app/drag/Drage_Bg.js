"use client"
import React from 'react'
import { useTranslation } from 'react-i18next'
import { BaseURLImage } from '../../api/config'

const Drage_Bg = ({data}) => {
  const [t] = useTranslation()
  return (
    <svg
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  width={1440}
  height={4500}
  viewBox="0 0 1440 4500"
  className='Drage_Bg'
>
  <defs>
    <pattern
      id="patternDrage_Bg"
      preserveAspectRatio="xMidYMid slice"
      width="100%"
      height="100%"
      viewBox="0 0 4096 2731"
    >
      <image
        width={4096}
        height={2731}
        xlinkHref="../Drag/Artboard%20-%202-image.webp"
      />
    </pattern>
    <filter
      id="BLOGGERS"
      x={920}
      y={188}
      width={299}
      height={101}
      filterUnits="userSpaceOnUse"
    >
      <feOffset dy={4} input="SourceAlpha" />
      <feGaussianBlur stdDeviation={4} result="blur" />
      <feFlood floodOpacity="0.251" />
      <feComposite operator="in" in2="blur" />
      <feComposite in="SourceGraphic" />
    </filter>
    <filter
      id="Rectangle_Black"
      x={-46}
      y={960}
      width={1498}
      height={468}
      filterUnits="userSpaceOnUse"
    >
      <feOffset dy={21} input="SourceAlpha" />
      <feGaussianBlur stdDeviation={14} result="blur-2" />
      <feFlood floodOpacity="0.251" />
      <feComposite operator="in" in2="blur-2" />
      <feComposite in="SourceGraphic" />
    </filter>
    <clipPath id="clip-path">
      <rect
        id="Rectangle_9586"
        data-name="Rectangle 9586"
        width={368}
        height={348}
        rx={50}
        transform="translate(937 101)"
        fill="#fff"
      />
    </clipPath>
    <pattern
      id="patternDrage_Bg-3"
      preserveAspectRatio="xMidYMid slice"
      width="100%"
      height="100%"
      viewBox="0 0 3465 2500"
    >
      <image
        width={3465}  
      
        height={2500}
        
        xlinkHref={BaseURLImage +data?.at(0)?.images.at(0)?.path}
      />
    </pattern>
    <filter
      id="Maria"
      x={916}
      y={1255}
      width={384}
      height={91}
      filterUnits="userSpaceOnUse"
    >
      <feOffset dy={4} input="SourceAlpha" />
      <feGaussianBlur stdDeviation={4} result="blur-3" />
      <feFlood floodOpacity="0.51" />
      <feComposite operator="in" in2="blur-3" />
      <feComposite in="SourceGraphic" />
    </filter>
    <clipPath id="clip-path-2">
      <rect
        id="Rectangle_9585"
        data-name="Rectangle 9585"
        width={368}
        height={348}
        rx={50}
        transform="translate(537 101)"
        fill="#fff"
      />
    </clipPath>
    <pattern
      id="patternDrage_Bg-4"
      preserveAspectRatio="xMidYMid slice"
      width="100%"
      height="100%"
      viewBox="0 0 4096 2731"
    >
      <image
        width={4096}
        height={2731}
        xlinkHref={BaseURLImage +data?.at(0)?.images.at(1)?.path}
      />
    </pattern>
    <filter
      id="Nada"
      x={516}
      y={1255}
      width={384}
      height={91}
      filterUnits="userSpaceOnUse"
    >
      <feOffset dy={4} input="SourceAlpha" />
      <feGaussianBlur stdDeviation={4} result="blur-4" />
      <feFlood floodOpacity="0.51" />
      <feComposite operator="in" in2="blur-4" />
      <feComposite in="SourceGraphic" />
    </filter>
    <clipPath id="clip-path-3">
      <rect
        id="Rectangle_9584"
        data-name="Rectangle 9584"
        width={368}
        height={348}
        rx={50}
        transform="translate(135 101)"
        fill="#fff"
      />
    </clipPath>
    <pattern
      id="patternDrage_Bg-5"
      preserveAspectRatio="xMidYMid slice"
      width="100%"
      height="100%"
      viewBox="0 0 4096 2731"
    >
      <image
        width={4096}
        height={2731}
        xlinkHref={BaseURLImage +data?.at(0)?.images.at(2)?.path}
      />
    </pattern>
    <filter
      id="Aicha"
      x={102}
      y={1255}
      width={388}
      height={91}
      filterUnits="userSpaceOnUse"
    >
      <feOffset dy={4} input="SourceAlpha" />
      <feGaussianBlur stdDeviation={4} result="blur-5" />
      <feFlood floodOpacity="0.51" />
      <feComposite operator="in" in2="blur-5" />
      <feComposite in="SourceGraphic" />
    </filter>
    <filter
      id="Rectangle_Black4"
      x="107.264"
      y="1922.964"
      width="1226.523"
      height="393.2"
      filterUnits="userSpaceOnUse"
    >
      <feOffset dy="20.226" input="SourceAlpha" />
      <feGaussianBlur stdDeviation="13.754" result="blur-6" />
      <feFlood floodOpacity="0.169" />
      <feComposite operator="in" in2="blur-6" />
      <feComposite in="SourceGraphic" />
    </filter>
    <clipPath id="clip-path-4">
      <rect
        id="Rectangle_9586-2"
        data-name="Rectangle 9586"
        width="297.731"
        height="281.55"
        rx="40.453"
        transform="translate(895.564 159.372)"
        fill="#fff"
      />
    </clipPath>
    <pattern
      id="patternDrage_Bg-6"
      preserveAspectRatio="xMidYMid slice"
      width="100%"
      height="100%"
      viewBox="0 0 4096 2734"
    >
      <image
        width={4096}
        height={2734}
        xlinkHref={BaseURLImage +data?.at(1)?.images.at(0)?.path}
      />
    </pattern>
    <filter
      id="Saad"
      x="891.854"
      y="2164.917"
      width="312.418"
      height="73.417"
      filterUnits="userSpaceOnUse"
    >
      <feOffset dy="3.236" input="SourceAlpha" />
      <feGaussianBlur stdDeviation="3.236" result="blur-7" />
      <feFlood floodOpacity="0.51" />
      <feComposite operator="in" in2="blur-7" />
      <feComposite in="SourceGraphic" />
    </filter>
    <clipPath id="clip-path-5">
      <rect
        id="Rectangle_9585-2"
        data-name="Rectangle 9585"
        width="297.731"
        height="281.55"
        rx="40.453"
        transform="translate(571.943 159.372)"
        fill="#fff"
      />
    </clipPath>
    <pattern
      id="patternDrage_Bg-7"
      width={1}
      height={1}
      patternTransform="matrix(1, 0, 0, -1, 0, 788.017)"
      viewBox="0.166 0 590.608 394.008"
    >
      <image
        preserveAspectRatio="xMidYMid slice"
        width="590.941"
        height="394.008"
        xlinkHref={BaseURLImage +data?.at(1)?.images.at(1)?.path}
      />
    </pattern>
    <filter
      id="Ahmed"
      x="565.232"
      y="2164.917"
      width="315.418"
      height="73.417"
      filterUnits="userSpaceOnUse"
    >
      <feOffset dy="3.236" input="SourceAlpha" />
      <feGaussianBlur stdDeviation="3.236" result="blur-8" />
      <feFlood floodOpacity="0.51" />
      <feComposite operator="in" in2="blur-8" />
      <feComposite in="SourceGraphic" />
    </filter>
    <clipPath id="clip-path-6">
      <rect
        id="Rectangle_9584-2"
        data-name="Rectangle 9584"
        width="297.731"
        height="281.55"
        rx="40.453"
        transform="translate(246.704 159.372)"
        fill="#fff"
      />
    </clipPath>
    <pattern
      id="patternDrage_Bg-8"
      preserveAspectRatio="xMidYMid slice"
      width="100%"
      height="100%"
      viewBox="0 0 4096 3266"
    >
      <image
        width={4096}
        height={3266}
        xlinkHref={BaseURLImage +data?.at(1)?.images.at(2)?.path}
      />
    </pattern>
    <filter
      id="Ali"
      x="233.521"
      y="2164.917"
      width="315.418"
      height="73.417"
      filterUnits="userSpaceOnUse"
    >
      <feOffset dy="3.236" input="SourceAlpha" />
      <feGaussianBlur stdDeviation="3.236" result="blur-9" />
      <feFlood floodOpacity="0.51" />
      <feComposite operator="in" in2="blur-9" />
      <feComposite in="SourceGraphic" />
    </filter>
    <filter
      id="Rectangle6_4"
      x="48.784"
      y="2261.184"
      width="930.482"
      height="325.763"
      filterUnits="userSpaceOnUse"
    >
      <feOffset dy="11.233" input="SourceAlpha" />
      <feGaussianBlur stdDeviation="15.914" result="blur-10" />
      <feFlood floodOpacity="0.251" />
      <feComposite operator="in" in2="blur-10" />
      <feComposite in="SourceGraphic" />
    </filter>
    <linearGradient
      id="linear-gradient"
      x1="0.5"
      x2="0.5"
      y2={1}
      gradientUnits="objectBoundingBox"
    >
      <stop offset={0} stopColor="#67b4c6" />
      <stop offset={0} stopColor="#d9d9d9" stopOpacity={0} />
      <stop offset={0} stopColor="#67b4c6" />
      <stop offset={1} />
    </linearGradient>
    <filter
      id="S6_4_G2_R"
      x="177.706"
      y="3002.313"
      width="1086.588"
      height="234.806"
      filterUnits="userSpaceOnUse"
    >
      <feOffset dy="9.716" input="SourceAlpha" />
      <feGaussianBlur stdDeviation="13.765" result="blur-11" />
      <feFlood floodOpacity="0.251" />
      <feComposite operator="in" in2="blur-11" />
      <feComposite in="SourceGraphic" />
    </filter>
    <filter
      id="Rectangle_9588"
      x="176.706"
      y="2790.987"
      width="1086.588"
      height="234.806"
      filterUnits="userSpaceOnUse"
    >
      <feOffset dy="9.716" input="SourceAlpha" />
      <feGaussianBlur stdDeviation="13.765" result="blur-12" />
      <feFlood floodOpacity="0.251" />
      <feComposite operator="in" in2="blur-12" />
      <feComposite in="SourceGraphic" />
    </filter>
    <filter
      id="S6_4_G3_Tik_R"
      x="176.706"
      y="3213.639"
      width="1086.588"
      height="234.806"
      filterUnits="userSpaceOnUse"
    >
      <feOffset dy="9.716" input="SourceAlpha" />
      <feGaussianBlur stdDeviation="13.765" result="blur-13" />
      <feFlood floodOpacity="0.251" />
      <feComposite operator="in" in2="blur-13" />
      <feComposite in="SourceGraphic" />
    </filter>
    <clipPath id="clip-path-7">
      <rect id="BG" width={1600} height={1037} />
    </clipPath>
    <pattern
      id="patternDrage_Bg-9"
      preserveAspectRatio="none"
      width="100%"
      height="100%"
      viewBox="0 0 220 220"
    >
      <image width={220} height={220} xlinkHref="../Drag/Rectangle.png" />
    </pattern>
    <pattern
      id="patternDrage_Bg-10"
      preserveAspectRatio="xMidYMid slice"
      width="100%"
      height="100%"
      viewBox="0 0 3579 4096"
      
    >
      <image
        width={3579}
        height={4086}
        xlinkHref="../Drag/Artboard - 2-image9.webp"
      />
    </pattern>
    <clipPath id="clip-Artboard_2">
      <rect width={1440} height={4500} />
    </clipPath>
  </defs>
  <g id="Artboard_2" data-name="Artboard – 2" clipPath="url(#clip-Artboard_2)">
    <rect width={1440} height={4500} fill="#48abbf" />
    <rect
      id="Blogger"
      width={1574}
      height={1049}
      transform="translate(-48 -16)"
      fill="url(#patternDrage_Bg)"
    />
    <g id="Looking" className='Looking'>
      <text
        id="Looking_For"
        data-name="Looking For"
        transform="translate(931 145)"
        fontSize={55}
        fontFamily="Montserrat-ExtraBoldItalic, Montserrat"
        fontWeight={800}
        fontStyle="italic"
      >
        <tspan x={0} y={53}>
         {t("Looking For")}
        </tspan>
      </text>
      <g id="BLOGGERS-2" data-name="BLOGGERS" transform="translate(932 207)">
        <rect
          id="BLOGGERS_Frame_Background_"
          data-name="BLOGGERS [Frame Background]"
          width={275}
          height={62}
          fill="none"
        />
        <g transform="matrix(1, 0, 0, 1, -932, -207)" filter="url(#BLOGGERS)">
          <text
            id="BLOGGERS-3"
            data-name="BLOGGERS"
            transform="translate(932 196)"
            fill="#fff"
            fontSize={55}
            fontFamily="Poppins-Black, Poppins"
            fontWeight={800}
            letterSpacing="-0.05em"
          >
            <tspan x={0} y={58}>
              {t("BLOGGERS")}
            </tspan>
          </text>
        </g>
      </g>
    </g>
    <path
      id="Right_triangle_ "
      data-name="Right_triangle "
      d="M491.767,145.3c75.7,33.638,104.459,126.238,61.138,196.842L317.1,726.462c-67.835,110.56-237.06,73.7-252.764-55.061L1.264,154.265C-11.622,48.613,95.626-30.738,192.89,12.484Z"
      transform="translate(1166.604 489.538)"
      fill="#baff2e"
      className='Right_triangle'
    />
    <g id="Word_Section" className='Word_Section'>
      <rect
        id="Rectangle_9583"
        data-name="Rectangle 9583"
        width={1380}
        height={226}
        rx={50}
        transform="translate(30 610)"
        fill="#fff"
      />
      <g id="Group_237635" data-name="Group 237635">
        <text
          id="SERVICES"
          transform="translate(88 548)"
          fill="#afef2c"
          fontSize={77}
          fontFamily="Poppins-Black, Poppins"
          fontWeight={800}
          letterSpacing="-0.05em"
        >
          <tspan x={0} y={81}>
            {t("SERVICESs")}
          </tspan>
        </text>
        <text
          id="BLOGGERS-4"
          data-name="BLOGGERS"
          transform="translate(88 512)"
          fill="#afef2c"
          fontSize={55}
          fontFamily="Poppins-Black, Poppins"
          fontWeight={800}
          letterSpacing="-0.05em"
        >
          <tspan x={0} y={58}>
            {t("BLOGGERSs")}
          </tspan>
        </text>
      </g>
      <text
        id="If_you_re_in_search_of_a_reliable_blogger_or_influencer_to_promote_your_business_you_ve_come_to_the_right_place_We_specialize_in_connecting_you_with"
        data-name="If you're in search of a reliable blogger or influencer to promote your business, you've come to the right place! We specialize in connecting you with"
        transform="translate(98 681)"
        fill="#2d2d2d"
        fontSize="24.302"
        fontFamily="Roboto-Medium, Roboto"
        fontWeight={500}
        letterSpacing="-0.007em"
      >
        <tspan x={0} y={23}>
        {t("If you're in search of a reliable blogger or influencer to promote your business, you've come to the right place! We")}
          {/* If you're in search of a reliable blogger or influencer to promote
          your business, you've come to the right place! We{" "} */}
        </tspan>
        <tspan x={0} y={58}>
        {t("specialize in connecting you with Qatar's most active and successful profiles, ensuring you get the exposure and reach")}
          {/* specialize in connecting you with Qatar's most active and successful
          profiles, ensuring you get the exposure and reach{" "} */}
        </tspan>
        <tspan x={0} y={93}>
          {t("you need to grow your brand.")}
        </tspan>
      </text>
      <g id="Contact_us" data-name="Contact us" transform="translate(436 759)">
        <path
          id="Vector"
          d="M66,33A33,33,0,1,1,33,0,33,33,0,0,1,66,33Z"
          transform="translate(98)"
          fill="none"
        />
        <path
          id="Vector-2"
          data-name="Vector"
          d="M46.919,33.387,26.939,44.923V21.852Z"
          transform="translate(98)"
          fill="none"
        />
        <rect
          id="Rectangle_9580"
          data-name="Rectangle 9580"
          width={187}
          height={66}
          rx={30}
          fill="#afef2c"
        />
        <text
          id="Contact_us-2"
          data-name="Contact us"
          transform="translate(12 15)"
          fill="#1e1e1e"
          fontSize={28}
          fontFamily="Montserrat-BoldItalic, Montserrat"
          fontWeight={700}
          fontStyle="italic"
          letterSpacing="0.006em"
        >
          <tspan  y={27} >
            {t("Contact us")}
          </tspan>
        </text>
      </g>
    </g>
    <rect
      id="man-blogger-pov-point-view-photo-welcoming-happily-raised-arm-expressing-happiness_1"
      data-name="man-blogger-pov-point-view-photo-welcoming-happily-raised-arm-expressing-happiness 1"
      width="2492.292"
      height={1661}
      transform="translate(-507.146 -322)"
      opacity={1}
      fill="url(#patternDrage_Bg)"
      className='Drag1_OP'
    />
    <g id="Drag_Up" className='Drag1_OP'>
      <g id="Arrow" transform="translate(621 600) rotate(-90)" >
        <g
          id="Group_5"
          data-name="Group 5"
          transform="translate(91 0) rotate(90)"
        >
          <g id="Group_2" data-name="Group 2" opacity="0.9" className='Big_Arrow'>
            <path
              id="Union_2"
              data-name="Union 2"
              d="M-12097.288-5606.167l-88.236-50.68-88.186,50.652a7.549,7.549,0,0,1-10.28-2.741,7.467,7.467,0,0,1,2.753-10.228l91.984-52.831a7.558,7.558,0,0,1,8.156.4l91.332,52.457a7.468,7.468,0,0,1,2.757,10.228,7.537,7.537,0,0,1-6.526,3.744A7.523,7.523,0,0,1-12097.288-5606.167Z"
              transform="translate(12285 5673)"
              fill="#fff"
            />
          </g>
          <g id="Group_3" data-name="Group 3" opacity="0.6" className='Mid_Arrow'>
            <path
              id="Path_6"
              data-name="Path 6"
              d="M46.592,70.683a4.29,4.29,0,0,1,1.48-5.737L97.484,35.309a3.962,3.962,0,0,1,5.523,1.537,4.291,4.291,0,0,1-1.48,5.737L52.114,72.221A3.961,3.961,0,0,1,46.592,70.683Z"
              fill="#fff"
            />
            <path
              id="Path_7"
              data-name="Path 7"
              d="M95.993,36.862a4.29,4.29,0,0,0,1.48,5.737l49.413,29.638a3.961,3.961,0,0,0,5.522-1.537,4.29,4.29,0,0,0-1.48-5.737L101.516,35.325A3.961,3.961,0,0,0,95.993,36.862Z"
              fill="#fff"
            />
          </g>
          <g id="Group_4" data-name="Group 4" opacity="0.2" className='Small_Arrow'>
            <path
              id="Path_8"
              data-name="Path 8"
              d="M72.639,89.988a1.985,1.985,0,0,1,.751-2.744L98.477,73.069a2.077,2.077,0,0,1,2.8.735,1.985,1.985,0,0,1-.751,2.744L75.442,90.723A2.077,2.077,0,0,1,72.639,89.988Z"
              fill="#fff"
            />
            <path
              id="Path_9"
              data-name="Path 9"
              d="M97.72,73.812a1.985,1.985,0,0,0,.751,2.744l25.086,14.175a2.077,2.077,0,0,0,2.8-.735,1.986,1.986,0,0,0-.751-2.744L100.523,73.077A2.077,2.077,0,0,0,97.72,73.812Z"
              fill="#fff"
            />
          </g>
        </g>
        <path
          id="Union_1"
          data-name="Union 1"
          d="M-12309.749-5556.335a3.962,3.962,0,0,1-1.536-5.525l28.429-47.4-28.413-47.373a3.96,3.96,0,0,1,1.535-5.521,4.292,4.292,0,0,1,5.738,1.48l29.637,49.413a3.915,3.915,0,0,1-.226,4.383l-29.427,49.062a4.24,4.24,0,0,1-3.644,2.021A4.3,4.3,0,0,1-12309.749-5556.335Z"
          transform="translate(12330.05 5707.745)"
          fill="#fff"
          opacity="0.6"
        />
        <path
          id="Subtraction_1"
          data-name="Subtraction 1"
          d="M-12338.531-5646.114h0l.093-.164a2.092,2.092,0,0,0,.079-1.9A2.087,2.087,0,0,1-12338.531-5646.114Zm-3.966-1.193h0l-13.588-24.048a2.082,2.082,0,0,1,.735-2.8,1.976,1.976,0,0,1,1-.276,2.006,2.006,0,0,1,1.74,1.026l14.131,25.016a2.065,2.065,0,0,0-.7-.688,1.978,1.978,0,0,0-1-.274,2.012,2.012,0,0,0-1.743,1.028l-.576,1.02Z"
          transform="translate(12356.363 5745.8)"
          fill="#fff"
          opacity="0.02"
        />
      </g>
      <text
        id="Drag_up-2"
        data-name="Drag up"
        transform="translate(655 605)"
        fill="#fff"
        fontSize="31.02"
        fontFamily="Poppins-Regular, Poppins"
        letterSpacing="0.01em"
      >
        <tspan x={0} y={33}>
          {t("Drag up")}
        </tspan>
      </text>
    </g>
    <g id="Rectangles" transform="translate(-17 899)"  className='Services_6_2_Left_Rectangle'>
      <path
        id="Left_Rectangle"
        d="M304.767,145.3c75.7,33.638,104.458,126.238,61.138,196.842L130.1,726.462c-67.835,110.56-237.06,73.7-252.764-55.061l-63.072-517.136C-198.622,48.613-91.374-30.738,5.89,12.484Z"
        transform="translate(-9.173 440.8)"
        fill="#baff2e"
      />
    </g>
    <g id="Text" className='Services6_2_Text' transform="translate(-17 899)">
      <text
        id="Looking_For_an_Influencer_"
        data-name="Looking For an Influencer ?"
        transform="translate(259 515)"
        fill="#040303"
        fontSize={55}
        fontFamily="Montserrat-ExtraBoldItalic, Montserrat"
        fontWeight={800}
        fontStyle="italic"
      >
        <tspan x={0} y={53}>
          {t("Looking For an")}
        </tspan>
        <tspan x={0} y={104}>
          {t("Influencer ?")}
        </tspan>
      </text>
      <text
        id="You_can_count_on_us_to_provide_you_with_cutting-edge_and_visually_appealing_website_designs._Our_team_of_skilled_designers_specializes_in_creating_mod"
        data-name="You can count on us to provide you with cutting-edge and visually appealing website designs. Our team of skilled designers specializes in creating mod"
        transform="translate(470 637)"
        fill="#fff"
        fontSize="24.302"
        fontFamily="Roboto-Medium, Roboto"
        fontWeight={500}
        letterSpacing="-0.007em"
      >
        <tspan x={0} y={23}>
          {t("You can count on us to provide you with cutting-edge and visually appealing")}{" "}
        </tspan>
        <tspan x={0} y={58}>
          {t("website designs. Our team of skilled designers specializes in creating")}{" "}
        </tspan>
        <tspan x={0} y={93}>
         {t("modern and sleek designs that align with the latest design trends and")}{" "}
        </tspan>
        <tspan x={0} y={128}>
          {t("industry standards. Here are some key aspects of our modern web design")}{" "}
        </tspan>
        <tspan x={0} y={163}>
          {t("services")}
        </tspan>
      </text>
    </g>
   <g className='Top_Images'>
   <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Rectangle_Black)">
      <rect
        id="Rectangle_Black-2"
        data-name="Rectangle_Black"
        width={1414}
        height={384}
        rx={50}
        transform="translate(-4 981)"
      />
    </g>
    <g id="Maria-2" data-name="Maria" transform="translate(-17 899)">
      <g id="Mask_group" data-name="Mask group">
        <g
          id="Rectangle_9586-3"
          data-name="Rectangle 9586"
          clipPath="url(#clip-path)"
          xlinkHref='../Drag/Artboard - 2-image4.webp'
          
        >
          <image
            id="influencer-phone-happy-woman-social-media-live-streaming-recording-online-blog-content-creator-press-beautiful-girl-taking-selfie-mobile-app-with-ring"
            width={519}
            height="374.306"
            transform="translate(870 92)"
            xlinkHref='../Drag/Artboard - 2-image4.webp'
          />
          {/* <rect
            id="influencer-phone-happy-woman-social-media-live-streaming-recording-online-blog-content-creator-press-beautiful-girl-taking-selfie-mobile-app-with-ring"
            width={519}
            height="374.306"
            transform="translate(870 92)"
            fill="url(#patternDrage_Bg-3)"
            xlinkHref='../Drag/Artboard - 2-image4.webp'
          /> */}
        </g>
      </g>
      <g transform="matrix(1, 0, 0, 1, 17, -899)" filter="url(#Maria)">
        <text
          id="Maria-3"
          data-name="Maria"
          transform="translate(928 1263)"
          fill="#fff"
          fontSize={55}
          fontFamily="Montserrat-ExtraBoldItalic, Montserrat"
          fontWeight={800}
          fontStyle="italic"
        >
          <tspan x={0} y={53}>
            {t("Maria")}
          </tspan>
        </text>
      </g>
    </g>
    <g id="Nada-2" data-name="Nada" transform="translate(-17 899)">
      <g id="Mask_group-2" data-name="Mask group">
        <g
          id="Rectangle_9585-3"
          data-name="Rectangle 9585"
          clipPath="url(#clip-path-2)"
        >
          <image
            id="hello-subs-portrait-attractive-hipster-woman-with-fancy-red-hair-waving-hand-saying-hi-while-streaming-mobile-phone-online-blogging-communication-stud"
            width="607.959"
            height={405}
            transform="translate(405 101)"
            xlinkHref='../Drag/Artboard - 2-image3.webp'
          />
        </g>
      </g>
      <g transform="matrix(1, 0, 0, 1, 17, -899)" filter="url(#Nada)">
        <text
          id="Nada-3"
          data-name="Nada"
          transform="translate(528 1263)"
          fill="#fff"
          fontSize={55}
          fontFamily="Montserrat-ExtraBoldItalic, Montserrat"
          fontWeight={800}
          fontStyle="italic"
        >
          <tspan x={0} y={53}>
            {t("Nada")}
          </tspan>
        </text>
      </g>
    </g>
    <g id="Aicha-2" data-name="Aicha" transform="translate(-17 899)">
      <g id="Mask_group-3" data-name="Mask group">
        <g
          id="Rectangle_9584-3"
          data-name="Rectangle 9584"
          clipPath="url(#clip-path-3)"
        >
          <image
            id="modern-muslim-woman-hijab-office-room_1"
            data-name="modern-muslim-woman-hijab-office-room 1"
            width={796}
            height={531}
            transform="translate(-174 65)"
            xlinkHref='../Drag/Artboard - 2-image2.webp'
          />
        </g>
      </g>
      <g transform="matrix(1, 0, 0, 1, 17, -899)" filter="url(#Aicha)">
        <text
          id="Aicha-3"
          data-name="Aicha"
          transform="translate(118 1263)"
          fill="#fff"
          fontSize={55}
          fontFamily="Montserrat-ExtraBoldItalic, Montserrat"
          fontWeight={800}
          fontStyle="italic"
        >
          <tspan x={0} y={53}>
            {t("Aicha")}
          </tspan>
        </text>
      </g>
    </g>
   </g>
    <path
      id="Drage4_Left_Rectangel"
      d="M338.081,357.044C378.35,429.431,345.665,520.72,268.6,551.1L-150.877,716.46c-120.675,47.57-233.745-83.621-168.889-195.955L-59.282,69.334c53.218-92.176,186.625-91.112,238.368,1.9Z"
      transform="translate(-7.833 1973.52)"
      fill="#baff2e"
      opacity={0}
      className='Drage4_Left_Rectangel'
    />
  <g className='S6_3_Images'>
  <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Rectangle_Black4)">
      <rect
        id="Rectangle_Black4-2"
        data-name="Rectangle_Black4"
        width={1144}
        height="310.676"
        rx="40.453"
        transform="translate(148.53 1944)"
      />
    </g>
    <g id="Images6_4" transform="translate(0.525 1800)" >
      <g id="Saad-2" data-name="Saad">
        <g id="Saad_G">
          <g id="Saad_R" clipPath="url(#clip-path-4)">
            <rect
              id="side-view-business-man-city_1"
              data-name="side-view-business-man-city 1"
              width="540.447"
              height="360.837"
              transform="translate(814.659 144)"
              fill="url(#patternDrage_Bg-6)"
            />
            <image
              id="side-view-business-man-city_1"
              data-name="side-view-business-man-city 1"
              width="540.447"
              height="360.837"
              transform="translate(814.659 144)"
            xlinkHref='../Drag/Artboard - 2-image5.webp'
          />
          </g>
        </g>
        <g transform="matrix(1, 0, 0, 1, -0.53, -1800)" filter="url(#Saad)">
          <text
            id="Saad-3"
            data-name="Saad"
            transform="translate(902.56 2171.39)"
            fill="#fff"
            fontSize="44.498"
            fontFamily="Montserrat-ExtraBoldItalic, Montserrat"
            fontWeight={800}
            fontStyle="italic"
          >
            <tspan x={0} y={43}>
              {t("Saad")}
            </tspan>
          </text>
        </g>
      </g>
      <g id="Ahmed-2" data-name="Ahmed">
        <g id="Ahmed_G">
          <g id="Ahmed_R" clipPath="url(#clip-path-5)">
            <image
              id="side-view-business-man-city_1"
              data-name="side-view-business-man-city 1"
              width="540.447"
              height="360.837"
              transform="translate(434.659 144)"
            xlinkHref='../Drag/Artboard - 2-image6.webp'
          />
          </g>
        </g>
        <g transform="matrix(1, 0, 0, 1, -0.53, -1800)" filter="url(#Ahmed)">
          <text
            id="Ahmed-3"
            data-name="Ahmed"
            transform="translate(578.94 2171.39)"
            fill="#fff"
            fontSize="44.498"
            fontFamily="Montserrat-ExtraBoldItalic, Montserrat"
            fontWeight={800}
            fontStyle="italic"
          >
            <tspan x={0} y={43}>
              {t("Ahmed")}
            </tspan>
          </text>
        </g>
      </g>
      <g id="Ali-2" data-name="Ali">
        <g id="Ali_G">
          <g id="Ali_R" clipPath="url(#clip-path-6)">
            <image
              id="portrait-attractive-arab-man_1"
              data-name="portrait-attractive-arab-man 1"
              width="422.325"
              height="336.566"
              transform="translate(149.618 138.337)"
            xlinkHref='../Drag/Artboard - 2-image7.webp'
          />
          </g>
        </g>
        <g transform="matrix(1, 0, 0, 1, -0.53, -1800)" filter="url(#Ali)">
          <text
            id="Ali-3"
            data-name="Ali"
            transform="translate(247.23 2171.39)"
            fill="#fff"
            fontSize="44.498"
            fontFamily="Montserrat-ExtraBoldItalic, Montserrat"
            fontWeight={800}
            fontStyle="italic"
          >
            <tspan x={0} y={43}>
              {t("Ali")}
            </tspan>
          </text>
        </g>
      </g>
    </g>
  </g>
    <g id="Media_Box4" transform="translate(0.525 1800)" className='Media_Box'>
      <g id="Box4">
        <g
          transform="matrix(1, 0, 0, 1, -0.53, -1800)"
          filter="url(#Rectangle6_4)"
        >
          <rect
            id="Rectangle6_4-2"
            data-name="Rectangle6_4"
            width={835}
            height="230.28"
            rx="46.805"
            transform="translate(96.53 2297.69)"
          />
        </g>
        <g id="Verfication" transform="translate(666 530)">
          <rect
            id="Frame_Frame_Background_"
            data-name="Frame [Frame Background]"
            width={136}
            height={136}
            fill="none"
          />
          <path
            id="Vector-3"
            data-name="Vector"
            d="M0,0H136V136H0Z"
            opacity={0}
          />
          <g id="Group">
            <g id="Group-2" data-name="Group">
              <g id="Group-3" data-name="Group">
                <path
                  id="Vector-4"
                  data-name="Vector"
                  d="M63.356,0l8.163,12.638,15.042.738.762,15.042L99.96,36.581l-6.854,13.4L99.96,63.356,87.322,71.519l-.738,15.042-15.042.762L63.379,99.96l-13.4-6.854L36.6,99.96,28.441,87.322,13.4,86.584l-.762-15.042L0,63.379l6.854-13.4L0,36.6l12.638-8.163L13.376,13.4l15.042-.762L36.581,0l13.4,6.854Z"
                  transform="translate(18.02 18.02)"
                  fill="#42a5f5"
                />
              </g>
              <g id="Group-4" data-name="Group">
                <path
                  id="Vector-5"
                  data-name="Vector"
                  d="M15.446,32.082,0,16.636l5.046-5.046,10.5,10.472L38.294,0l4.974,5.117Z"
                  transform="translate(46.342 53.173)"
                  fill="#fff"
                />
              </g>
            </g>
          </g>
        </g>
        <g id="Media" transform="translate(145.094 520.78)">
          <g id="Group-5" data-name="Group">
            <g id="Group-6" data-name="Group">
              <path
                id="Vector-6"
                data-name="Vector"
                d="M60.929,30.465A30.465,30.465,0,1,1,30.465,0,30.465,30.465,0,0,1,60.929,30.465Z"
                transform="translate(151.78 0)"
                fill="#42a5f5"
              />
              <g id="Group-7" data-name="Group">
                <g id="Group-8" data-name="Group">
                  <path
                    id="Vector-7"
                    data-name="Vector"
                    d="M11.432,3.577a10.454,10.454,0,0,0-3.559.658A5.92,5.92,0,0,0,5.663,5.672,5.99,5.99,0,0,0,4.226,7.881a10.681,10.681,0,0,0-.658,3.559c-.1,2.016-.114,2.63-.114,7.75s.018,5.725.114,7.75A10.454,10.454,0,0,0,4.226,30.5a5.92,5.92,0,0,0,1.438,2.209,5.99,5.99,0,0,0,2.209,1.438,10.681,10.681,0,0,0,3.559.658c2.016.1,2.63.114,7.75.114s5.725-.018,7.75-.114a10.454,10.454,0,0,0,3.559-.658A5.92,5.92,0,0,0,32.7,32.709,5.99,5.99,0,0,0,34.138,30.5,10.681,10.681,0,0,0,34.8,26.94c.1-2.016.114-2.63.114-7.75s-.018-5.725-.114-7.75a10.454,10.454,0,0,0-.658-3.559A5.92,5.92,0,0,0,32.7,5.672a5.99,5.99,0,0,0-2.209-1.438,10.681,10.681,0,0,0-3.559-.658c-2.025-.1-2.63-.114-7.75-.114s-5.725.018-7.75.114ZM27.089.114a14.156,14.156,0,0,1,4.655.894,9.393,9.393,0,0,1,3.4,2.209,9.509,9.509,0,0,1,2.209,3.4,14.156,14.156,0,0,1,.894,4.655c.088,2.043.114,2.7.114,7.908s-.018,5.865-.114,7.908a14.156,14.156,0,0,1-.894,4.655,9.393,9.393,0,0,1-2.209,3.4,9.509,9.509,0,0,1-3.4,2.209,14.156,14.156,0,0,1-4.655.894c-2.043.088-2.7.114-7.908.114s-5.865-.018-7.908-.114a14.156,14.156,0,0,1-4.655-.894,9.393,9.393,0,0,1-3.4-2.209,9.509,9.509,0,0,1-2.209-3.4,14.156,14.156,0,0,1-.894-4.655C.026,25.047,0,24.389,0,19.182s.018-5.865.114-7.908a14.156,14.156,0,0,1,.894-4.655,9.393,9.393,0,0,1,2.209-3.4,9.509,9.509,0,0,1,3.4-2.209A14.156,14.156,0,0,1,11.274.114C13.317.026,13.974,0,19.182,0s5.865.026,7.908.114Z"
                    transform="translate(163.063 11.283)"
                    fill="#fff"
                  />
                  <path
                    id="Vector-8"
                    data-name="Vector"
                    d="M19.708,9.854A9.854,9.854,0,1,1,9.854,0,9.851,9.851,0,0,1,19.708,9.854Zm-3.463,0a6.391,6.391,0,1,0-6.391,6.391,6.392,6.392,0,0,0,6.391-6.391Z"
                    transform="translate(172.391 20.62)"
                    fill="#fff"
                  />
                  <path
                    id="Vector-9"
                    data-name="Vector"
                    d="M4.611,2.306A2.306,2.306,0,1,1,2.306,0,2.306,2.306,0,0,1,4.611,2.306Z"
                    transform="translate(190.187 17.919)"
                    fill="#fff"
                  />
                </g>
              </g>
            </g>
            <g id="Group-9" data-name="Group">
              <path
                id="Vector-10"
                data-name="Vector"
                d="M60.929,30.465A30.465,30.465,0,1,1,30.465,0,30.465,30.465,0,0,1,60.929,30.465Z"
                transform="translate(223.685 0)"
                fill="#42a5f5"
              />
              <g id="Group-10" data-name="Group">
                <g id="WA_Logo_1_">
                  <g id="Group-11" data-name="Group">
                    <path
                      id="Vector-11"
                      data-name="Vector"
                      d="M38.828,19.34A19.36,19.36,0,0,1,19.5,38.662h-.009a19.274,19.274,0,0,1-9.24-2.35L0,38.995,2.744,28.983A19.334,19.334,0,1,1,38.828,19.34Zm-3.261,0A16.065,16.065,0,1,0,5.891,27.878l.386.6L4.655,34.41l6.084-1.6.587.351A16.065,16.065,0,0,0,35.567,19.34Zm-6.321,4.6a4.007,4.007,0,0,1-.281,2.3c-.4,1.131-2.332,2.157-3.261,2.3a6.637,6.637,0,0,1-3.042-.193,26.087,26.087,0,0,1-2.753-1.017c-4.848-2.1-8-6.97-8.25-7.294a9.379,9.379,0,0,1-1.973-5,5.418,5.418,0,0,1,1.692-4.024,1.785,1.785,0,0,1,1.289-.6c.324,0,.649,0,.929.018.3.018.693-.105,1.087.833.4.964,1.368,3.34,1.49,3.586a.882.882,0,0,1,.044.842,3.03,3.03,0,0,1-.482.807c-.245.281-.508.622-.728.842-.237.237-.491.491-.21.982a14.238,14.238,0,0,0,2.683,3.349,13.339,13.339,0,0,0,3.884,2.393c.482.237.763.2,1.043-.123s1.2-1.411,1.525-1.894.649-.4,1.087-.245,2.814,1.324,3.3,1.569.807.368.929.579Z"
                      transform="translate(235.634 10.52)"
                      fill="#fff"
                      fillRule="evenodd"
                    />
                  </g>
                </g>
              </g>
            </g>
            <g id="Group-12" data-name="Group">
              <path
                id="Vector-12"
                data-name="Vector"
                d="M60.929,30.465A30.465,30.465,0,1,1,30.465,0,30.465,30.465,0,0,1,60.929,30.465Z"
                transform="translate(302.341 0)"
                fill="#42a5f5"
              />
              <g id="Group-13" data-name="Group">
                <g id="Group-14" data-name="Group">
                  <path
                    id="Vector-13"
                    data-name="Vector"
                    d="M7.162,3.841c.5-.561.912-1.131,1.429-1.622A7.777,7.777,0,0,1,14.22,0a13.025,13.025,0,0,1,3.542.43A6.924,6.924,0,0,1,22.68,5.6a21.769,21.769,0,0,1,.658,5.926c.009,4.208-.009,8.416,0,12.624,0,.395-.105.5-.5.491-2.165-.018-4.34-.018-6.5,0-.386,0-.465-.114-.465-.473.009-4.006.018-8.013,0-12.011a10.712,10.712,0,0,0-.351-2.981,3.356,3.356,0,0,0-3.691-2.613c-2.569.132-3.91,1.411-4.234,4.024a14.867,14.867,0,0,0-.114,1.876q0,5.839.009,11.686c0,.386-.1.5-.491.5q-3.274-.026-6.549,0C.1,24.653,0,24.565,0,24.206Q.013,12.634,0,1.07C0,.684.123.6.482.606c2.078.018,4.147.018,6.224,0,.386,0,.482.123.473.482C7.145,2,7.162,2.92,7.162,3.841Z"
                    transform="translate(328.002 22.469)"
                    fill="#fff"
                  />
                  <path
                    id="Vector-14"
                    data-name="Vector"
                    d="M7.5,12.063c0,3.814-.009,7.627.009,11.441,0,.421-.105.552-.544.544-2.165-.026-4.331-.018-6.5,0C.105,24.047,0,23.96,0,23.6Q.013,12.015,0,.43C0,.114.079,0,.421,0q3.3.026,6.593,0C7.434,0,7.5.158,7.5.526c-.009,3.84,0,7.688,0,11.537Z"
                    transform="translate(315.789 23.065)"
                    fill="#fff"
                  />
                  <path
                    id="Vector-15"
                    data-name="Vector"
                    d="M8.662,4.313A4.35,4.35,0,0,1,4.331,8.662,4.365,4.365,0,0,1,0,4.348,4.357,4.357,0,0,1,4.34,0,4.352,4.352,0,0,1,8.662,4.313Z"
                    transform="translate(315.22 11.099)"
                    fill="#fff"
                  />
                </g>
              </g>
            </g>
            <g id="Group-15" data-name="Group">
              <path
                id="Vector-16"
                data-name="Vector"
                d="M60.929,30.465A30.465,30.465,0,1,1,30.465,0,30.465,30.465,0,0,1,60.929,30.465Z"
                transform="translate(375.465 0)"
                fill="#42a5f5"
              />
              <g id="Group-16" data-name="Group">
                <g id="Group-17" data-name="Group">
                  <path
                    id="Vector-17"
                    data-name="Vector"
                    d="M29.766,11.914c-.009.842-.053,1.674-.114,2.507-.009.14-.018.289-.018.43-.009.307.175.438.482.412a1.42,1.42,0,0,0,.333-.079c.307-.105.6-.219.912-.333a12.216,12.216,0,0,1,1.543-.508,2.447,2.447,0,0,1,1.07-.044,1.294,1.294,0,0,1,.929,1.788,1.892,1.892,0,0,1-.359.544,3.924,3.924,0,0,1-.71.614c-.307.21-.614.412-.929.614-.517.342-1.034.675-1.552,1.017-.21.14-.421.3-.622.447a2.471,2.471,0,0,0-.316.289,1.008,1.008,0,0,0-.263.763,4.41,4.41,0,0,0,.14.815,10.15,10.15,0,0,0,1.078,2.42,13.692,13.692,0,0,0,3.191,3.621,17.856,17.856,0,0,0,3.489,2.2c.114.053.219.114.324.175a.875.875,0,0,1,.21.193.331.331,0,0,1,.026.377.912.912,0,0,1-.245.272,3.08,3.08,0,0,1-.456.289,10.118,10.118,0,0,1-2.227.868c-.333.088-.658.184-.991.281a3.617,3.617,0,0,0-.658.281,1.155,1.155,0,0,0-.631.868c-.044.21-.07.43-.105.649a.842.842,0,0,1-.824.833,4.047,4.047,0,0,1-.57.061c-.473.026-.947.035-1.429.061a12.494,12.494,0,0,0-3.165.561,6.333,6.333,0,0,0-1.245.552c-.421.245-.833.491-1.254.745a13.761,13.761,0,0,1-2.051,1.061,9.028,9.028,0,0,1-2.49.579,11.163,11.163,0,0,1-2.165-.026,8.962,8.962,0,0,1-3.068-.929c-.447-.228-.885-.491-1.315-.754-.316-.193-.631-.386-.956-.57a7.92,7.92,0,0,0-2.437-.929,14.431,14.431,0,0,0-2.376-.3c-.421-.018-.833-.035-1.254-.061a3.763,3.763,0,0,1-.7-.105.746.746,0,0,1-.6-.614c-.035-.184-.07-.377-.1-.561-.009-.035-.009-.079-.018-.114A1.3,1.3,0,0,0,4.5,32.1a5.324,5.324,0,0,0-.885-.316c-.517-.149-1.052-.272-1.56-.456a8.6,8.6,0,0,1-1.3-.579c-.123-.07-.245-.14-.368-.219a1.436,1.436,0,0,1-.219-.184.415.415,0,0,1,.053-.7,2.8,2.8,0,0,1,.447-.254,18.128,18.128,0,0,0,3.077-1.894,13.858,13.858,0,0,0,3.445-3.77,10.606,10.606,0,0,0,1.14-2.507,3.6,3.6,0,0,0,.149-.868,1.037,1.037,0,0,0-.281-.754,2.393,2.393,0,0,0-.386-.342c-.395-.3-.807-.57-1.219-.842L5.017,17.385a5.3,5.3,0,0,1-.745-.579,2.455,2.455,0,0,1-.43-.526,1.37,1.37,0,0,1-.079-1.289,1.112,1.112,0,0,1,.658-.631,2.01,2.01,0,0,1,1.043-.088,6.543,6.543,0,0,1,1.21.342c.4.149.8.3,1.2.456a2.647,2.647,0,0,0,.57.167.767.767,0,0,0,.14.018c.228-.009.421-.079.421-.395,0-.254-.018-.517-.035-.771A36.676,36.676,0,0,1,8.9,9.924a14.774,14.774,0,0,1,.324-2.63A8.423,8.423,0,0,1,10.75,4.007,9.924,9.924,0,0,1,16.133.412a11.9,11.9,0,0,1,3.647-.4,11.42,11.42,0,0,1,3.787.754,9.7,9.7,0,0,1,3.121,1.911A8.883,8.883,0,0,1,29.2,6.5a11.324,11.324,0,0,1,.438,2.087,23.63,23.63,0,0,1,.132,3.331Z"
                    transform="translate(386.658 11.37)"
                    fill="#fff"
                  />
                </g>
              </g>
            </g>
            <g id="Group-18" data-name="Group">
              <path
                id="Vector-18"
                data-name="Vector"
                d="M35.225,60.57V39.275h7.1l1.359-8.8H35.234V24.758c0-2.411,1.175-4.76,4.962-4.76h3.84V12.5a46.819,46.819,0,0,0-6.821-.6c-6.961,0-11.511,4.217-11.511,11.853v6.707H17.972v8.811H25.7V60.57a30.473,30.473,0,1,1,9.521,0Z"
                fill="#42a5f5"
              />
              <path
                id="Vector-19"
                data-name="Vector"
                d="M17.253,27.379V48.673a30.956,30.956,0,0,1-9.521,0V27.379H0V18.568H7.724V11.853C7.724,4.217,12.274,0,19.234,0a46.819,46.819,0,0,1,6.821.6v7.5h-3.84c-3.778,0-4.962,2.35-4.962,4.76v5.716H25.7l-1.35,8.811Z"
                transform="translate(17.972 11.897)"
                fill="#fff"
              />
            </g>
            <g id="Group-19" data-name="Group">
              <g id="Group-20" data-name="Group">
                <path
                  id="Vector-20"
                  data-name="Vector"
                  d="M60.929,30.465A30.465,30.465,0,1,1,30.465,0,30.465,30.465,0,0,1,60.929,30.465Z"
                  transform="translate(78.656 0)"
                  fill="#42a5f5"
                />
              </g>
              <path
                id="Vector-21"
                data-name="Vector"
                d="M34.306,15.756c0,.359-.044.377-.4.377a14.9,14.9,0,0,1-3.358-.4,16.24,16.24,0,0,1-5.278-2.279c-.079-.053-.175-.175-.263-.132-.114.053-.053.2-.053.307,0,4.375.018,8.749-.009,13.115a12.215,12.215,0,0,1-2.989,8.118,12.261,12.261,0,0,1-8.065,4.3A12.354,12.354,0,0,1,6.769,37.91a6.28,6.28,0,0,1-1.034-.631c-.105-.088-.2-.184-.307-.272a3.048,3.048,0,0,1-.649-.447,12.322,12.322,0,0,1-4.2-6.04,12.01,12.01,0,0,1-.526-2.613,11.81,11.81,0,0,1-.026-1.929,12.189,12.189,0,0,1,1.061-4.261A12.421,12.421,0,0,1,8.2,15.134a12.22,12.22,0,0,1,3.305-.7,12.751,12.751,0,0,1,2.455.053c.114.018.175.035.175.167-.009.456-.009.9-.009,1.359.009.009.07,3.445.07,5.023V21.2c-.009.158-.088.21-.237.167a6.039,6.039,0,0,0-1.315-.2,5.083,5.083,0,0,0-2.016.3A5.385,5.385,0,0,0,6.874,26.1a5.375,5.375,0,0,0,2.49,5.348,5.632,5.632,0,0,1,.465.333c.035.035.07.061.105.1a7.186,7.186,0,0,0,1.333.438,5.7,5.7,0,0,0,6.777-4.655,5.142,5.142,0,0,0,.07-.973V.362c0-.412-.053-.359.351-.359h6.207c.21,0,.21,0,.21.21a13.693,13.693,0,0,0,.21,1.657c.868,4.436,6.04,7.154,7.636,7.39a9.519,9.519,0,0,0,1.324.114c.184,0,.193.009.193.184,0,.412.079,4.655.061,6.2Z"
                transform="translate(91.954 10.842)"
                fill="#fff"
              />
            </g>
          </g>
        </g>
      </g>
      <text
        id="Social_Media_Accounts_Verification"
        data-name="Social Media Accounts Verification"
        transform="translate(132.821 592.135)"
        fill="#fff"
        fontSize="48.217"
        fontFamily="Montserrat-ExtraBoldItalic, Montserrat"
        fontWeight={800}
        fontStyle="italic"
      >
        <tspan x={0} y={47}>
          {t("Social Media")}
          {/* Social Media{" "} */}
        </tspan>
        <tspan x={0} y={91}>
          {t("Accounts Verification")}
        </tspan>
      </text>
      <g id="Star" transform="translate(805 551)" className='Star'>
        <rect
          id="Frame_Frame_Background_2"
          data-name="Frame [Frame Background]"
          width={93}
          height={93}
          fill="none"
        />
        <g id="Group-21" data-name="Group">
          <path
            id="Vector-22"
            data-name="Vector"
            d="M93,46.8A46.5,46.5,0,1,1,79.745,13.986,46.494,46.494,0,0,1,93,46.8ZM80.7,35.533c.144-.141.281-.292.471-.492-1.171-.178-2.239-.347-3.307-.5l-4.979-.719q-7.564-1.093-15.132-2.172a.888.888,0,0,1-.785-.546q-4.68-9.505-9.385-19c-.357-.723-.717-1.445-1.108-2.234-.14.275-.239.462-.333.653Q41.059,20.8,35.981,31.079a.884.884,0,0,1-.764.573c-3.718.518-7.432,1.068-11.146,1.608L12.052,35.005c1.19,1.252,2.353,2.55,3.591,3.769q6.567,6.461,13.181,12.871a.84.84,0,0,1,.271.865c-.264,1.386-.484,2.781-.724,4.172q-1.31,7.6-2.619,15.209c-.219,1.273-.433,2.548-.667,3.927.3-.147.5-.244.7-.349q10.1-5.3,20.208-10.6a.9.9,0,0,1,.953-.006l.779.408q8.247,4.328,16.508,8.634c1.2.625,2.4,1.244,3.645,1.891a2.94,2.94,0,0,0,0-.414q-.349-2.058-.708-4.116-1.612-9.318-3.236-18.636a1.09,1.09,0,0,1,.381-1.1Q72.52,43.543,80.7,35.533Z"
            transform="translate(0 0)"
            fill="#fcee23"
          />
          <path
            id="Vector-23"
            data-name="Vector"
            d="M52.263,41.656a1.09,1.09,0,0,0-.381,1.1q1.64,9.313,3.236,18.636.356,2.058.708,4.116a2.939,2.939,0,0,1,0,.414c-1.248-.647-2.448-1.266-3.645-1.891Q43.929,59.723,35.676,55.4l-.779-.408a.9.9,0,0,0-.953.006q-10.1,5.31-20.208,10.6c-.2.1-.406.2-.7.349.234-1.379.448-2.653.667-3.927q1.308-7.6,2.619-15.209c.24-1.391.46-2.786.724-4.172a.839.839,0,0,0-.271-.865Q10.17,35.351,3.591,28.9C2.353,27.684,1.19,26.386,0,25.134l12.019-1.746c3.715-.54,7.428-1.09,11.146-1.608a.884.884,0,0,0,.764-.573Q29,10.926,34.091.653c.094-.191.193-.378.333-.653.391.789.751,1.512,1.108,2.234q4.7,9.5,9.385,19a.888.888,0,0,0,.785.546q7.568,1.074,15.132,2.172l4.979.719c1.069.155,2.136.324,3.307.5-.191.2-.327.351-.471.492q-8.188,8-16.385,15.995Z"
            transform="translate(12.052 9.871)"
          />
          <path
            id="Vector-24"
            data-name="Vector"
            d="M76.916,32.817A46.475,46.475,0,0,1,0,67.656c.475-.163.959-.325,1.454-.489a98.853,98.853,0,0,0,30.19-15.882q8.247,4.328,16.508,8.634c1.2.625,2.4,1.244,3.645,1.891a2.939,2.939,0,0,0,0-.414q-.349-2.058-.708-4.116-1.612-9.318-3.236-18.636a1.09,1.09,0,0,1,.381-1.1q8.205-7.985,16.385-15.995c.144-.141.281-.292.471-.492-1.171-.178-2.239-.347-3.307-.5L56.8,19.833A92.806,92.806,0,0,0,63.661,0,46.538,46.538,0,0,1,76.916,32.817Z"
            transform="translate(16.084 13.986)"
            fill="#c1b430"
          />
        </g>
      </g>
    </g>
    <text
      id="Drage4_Word"
      transform="translate(224.526 2561)"
      fill="#fff"
      fontSize="24.302"
      fontFamily="Roboto-Medium, Roboto"
      fontWeight={500}
      className='Drage4_Word'
      letterSpacing="-0.007em"
    >
      <tspan x={0} y={23}>
        {t("Social media account verification is a process through which social media platforms authenticate the")}
        {/* {" "} */}
      </tspan>
      <tspan x={0} y={58}>
        {t("identity of a user or entity to confirm that the account is genuine and belongs to the claimed individual or")}
        {/* {" "} */}
      </tspan>
      <tspan x={0} y={93}>
        {t("organization. Verification badges or ticks are commonly used to signify that an account has been verified.")}
      </tspan>
    </text>
    <g id="Group_8" data-name="Group 8" transform="translate(0 2699)" >
    <rect width={1440} height={900} fill="#67b4c6" />
    <rect
      id="Rectangle_Liner"
      width={1440}
      height={356}
      transform="translate(0 410)"
      fill="url(#linear-gradient)"
    />
     <g className='S6_5_G'>
     <g id="S6_4_G2" transform="translate(1)">
        <g id="S6_4_G22">
          <g transform="matrix(1, 0, 0, 1, -1, -2699)" filter="url(#S6_4_G2_R)">
            <rect
              id="S6_4_G2_R-2"
              data-name="S6_4_G2_R"
              width={1004}
              height="152.219"
              rx="76.11"
              transform="translate(219 3033.89)"
            />
          </g>
          <g id="S6_4_G2_Insta" transform="translate(1075.448 344.606)">
            <g id="Group-22" data-name="Group">
              <path
                id="Vector-25"
                data-name="Vector"
                d="M132.382,66.191A66.191,66.191,0,1,1,66.191,0,66.191,66.191,0,0,1,132.382,66.191Z"
                transform="translate(0 0)"
                fill="#42a5f5"
              />
              <g id="Group-23" data-name="Group">
                <g id="Group-24" data-name="Group">
                  <path
                    id="Vector-26"
                    data-name="Vector"
                    d="M24.838,7.772A22.714,22.714,0,0,0,17.1,9.2a12.862,12.862,0,0,0-4.8,3.124,13.015,13.015,0,0,0-3.124,4.8,23.206,23.206,0,0,0-1.429,7.733C7.543,29.238,7.5,30.572,7.5,41.7s.038,12.438.248,16.838a22.714,22.714,0,0,0,1.429,7.733,12.862,12.862,0,0,0,3.124,4.8,13.015,13.015,0,0,0,4.8,3.124,23.206,23.206,0,0,0,7.733,1.429c4.381.21,5.714.248,16.838.248s12.438-.038,16.838-.248a22.714,22.714,0,0,0,7.733-1.429,12.862,12.862,0,0,0,4.8-3.124,13.015,13.015,0,0,0,3.124-4.8A23.206,23.206,0,0,0,75.6,58.534c.21-4.381.248-5.714.248-16.838S75.81,29.257,75.6,24.857a22.714,22.714,0,0,0-1.429-7.733,12.862,12.862,0,0,0-3.124-4.8,13.015,13.015,0,0,0-4.8-3.124,23.206,23.206,0,0,0-7.733-1.429c-4.4-.21-5.714-.248-16.838-.248s-12.438.038-16.838.248ZM58.858.248A30.757,30.757,0,0,1,68.972,2.191a20.409,20.409,0,0,1,7.391,4.8,20.661,20.661,0,0,1,4.8,7.391A30.756,30.756,0,0,1,83.106,24.5c.19,4.438.248,5.867.248,17.181s-.038,12.743-.248,17.181a30.757,30.757,0,0,1-1.943,10.114,20.408,20.408,0,0,1-4.8,7.391,20.661,20.661,0,0,1-7.391,4.8,30.757,30.757,0,0,1-10.114,1.943c-4.438.19-5.867.248-17.181.248s-12.743-.038-17.181-.248a30.757,30.757,0,0,1-10.114-1.943,20.409,20.409,0,0,1-7.391-4.8,20.661,20.661,0,0,1-4.8-7.391A30.757,30.757,0,0,1,.248,58.858C.057,54.42,0,52.991,0,41.677S.038,28.934.248,24.5A30.756,30.756,0,0,1,2.19,14.381a20.409,20.409,0,0,1,4.8-7.391,20.661,20.661,0,0,1,7.391-4.8A30.757,30.757,0,0,1,24.5.248C28.934.057,30.362,0,41.677,0,53.01,0,54.42.057,58.858.248Z"
                    transform="translate(24.516 24.514)"
                    fill="#fff"
                  />
                  <path
                    id="Vector-27"
                    data-name="Vector"
                    d="M42.819,21.41A21.41,21.41,0,1,1,21.41,0a21.4,21.4,0,0,1,21.41,21.41Zm-7.524,0A13.886,13.886,0,1,0,21.41,35.3,13.889,13.889,0,0,0,35.3,21.41Z"
                    transform="translate(44.782 44.8)"
                    fill="#fff"
                  />
                  <path
                    id="Vector-28"
                    data-name="Vector"
                    d="M10.019,5.01A5.01,5.01,0,1,1,5.01,0a5.01,5.01,0,0,1,5.01,5.01Z"
                    transform="translate(83.449 38.933)"
                    fill="#fff"
                  />
                </g>
              </g>
            </g>
          </g>
          <text
            id="If_you_are_looking_for_a_third-party_account_verification_service_that_specializes_in_verifying_social_media_accounts_there_are_various_companies_and"
            data-name="If you are looking for a third-party account verification service that specializes in verifying social media accounts, there are various companies and"
            transform="translate(288.442 350.99)"
            fill="#fff"
            fontSize="19.677"
            fontFamily="Roboto-Medium, Roboto"
            fontWeight={500}
            letterSpacing="-0.007em"
            // style={}
          >
            <tspan x={0} y={19}>
              {t("If you are looking for a third-party account verification service that specializes in verifying")}
              {/* {" "} */}
            </tspan>
            <tspan x={0} y={47}>
              {t("social media accounts, there are various companies and services available. These")}
              {/* {" "} */}
            </tspan>
            <tspan x={0} y={75}>
              {t("services are typically used by businesses, influencers, or individuals who want to")}
              {" "}
            </tspan>
            <tspan x={0} y={103}>
              {t("establish credibility and trust by verifying their social media accounts.")}
            </tspan>
          </text>
        </g>
      </g>
      <g id="S6_5_G1" >
        <g id="S6_4_G1">
          <g
            transform="matrix(1, 0, 0, 1, 0, -2699)"
            filter="url(#Rectangle_9588)"
          >
            <rect
              id="Rectangle_9588-2"
              data-name="Rectangle 9588"
              width={1004}
              height="152.219"
              rx="76.11"
              transform="translate(218 2822.56)"
            />
          </g>
          <g id="S6_4_G2_Snap" transform="translate(229.335 133.28)">
            <g id="Group-25" data-name="Group">
              <path
                id="Vector-29"
                data-name="Vector"
                d="M132.382,66.191A66.191,66.191,0,1,1,66.191,0,66.191,66.191,0,0,1,132.382,66.191Z"
                fill="#42a5f5"
              />
              <g id="Group-26" data-name="Group">
                <g id="Group-27" data-name="Group">
                  <path
                    id="Vector-30"
                    data-name="Vector"
                    d="M64.672,25.886c-.019,1.829-.114,3.638-.248,5.448-.019.3-.038.629-.038.933-.019.667.381.952,1.048.9a3.086,3.086,0,0,0,.724-.171c.667-.229,1.314-.476,1.981-.724a26.541,26.541,0,0,1,3.352-1.1,5.316,5.316,0,0,1,2.324-.1,2.811,2.811,0,0,1,2.019,3.886,4.111,4.111,0,0,1-.781,1.181,8.526,8.526,0,0,1-1.543,1.333c-.667.457-1.333.9-2.019,1.333-1.124.743-2.248,1.467-3.371,2.21-.457.3-.914.648-1.352.971a5.37,5.37,0,0,0-.686.629,2.19,2.19,0,0,0-.571,1.657,9.583,9.583,0,0,0,.3,1.771A22.054,22.054,0,0,0,68.158,51.3a29.749,29.749,0,0,0,6.933,7.867,38.8,38.8,0,0,0,7.581,4.781c.248.114.476.248.7.381a1.9,1.9,0,0,1,.457.419.719.719,0,0,1,.057.819,1.981,1.981,0,0,1-.533.59,6.693,6.693,0,0,1-.99.629,21.984,21.984,0,0,1-4.838,1.886c-.724.19-1.429.4-2.152.61a7.861,7.861,0,0,0-1.429.61,2.509,2.509,0,0,0-1.371,1.886c-.1.457-.152.933-.229,1.41a1.83,1.83,0,0,1-1.79,1.81,8.793,8.793,0,0,1-1.238.133c-1.029.057-2.057.076-3.1.133a27.144,27.144,0,0,0-6.876,1.219,13.76,13.76,0,0,0-2.7,1.2c-.914.533-1.81,1.067-2.724,1.619a29.9,29.9,0,0,1-4.457,2.3,19.615,19.615,0,0,1-5.41,1.257,24.254,24.254,0,0,1-4.7-.057,19.471,19.471,0,0,1-6.667-2.019c-.971-.5-1.924-1.067-2.857-1.638-.686-.419-1.371-.838-2.076-1.238a17.208,17.208,0,0,0-5.3-2.019,31.355,31.355,0,0,0-5.162-.648c-.914-.038-1.81-.076-2.724-.133a8.176,8.176,0,0,1-1.524-.229,1.62,1.62,0,0,1-1.3-1.333c-.076-.4-.152-.819-.21-1.219-.019-.076-.019-.171-.038-.248a2.833,2.833,0,0,0-1.714-2.343,11.567,11.567,0,0,0-1.924-.686c-1.124-.324-2.286-.59-3.391-.99A18.692,18.692,0,0,1,1.643,66.8c-.267-.152-.533-.3-.8-.476a3.12,3.12,0,0,1-.476-.4A.9.9,0,0,1,.481,64.4a6.09,6.09,0,0,1,.971-.552,39.388,39.388,0,0,0,6.686-4.114,30.109,30.109,0,0,0,7.486-8.191A23.042,23.042,0,0,0,18.1,46.1a7.82,7.82,0,0,0,.324-1.886,2.253,2.253,0,0,0-.61-1.638,5.2,5.2,0,0,0-.838-.743c-.857-.648-1.752-1.238-2.648-1.829L10.9,37.772a11.509,11.509,0,0,1-1.619-1.257,5.334,5.334,0,0,1-.933-1.143,2.977,2.977,0,0,1-.171-2.8A2.415,2.415,0,0,1,9.6,31.2a4.368,4.368,0,0,1,2.267-.19,14.218,14.218,0,0,1,2.629.743c.876.324,1.733.648,2.61.99a5.75,5.75,0,0,0,1.238.362,1.667,1.667,0,0,0,.3.038c.5-.019.914-.171.914-.857,0-.552-.038-1.124-.076-1.676a79.685,79.685,0,0,1-.152-9.048,32.1,32.1,0,0,1,.7-5.714,18.3,18.3,0,0,1,3.314-7.143A21.562,21.562,0,0,1,35.053.9,25.847,25.847,0,0,1,42.977.02a24.812,24.812,0,0,1,8.229,1.638A21.066,21.066,0,0,1,57.986,5.81a19.3,19.3,0,0,1,5.448,8.3,24.6,24.6,0,0,1,.952,4.533,51.343,51.343,0,0,1,.286,7.238Z"
                    transform="translate(24.32 24.705)"
                    fill="#fff"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
        <text
          id="If_you_are_looking_for_a_third-party_account_verification_service_that_specializes_in_verifying_social_media_accounts_there_are_various_companies_and-2"
          data-name="If you are looking for a third-party account verification service that specializes in verifying social media accounts, there are various companies and"
          transform="translate(389.651 144.522)"
          fill="#fff"
          fontSize="19.677"
          fontFamily="Roboto-Medium, Roboto"
          fontWeight={500}
          letterSpacing="-0.007em"
        >
          <tspan x={0} y={19}>
            {t("If you are looking for a third-party account verification service that specializes in verifying")}
            {/* {" "} */}
          </tspan>
          <tspan x={0} y={47}>
            {t("social media accounts, there are various companies and services available. These")}
            {/* {" "} */}
          </tspan>
          <tspan x={0} y={75}>
            {t("services are typically used by businesses, influencers, or individuals who want to")}
            {/* {" "} */}
          </tspan>
          <tspan x={0} y={103}>
            {t("establish credibility and trust by verifying their social media accounts.")}
          </tspan>
        </text>
      </g>
      <g id="S6_5_G3">
        <g id="S6_4_G33">
          <g
            transform="matrix(1, 0, 0, 1, 0, -2699)"
            filter="url(#S6_4_G3_Tik_R)"
          >
            <rect
              id="S6_4_G3_Tik_R-2"
              data-name="S6_4_G3_Tik_R"
              width={1004}
              height="152.219"
              rx="76.11"
              transform="translate(218 3245.22)"
            />
          </g>
          <g id="S6_4_G3_Tik" transform="translate(232.574 555.754)">
            <g id="Group-28" data-name="Group">
              <g id="Group-29" data-name="Group">
                <g id="Group-30" data-name="Group">
                  <path
                    id="Vector-31"
                    data-name="Vector"
                    d="M132.382,66.191A66.191,66.191,0,1,1,66.191,0,66.191,66.191,0,0,1,132.382,66.191Z"
                    fill="#42a5f5"
                  />
                </g>
                <path
                  id="Vector-32"
                  data-name="Vector"
                  d="M74.536,34.234c0,.781-.1.819-.876.819a32.383,32.383,0,0,1-7.3-.876A35.284,35.284,0,0,1,54.9,29.224c-.171-.114-.381-.381-.571-.286-.248.114-.114.438-.114.667,0,9.5.038,19.01-.019,28.5a26.54,26.54,0,0,1-6.5,17.638,26.64,26.64,0,0,1-17.524,9.352,26.841,26.841,0,0,1-15.467-2.724A13.645,13.645,0,0,1,12.46,81c-.229-.19-.438-.4-.667-.59a6.621,6.621,0,0,1-1.41-.971A26.773,26.773,0,0,1,1.26,66.31,26.094,26.094,0,0,1,.117,60.634,25.659,25.659,0,0,1,.06,56.443a26.483,26.483,0,0,1,2.3-9.257,26.988,26.988,0,0,1,15.448-14.3,26.55,26.55,0,0,1,7.181-1.524,27.705,27.705,0,0,1,5.333.114c.248.038.381.076.381.362-.019.99-.019,1.962-.019,2.952.019.019.152,7.486.152,10.914v.362c-.019.343-.19.457-.514.362a13.123,13.123,0,0,0-2.857-.438,11.043,11.043,0,0,0-4.381.648c-4.7,1.752-7.562,5.1-8.152,10.076-.59,4.9,1.333,8.8,5.41,11.619a12.235,12.235,0,0,1,1.01.724c.076.076.152.133.229.21a15.614,15.614,0,0,0,2.9.952A12.375,12.375,0,0,0,39.2,60.1a11.173,11.173,0,0,0,.152-2.114V.786c0-.9-.114-.781.762-.781H53.6c.457,0,.457,0,.457.457a29.753,29.753,0,0,0,.457,3.6C56.4,13.7,67.641,19.6,71.108,20.119a20.683,20.683,0,0,0,2.876.248c.4,0,.419.019.419.4,0,.9.171,10.114.133,13.467Z"
                  transform="translate(28.893 23.557)"
                  fill="#fff"
                />
              </g>
            </g>
          </g>
        </g>
        <text
          id="If_you_are_looking_for_a_third-party_account_verification_service_that_specializes_in_verifying_social_media_accounts_there_are_various_companies_and-3"
          data-name="If you are looking for a third-party account verification service that specializes in verifying social media accounts, there are various companies and"
          transform="translate(389.651 567.174)"
          fill="#fff"
          fontSize="19.677"
          fontFamily="Roboto-Medium, Roboto"
          fontWeight={500}
          letterSpacing="-0.007em"
        >
          <tspan x={0} y={19}>
            {t("If you are looking for a third-party account verification service that specializes in verifying")}
            {/* {" "} */}
          </tspan>
          <tspan x={0} y={47}>
            {t("social media accounts, there are various companies and services available. These")}
            {/* {" "} */}
          </tspan>
          <tspan x={0} y={75}>
            {t("services are typically used by businesses, influencers, or individuals who want to")}
            {/* {" "} */}
          </tspan>
          <tspan x={0} y={103}>
            {t("establish credibility and trust by verifying their social media accounts.")}
          </tspan>
        </text>
      </g>
     </g>
    </g>
    <g id="Group_10" data-name="Group 10" transform="translate(19 3607.564)">
      <g id="BackGround_S6_6">
        <g id="BG_S6_6">
          <rect
            id="BG_S6_666"
            width={1600}
            height={1037}
            transform="translate(-20 -144.564)"
          />
          <g
            id="Mask_Group_3"
            data-name="Mask Group 3"
            transform="translate(-20 -144.564)"
            clipPath="url(#clip-path-7)"
          >
            <image
              id="ALkalb_Ibra"
              className='ALkalb_Ibra'
              width={1139}
              height={1071}
              transform="translate(593 -131)"
              xlinkHref="../Drag/aaa.webp"
              opacity={.6}
            />
            <rect
              id="Rectangle"
              width={1600}
              height={824}
              opacity="0.25"
              fill="url(#patternDrage_Bg-9)"
              style={{ mixBlendMode: "overlay", isolation: "isolate" }}
            />
          </g>
        </g>
        <path
          id="Polygon6_S6_6"
          d="M748.99,403.415h0Z"
          transform="translate(1469.004 20.93) rotate(60.27)"
          fill="#baff2e"
        />
        <g id="Card_S6_6">
          <path
            id="Path_15_2"
            data-name="Path_15"
            d="M491.767,145.3c75.7,33.638,104.459,126.238,61.138,196.842L317.1,726.462c-67.835,110.56-237.06,73.7-252.764-55.061L1.264,154.265C-11.622,48.613,95.626-30.738,192.89,12.484Z"
            transform="translate(1085.793 158.974)"
            fill="#baff2e"
            className='Path_15_2'
            
          />
          <rect
            id="BG_S6_6-2"
            data-name="BG_S6_6"
            width={307}
            height="385.014"
            rx="7.224"
            transform="translate(997 147.993)"
            fill="rgba(0,0,0,0.7)"
          />
          <line
            id="Line3_S6_6"
            x2={307}
            transform="matrix(1, 0, 0, 1, 997, 281.628)"
            fill="none"
            stroke="#6ddcff"
            strokeWidth="0.722"
          />
          <line
            id="Line4_S6_6"
            x2={307}
            transform="matrix(1, 0, 0, 1, 997, 403.706)"
            fill="none"
            stroke="#6ddcff"
            strokeWidth="0.722"
          />
          <g id="_1_S6_6" data-name="1_S6_6">
            <text
              id="_2M_"
              data-name="2M+"
              transform="translate(1031.673 173.165)"
              fill="#fff"
              fontSize="43.341"
              fontFamily="SegoeUI, Segoe UI"
            >
              <tspan x={0} y={47}>
                2M+
              </tspan>
            </text>
            <text
              id="Tickets_Delivered_This_Month"
              data-name="Tickets Delivered This Month"
              transform="translate(1031.673 233.786)"
              fill="#a1a1aa"
              fontSize="13.002"
              fontFamily="Inter-Regular, Inter"
            >
              <tspan x={0} y={13}>
                {t("Tickets Delivered This Month")}
              </tspan>
            </text>
          </g>
          <g id="_2_S6_6" data-name="2_S6_6">
            <text
              id="_46K_"
              data-name="46K+"
              transform="translate(1031.673 295.687)"
              fill="#fff"
              fontSize="43.341"
              fontFamily="SegoeUI, Segoe UI"
            >
              <tspan x={0} y={47}>
                46K+
              </tspan>
            </text>
            <text
              id="Active_Customers_Rate"
              data-name="Active Customers Rate"
              transform="translate(1031.673 357.308)"
              fill="#a1a1aa"
              fontSize="13.002"
              fontFamily="Inter-Regular, Inter"
            >
              <tspan x={0} y={13}>
                {t("Active Customers Rate")}
              </tspan>
            </text>
          </g>
          <g id="_3_S6_6" data-name="3_S6_6">
            <text
              id="_99_"
              data-name="99%"
              transform="translate(1031.673 419.21)"
              fill="#fff"
              fontSize="43.341"
              fontFamily="SegoeUI, Segoe UI"
            >
              <tspan x={0} y={47}>
                99%
              </tspan>
            </text>
            <text
              id="Customer_Satisfaction_Rate"
              data-name="Customer Satisfaction Rate"
              transform="translate(1031.673 480.831)"
              fill="#a1a1aa"
              fontSize="13.002"
              fontFamily="Inter-Regular, Inter"
            >
              <tspan x={0} y={13}>
                {t("Customer Satisfaction Rate")}
              </tspan>
            </text>
          </g>
        </g>
      </g>
      <rect
        id="holding-smartphone"
        width={433}
        height={529}
        transform="translate(31 123)"
        fill="url(#patternDrage_Bg-10)"
        className='Mobile_image9'

      />
      <g id="Content_S6_6" className='Content_S6_6'>
        <text
          id="h1_S6_6"
          transform="translate(422 186)"
          fill="#fff"
          fontSize={60}
          fontFamily="SegoeUI, Segoe UI"
        >
          <tspan x={0} y={65}>
            {t("Numbers are")}
            {/* {" "} */}
          </tspan>
          <tspan x={0} y={131}>
            {t("telling our story")}
          </tspan>
        </text>
        <text
          id="S6_6_p"
          transform="translate(422 356)"
          fill="#a1a1aa"
          fontSize={18}
          fontFamily="Inter-Regular, Inter"
        >
          <tspan x={0} y={17}>
            {t("Amet minim mollit non deserunt ullamco est sit")}
            {/* {" "} */}
          </tspan>
          <tspan x={0} y={45}>
            {t("aliqua dolor do amet sint. Velit officia consequat")}
            {/* {" "} */}
          </tspan>
          <tspan x={0} y={73}>
            {t("duis enim velit mollit.")}
          </tspan>
        </text>
      </g>
    </g>
  </g>
</svg>

  )
}

export default Drage_Bg