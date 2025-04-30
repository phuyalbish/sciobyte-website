import axios from "axios";
import { BASE_API_URL } from "@/config/baseurl.js";

export const fetchFAQs = async () => {
    try{
        const response = await axios({
            url: `${BASE_API_URL}/faqs/all/`,
            method: "GET"
        });
        return response;
    }catch(error){
        console.log("Error while fetching trek data: ", error);
    }
}

export const fetchHomeFAQs = async () => {
    try{
        const response = await axios({
            url: `${BASE_API_URL}/faqs/home/`,
            method: "GET"
        });
        return response;
    }catch(error){
        console.log("Error while fetching trek data: ", error);
    }
}