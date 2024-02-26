"use client"

import React, { useEffect, useState } from 'react';
import {LuMail} from 'react-icons/lu'
import{FaMobileAlt}from 'react-icons/fa'
import {MdLocationOn} from 'react-icons/md'
import NavBar from '../../Components/Utils/NavBar';
import Footer from '../../Components/Utils/Footer';
import Gradian from './Gradian';
import MeatUS_BG from './MeatUS_BG';
import { useTranslation } from 'react-i18next';
import { useGetALlStatics, useSendMessage } from '../../api/ContactUs/Contact';
import { errors,Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useRef } from 'react';
import { toast } from "react-toastify";
import {Spinner} from "../../Components/LoadingSpinner/Spinner.js"


const validationSchema = Yup.object().shape({
  companyName: Yup.string()
  .required("Required"),
  phoneNumber: Yup.string().required("Required"),
  message: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const MeetUs = () => {
  const [gradianClass, setGradianClass] = useState('Geadian_On_1');
    const [t] = useTranslation()
  useEffect(() => {
    const intervalId = setInterval(() => {
      setGradianClass((prevClass) => {
        if (prevClass === 'Geadian_On_1') return 'Geadian_On_2';
        else if (prevClass === 'Geadian_On_2') return 'Geadian_On_3';
        else return 'Geadian_On_1';
      });
    }, 4000);
    return () => clearInterval(intervalId);
  }, []);

  const {data  , isError}  = useGetALlStatics()
  // console.log(data);

  const {mutate , isSuccess, isLoading} = useSendMessage()
  const ref = useRef()
  const handelSubmit = (values) => {

    values['name'] = values['companyName']
    values['phone'] = values['phoneNumber']
    values['content'] = values['message']
    let ValueContainer = {...values}
    mutate(ValueContainer)
    values['companyName'] =""
    values['email'] =""
    values['phoneNumber'] =""
    ref.current.value= "" 
    console.log(values);
  };
  return (
    <>
    {/* <Spinner/> */}
      <div className='MeetUs'>
        <NavBar />
        <div className={`MeetUs_BG ${gradianClass} BG_Animation`} id='MeetUs_BG'>
          <MeatUS_BG />
          <Gradian />
        </div>
        <div className='MEET_US_WORD'>
            <h6 className='Meet_WORD'>{t("MEET")}</h6>
            <h6 className='US_WORD'>{t("US")}</h6>
        </div>
        <div className='MeetUs_mid_section'>
          
          <div className='MeetUs_mid_section_left'>
            <h1>{t("Contact us")} </h1>
            <h2>
              {t("Don not hesitate to get in touch - we are here to answer")}<br /> {t("your questions and provide guidance.")}
            </h2>
            <h3>
              {t("Getting in touch with our company is the first step towards unlocking new possibilities")}
              <br />
              {t("for your business. Whether you a9re seeking innovative solutions, exploring collaboration opportunities")}
            {t("or simply looking for expert guidance, our team is here to help.")}
            </h3>
            <div className='MeetUs_info'>
          <div className='MeetUs_info_1'>
            <a href='https://www.FaMobileAlt.com/' aria-label="FaMobileAlt" target="_blank" rel="noopener">
            <FaMobileAlt/>
            </a>
         
          <p>{data?.find(static_info => static_info.key == 'phone')?.value}</p>
          </div>
          <div className='MeetUs_info_2'>
          <a href='https://www.LuMail.com/' aria-label="LuMail" target="_blank" rel="noopener">
          <LuMail/>
            </a>
         
          <p>{data?.find(static_info => static_info.key == 'email')?.value}</p>
          </div>
          <div className='MeetUs_info_3'>
          <a  href='https://www.MdLocationOn.com/' aria-label="MdLocationOn" target="_blank" rel="noopener">
          <MdLocationOn/>
            </a>
         
          <p>{data?.find(static_info => static_info.key == 'location')?.value}</p>
          </div>
          
        </div>
          </div>
          <Formik
                initialValues={{
                  // console.log(name);
                  companyName: "",
                  email: "",
                  phoneNumber: "",
                  message: "",
                }}
                onSubmit={handelSubmit}
                validationSchema={validationSchema}
              >
                {({ errors, setFieldValue }) => (

          <Form className='MeetUs_mid_section_right'>
            <Field type='text'  placeholder={t('Company Name')} name='companyName' />
            <Field type='email' placeholder={t('Email')} name='email'/>
            <Field type='text' placeholder={t('phone_number')} name='phoneNumber' autoComplete='on' />
               <textarea
                    ref={ref}
                    required="required"
                    defaultValue={""}
                    onChange={(e) =>
                      setFieldValue("message", e.target.value)
                    }            
                 placeholder={t('Message')} 
                />
            <div>
                {isLoading  ? ". . ." :<button type='submit' >{t("send_message")}</button>}
            </div>
          </Form>
            )}
      </Formik>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MeetUs;
