import axios from "axios";
import { BASE_API_URL } from "@/config/baseurl.js";

export const fetchData = async (url, page = 1) => {
  const fullUrl = BASE_API_URL + url;
  try {
    const config = {
      method: "GET",
      url: fullUrl,
      params: {
        page: page,
        page_size: 10,
      },
    };
    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    throw error;
  }
};