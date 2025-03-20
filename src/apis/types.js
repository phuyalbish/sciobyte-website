import axios from "axios";
import { BASE_API_URL } from "@/config/baseurl.js";
export const fetchTypes = async () => {
  try {
    const response = await axios({
      url: `${BASE_API_URL}/types/all/`,
      method: "GET",
    });
    return response;
  } catch (error) {
    console.log("Error while fetching types data: ", error);
  }
};
export const fetchIndivisualTypes = async (id) => {
  try {
    const response = await axios({
      url: `${BASE_API_URL}/types/${id}/`,
      method: "GET",
    });
    return response.data;
  } catch (error) {
    console.log("Error while fetching type data: ", error);
  }
};
