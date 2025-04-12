import axios from "axios";
import { BASE_API_URL } from "@/config/baseurl.js";
export const fetchRegions = async () => {
  try {
    const response = await axios({
      url: `${BASE_API_URL}/regions/all/`,
      method: "GET",
    });
    return response;
  } catch (error) {
    console.log("Error while fetching regions data: ", error);
  }
};


export const fetchHomeRegions = async () => {
  try {
    const response = await axios({
      url: `${BASE_API_URL}/regions/home/`,
      method: "GET",
    });
    return response;
  } catch (error) {
    console.log("Error while fetching regions data: ", error);
  }
};

export const fetchIndivisualRegions = async (id) => {
  try {
    const response = await axios({
      url: `${BASE_API_URL}/regions/${id}/`,
      method: "GET",
    });
    return response.data;
  } catch (error) {
    console.log("Error while fetching region data: ", error);
  }
};
