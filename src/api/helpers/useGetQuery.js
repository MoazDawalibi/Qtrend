'use client'


import { useQuery } from "react-query";
import { useAxios } from "./useAxios";
import { useTranslation } from "react-i18next";



export const useGetQuery = (key, url, params = null, options = {}) => {
  const axios = useAxios();
const {t} = useTranslation()

  return useQuery(
    params ? [key, params] : key,
    async () => {
      const { data } = await axios.get(url, { params });
      return data.data;
    },
    {
      retry:false,
      refetchOnWindowFocus:false ,     
      ...options
    }
  );
};
