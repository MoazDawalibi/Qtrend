import {useAddMutation} from '../helpers/useAddMutation'
import {useGetQuery} from '../helpers/useGetQuery'

const API = {
    SEND_MESSAGE: `/api/send`,
    GET: `/api/static-informations`,
};


const KEY = 'SEND_MESSAGE'
const KEY2 = 'STATIC_INFO'

export const useSendMessage = () => useAddMutation(KEY, API.SEND_MESSAGE);

export const useGetALlStatics = () => useGetQuery(KEY2, API.GET); 