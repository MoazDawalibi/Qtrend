
import * as Yup from "yup";

export const initalValue = {
    buyer_info :"",
    name:"",
    phone:"",
    note:""

}


export const Schema = Yup.object().shape({
 
      name: Yup.string()
      .required('Required'),
      phone: Yup.string().required('Required')
    //   note: Yup.string().required('Required'),

  });
  