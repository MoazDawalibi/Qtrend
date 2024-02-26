
import {useAddMutation} from './helpers/useAddMutation'

export const  useCheckout = ()=> useAddMutation("CHECKOUT" , 'order/checkout')