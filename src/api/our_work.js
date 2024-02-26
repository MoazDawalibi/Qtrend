import { useGetQuery } from "./helpers/useGetQuery"



const KEY = 'OUR_WORKS'


const API = {
    GET:`api/all-projects`
}


export const useGetAllOurWorks = ()=> useGetQuery(KEY,  API.GET)