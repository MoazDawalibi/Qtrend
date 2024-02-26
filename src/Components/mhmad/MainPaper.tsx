import React from 'react'
import { BaseURL } from '../../api/config'
import { useRouter } from 'next/navigation'
import { useTranslation } from 'react-i18next'



const MainPaper = ({ quick_overview, id, image, name, is_odd }) => {
    const router = useRouter()
    const stringFromBack = quick_overview
    const {t} = useTranslation(); 

    const TextWordToArray = stringFromBack.split(' ')
    const TextWordLength = TextWordToArray.length
    const first_text = TextWordToArray.slice(0, 2);
    const second_text = TextWordToArray.slice(2, TextWordLength).join(' ');

    const name1 = name.split(' ').slice(0, 1)
    const name2 = name.split(' ').slice(1, name.length).length > 13 ? name.split(' ').slice(1, name.length) + '..' : name.split(' ').slice(1, name.length)


    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
           
            viewBox="0 0 370 456"
            className='MainPaper'
            style={{ display: "inline" }}

        >
            <defs>
                <filter
                    id="Rectangle_9625"
                    x={0}
                    y={0}
                    width={370}
                    height={456}
                    filterUnits="userSpaceOnUse"
                >
                    <feOffset dy={11} />
                    <feGaussianBlur stdDeviation={13} result="blur" />
                    <feFlood floodOpacity="0.251" />
                    <feComposite operator="in" in2="blur" />
                    <feComposite in="SourceGraphic" />
                </filter>
            </defs>
            <g id="Main_Paper" transform="translate(5880 -1607)">
                <g
                    id="Paper_Prints_Section"
                    data-name="Paper Prints Section"
                    transform="translate(-5841 1619)"
                >
                    <g id="Group_237700" data-name="Group 237700">
                        <g
                            transform="matrix(1, 0, 0, 1, -39, -12)"
                            filter="url(#Rectangle_9625)"
                        >
                            <rect
                                id="Rectangle_9625-2"
                                data-name="Rectangle 9625"
                                width={292}
                                height={378}
                                rx={8}
                                transform="translate(39 28)"
                                fill={is_odd ? "black" : "white"}
                            />
                        </g>
                    </g>
                    <text
                        id="PAINTING_STICKERS"
                        data-name="PAINTING & STICKERS"
                        transform="translate(16 183)"
                        fill={!is_odd ? "black" : "white"}
                        fontSize={27}
                        fontFamily="Poppins-Black, Poppins"
                        fontWeight={800}
                    >
                        <tspan style={{fontFamily:"BPoppins"}} x={0} y={28}>
                            {name1}{" "}
                        </tspan>
                        <tspan style={{fontFamily:"BPoppins"}} x={0} y={56}>
                            {name2}
                        </tspan>
                    </text>
                    <text
                        id="Top_quality_paper_prints_in_Qatar"
                        data-name="Top quality paper prints in Qatar"
                        transform="translate(19 256.302)"
                        fill={!is_odd ? "black" : "white"}
                        fontSize={18}
                        fontFamily="Poppins-Regular, Poppins"
                    >
                        <tspan x="0" dy="1.2em">{first_text.join(' ')}</tspan>
                        <tspan x="0" dy="1.2em">{second_text.length > 29 ? second_text.slice(0, 29) + '...' : second_text}</tspan>
                    </text>
                    <g id="View_All" data-name="View All" transform="translate(19 333)" onClick={()=>router.push("PrintCategory?category_id="+id+"&" + "index="+(is_odd?1:0)+"")}>
                        <rect
                            id="Rectangle_9627"
                            data-name="Rectangle 9627"
                            width={124}
                            height={38}
                            rx={12}
                            
                     fill={!is_odd ? "black" : "white"}
                        />
                        <text
                            id="VIEW_ALL-2"
                            data-name="VIEW ALL"
                            transform="translate(0 4.96)"
                    fill={is_odd ? "black" : "white"}
                            fontSize={20}
                            fontFamily="Poppins-Black, Poppins"
                            fontWeight={800}
                        >
                            <tspan x="20" y={21}>
                                {t("VIEW ALL")}
                            </tspan>
                        </text>
                    </g>
                </g>
                <g id="Group_4" data-name="Group 4" transform="translate(-5737 1613.762)">
                    <path
                        id="Path_15"
                        data-name="Path 15"
                        d="M15,19.242a8,8,0,0,1,9.937-7.762l157,39.187A8,8,0,0,1,188,58.429v252.1a8,8,0,0,1-13.88,5.425l-157-170.182A8,8,0,0,1,15,140.349Z"
                        fill="#c4fd14"
                    />
                </g>
                <image
                    id="Image"
                    width={125}
                    height={138}
                    transform="translate(-5694 1663)"
        xlinkHref={BaseURL + image}
                />
                <g id="Left_Btn" transform="translate(-5861 1611.762)">
                    <rect
                        id="Rectangle_3"
                        data-name="Rectangle 3"
                        width={34}
                        height={34}
                        rx={17}
                        transform="translate(237 377) rotate(180)"
                        fill={is_odd ? "#898989" : "black"}
                        // fill="#898989"
                    />
                    <path
                        id="Path_6"
                        data-name="Path 6"
                        d="M214.815,359.3l7.225-7.225a1.223,1.223,0,0,1,1.806,0l1.222,1.169a1.316,1.316,0,0,1,0,1.806l-5.153,5.1,5.153,5.153a1.316,1.316,0,0,1,0,1.806l-1.222,1.222a1.316,1.316,0,0,1-1.806,0l-7.225-7.225A1.316,1.316,0,0,1,214.815,359.3Z"
                        fill="#edf1f4"
                    />
                </g>
                <g id="Right_Btn" transform="translate(-5861 1611.762)">
                    <rect
                        id="Rectangle_4"
                        data-name="Rectangle 4"
                        width={34}
                        height={34}
                        rx={17}
                        transform="translate(245 343)"
                        fill={is_odd ? "#898989" : "black"}
                    />
                    <path
                        id="Path_7"
                        data-name="Path 7"
                        d="M267.185,360.7l-7.225,7.225a1.223,1.223,0,0,1-1.806,0l-1.222-1.169a1.316,1.316,0,0,1,0-1.806l5.153-5.1-5.153-5.153a1.316,1.316,0,0,1,0-1.806l1.222-1.222a1.316,1.316,0,0,1,1.806,0l7.225,7.225A1.316,1.316,0,0,1,267.185,360.7Z"
                        fill="#edf1f4"
                    />
                </g>
            </g>
        </svg>

    )
}

export default MainPaper