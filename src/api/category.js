import {useGetQuery} from './helpers/useGetQuery'



const KEY = "CATEGORY";



const API = {
    GET:`api/categories?level=1`,
    GET2:`api/category/products`,
    GET3:`api/search_product`,
}

export const useGetAllCategory = ()=> useGetQuery(KEY  , API.GET)
export const useGetAllProductForCategory = (params)=> useGetQuery(KEY  , API.GET2 ,params)
export const useGetAllProductWithSearch = (params)=> useGetQuery(KEY  , API.GET3 ,params)