"use client"
import { useRouter } from 'next/navigation'
// import useHover from "@/hooks/useHover";
import useHover from "../../hooks/useHover"


const Services_Cards = ({ Key, Word1, Word2 ,t,className=""}) => {
    const { isHovered, handleMouseEnter, handleMouseLeave } = useHover();
    const isHoveredClassName = isHovered ? `Card_1 Card_1_Hovered` : `Card_1`;
    const router = useRouter()
    const GoTOServicse = () => {
        if(Key < 5){
            router.push(`/services?param=${Key}`)

        }
        if(Key == 5){
            router.push(`/FifthService`)
  
        }
        if(Key == 6){
            router.push(`/drag`)
  
        }

      
    }
    return (
        <div className='Services_Cards'>
            <div className={`Main_Card Key_${Key}`}>
                <div
                    className={isHoveredClassName}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {/* <h4>Ibra is Trash</h4> */}
                    <img src={`../Home/2+3/Services_Card/CARD${Key}.webp`} alt="" />
                </div>
                <div
                    className="Card_2"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className={"Card_2_Top " +className}>

                        <h1>{Key}</h1>
                        <div className="Card_2_Top_Word">
                            <h2>{t(Word1)}</h2>
                            <h3>{t(Word2)}</h3>

                        </div>
                    </div>
                    <div className="Card_2_Down">
                        <button onClick={GoTOServicse}>{t("Know More")}</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Services_Cards