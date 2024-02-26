
'use client'
import axios from "axios";
import { BaseURL } from "../config";
export const useAxios = () => {


  return axios.create({

    baseURL:BaseURL,
  });
};
