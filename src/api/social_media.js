
import {useGetQuery} from  './helpers/useGetQuery'

const KEY = 'SOCIAL_MEDIA'



const API = {
    GET :`api/all-social-media`
}


export const useGetAllSocialMedia = ()=> useGetQuery(KEY , API.GET)