"use Client"
import React from 'react'
import useManageCart from '../../zustand/cart'
import { useTranslation } from 'react-i18next'
import { useGetProduct } from '../../api/product';


const Moaz = ({ price, quantity, handelAddTocart}) => {
  const {t} = useTranslation();
  return (
    <svg
      className='Moaz'
      xmlns="http://www.w3.org/2000/svg"
      width="327.825"
      height="55.11"
      viewBox="0 0 327.825 55.11"
    >
      <g id="Moaz" transform="translate(-3004 186)">
        <g id="Group_3" data-name="Group 3" transform="translate(2988.293 -197)">
          <g id="Group_1" data-name="Group 1">
            <path
              id="Path_8"
              data-name="Path 8"
              d="M335.6,11a7.92,7.92,0,0,1,6.991,11.642l-20.907,39.27a7.918,7.918,0,0,1-6.991,4.2H168.263c-8.6,0-11.036-11.776-3.144-15.189l90.794-39.27A7.923,7.923,0,0,1,259.057,11Z"
              fill="#c4fd14"
              onClick={handelAddTocart} />
          </g>
          <path
            id="Path_10"
            data-name="Path 10"
            d="M253.846,58.711a2.564,2.564,0,1,0-2.564-2.564A2.564,2.564,0,0,0,253.846,58.711Z"
          />
          <path
            id="Path_11"
            data-name="Path 11"
            d="M267.806,58.711a2.564,2.564,0,1,0-2.565-2.564A2.564,2.564,0,0,0,267.806,58.711Z"
          />
          <path
            id="Path_12"
            data-name="Path 12"
            d="M267.182,50.919a10.889,10.889,0,0,1-7.593-3.1h-9.237a.99.99,0,1,1,0-1.98h7.633a10.816,10.816,0,0,1-1.525-3.96h-8.088a.99.99,0,1,1,0-1.98h7.92a10.885,10.885,0,0,1,.792-3.96H246.748l-1.435-4.554A1.982,1.982,0,0,0,243.422,30h-6.831a2.039,2.039,0,0,0-1.98,1.327,1.98,1.98,0,0,0,1.881,2.633h5.475l5.5,17.424a1.846,1.846,0,0,0,.376.653,1.672,1.672,0,0,0,1.4.733h21.592a1.515,1.515,0,0,0,1.475-1.247l.436-2.148A10.825,10.825,0,0,1,267.182,50.919Z"
          />
          <path
            id="Path_13"
            data-name="Path 13"
            d="M267.182,30.991a8.911,8.911,0,1,0,6.3,2.61A8.91,8.91,0,0,0,267.182,30.991Zm3.96,9.9h-2.97v2.97a.99.99,0,1,1-1.98,0v-2.97h-2.97a.99.99,0,0,1,0-1.98h2.97v-2.97a.99.99,0,0,1,1.98,0v2.97h2.97a.99.99,0,1,1,0,1.98Z"
          />
          <g id="Group_2" data-name="Group 2">
            <path
              id="Path_14"
              data-name="Path 14"
              d="M23.631,66a7.92,7.92,0,0,1-7.686-9.831l9.739-39.16A7.92,7.92,0,0,1,33.37,11H202.261c8.476,0,11.028,11.518,3.346,15.1L126.026,63.191A30,30,0,0,1,113.352,66Z"
              fill="#d0d0d0"
            />
          </g>
        </g>
        <text
          id="Add_to_Chart"
          data-name="Add to Chart"
          transform="translate(3244.5 -183.88)"
          fontSize={12}
          onClick={handelAddTocart} 
          fontFamily="Poppins-Regular, Poppins"
        >
          <tspan x={0} y={13}>
            {/* text */}
            {t("Add to Cart")}
          </tspan>
        </text>
        <text
          id="_000.00_Qr"
          data-name="000.00 Qr"
          transform="translate(3005 -177.48)"
          fill="#323232"
          fontSize={24}
          fontFamily="SegoeUI-Bold, Segoe UI"
          fontWeight={700}
        >
          <tspan x="25" y={27}>
          {" "}
            {/* <span> */}
            {price * (quantity ||1  )}
            {/* </span> */}
          </tspan>
          <tspan y={26} fontSize={18}>
          {" "}Qr
          </tspan>
        </text>
      </g>
    </svg>

  )
}

export default Moaz