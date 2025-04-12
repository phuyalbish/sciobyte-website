import axios from "axios";
import { BASE_API_URL } from "@/config/baseurl.js";
export const fetchTreks = async () => {
  try {
    const response = await axios({
      url: `${BASE_API_URL}/treks/all/`,
      method: "GET",
    });
    return response;
  } catch (error) {
    console.log("Error while fetching trek data: ", error);
  }
};


export const fetchHomeTreks = async () => {
  try {
    const response = await axios({
      url: `${BASE_API_URL}/treks/home/`,
      method: "GET",
    });
    return response;
  } catch (error) {
    console.log("Error while fetching trek data: ", error);
  }
};


export const fetchIndivisualTrek = async (id) => {
  try {
    const response = await axios({
      url: `${BASE_API_URL}/treks/${id}/`,
      method: "GET",
    });
    return response.data;
  } catch (error) {
    console.log("Error while fetching trek data: ", error);
  }
};
