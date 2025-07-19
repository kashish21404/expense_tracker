import axios from "axios";
import {BASE_URL} from "./apiPaths";

const axiosInstance=axios.create({
    baseURL:BASE_URL,
    timeout:10000,
    headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
    }
});

axiosInstance.interceptors.request.use(
    (config)=>{
        const accessToken=localStorage.getItem("token");
        if(accessToken){
            config.headers.Authorization=`Bearer ${accessToken}`;
        }
        return config;
    },
    (error)=>{
        return Promise.reject(error);
    }
);

//Response Intercepter
axiosInstance.interceptors.response.use(
   (response)=>{
    return response;
   },
   (error)=>{
    //Handles common errors globally
    if(error.response){
        if(error.response.status===401){
            //Redirect to login page
            window.location.href="/login";
        } else if(error.response.status===500){
            console.log("Server error.Please try again.");
        }
    }
    else if(error.code==="ECONNABORTED"){
        console.log("Request timeout.Please try agin later.");
    }
    return Promise.reject(error);
   }
);

export default axiosInstance;