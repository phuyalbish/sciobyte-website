import axios from "axios";
import { BASE_API_URL } from "@/config/baseurl.js";
export const fetchCategories = async () => {
  try {
    const response = await axios({
      url: `${BASE_API_URL}/categories/all/`,
      method: "GET",
    });
    return response;
  } catch (error) {
    console.log("Error while fetching types data: ", error);
  }
};
export const fetchIndivisualCategories = async (id) => {
  try {
    const response = await axios({
      url: `${BASE_API_URL}/categories/${id}/`,
      method: "GET",
    });
    return response.data;
  } catch (error) {
    console.log("Error while fetching type data: ", error);
  }
};


export const fetchIndivisualNavCategories = async (id) => {
  try {
    const response = await axios({
      url: `${BASE_API_URL}/categories/nav/${id}/`,
      method: "GET",
    });
    return response.data;
  } catch (error) {
    console.log("Error while fetching type data: ", error);
  }
};
