import { useGetQuery } from "./helpers/useGetQuery";


export const useGetSlider =  ()=> useGetQuery("SLIDER" , '/api/slider')