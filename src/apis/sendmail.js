import axios from "axios";
import { BASE_API_URL } from "@/config/baseurl.js";

export const sendMail = async (formData) => {
    try {
        const response = await axios({
            url: `${BASE_API_URL}/contact/create/`,
            method: "post",
            data: formData
        })
        return response;
    } catch {
        console.error("Error sending email");
    }
}


export const sendCreateMail = async (formData) => {
    // try {
    //     const response = await axios({
    //         url: `${BASE_API_URL}/contact/create/`,
    //         method: "post",
    //         data: formData
    //     })
    //     return response;
    // } catch {
    //     console.error("Error sending email");
    // }

    console.log(formData)
    return "successful"
}