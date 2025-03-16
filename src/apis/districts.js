import axios from "axios";
import { BASE_API_URL } from "@/config/baseurl.js";
export const fetchDistricts = async () => {
  try {
    const response = await axios({
      url: `${BASE_API_URL}/districts/all/`,
      method: "GET",
    });
    return response;
  } catch (error) {
    console.log("Error while fetching districts data: ", error);
  }
};
export const fetchIndivisualDistricts = async (id) => {
  try {
    const response = await axios({
      url: `${BASE_API_URL}/districts/${id}/`,
      method: "GET",
    });
    return response.data;
  } catch (error) {
    console.log("Error while fetching district data: ", error);
  }
};
