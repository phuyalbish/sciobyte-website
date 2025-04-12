import axios from "axios";
import { BASE_API_URL } from "@/config/baseurl.js";


export const fetchReviews = async () => {
  try {
    const response = await axios({
      url: `${BASE_API_URL}/reviews/all/`,
      method: "GET",
    });
    return response;
  } catch (error) {
    console.log("Error while fetching regions data: ", error);
  }
};
