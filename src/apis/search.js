import axios from "axios";
import { BASE_API_URL } from "@/config/baseurl.js";

export const fetchSearch = async (text) => {
  try {
    const response = await axios({
      url: `${BASE_API_URL}/search/${text}/`,
      method: "GET",
    });
    return response;
  } catch (error) {
    console.log("Error while fetching blog data: ", error);
  }
};
