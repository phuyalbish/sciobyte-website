import axios from 'axios';
import { BASE_API_URL } from "@/config/baseurl.js";
export const getExchangeRates = async () => {
  try {
    const response = await axios({
      url: `${BASE_API_URL}/exchangerate/`,
      method: "GET",
    });
    return response.data.results;
  } catch (error) {
    console.log("Error while fetching Currency data: ", error);
  }
}


