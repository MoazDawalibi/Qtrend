import {useGetQuery} from './helpers/useGetQuery'


const KEY = "PRODUCT";

const API = {
    GET:`api/get_product`,
}
export const useGetProduct = (params)=> useGetQuery(KEY , API.GET ,params)