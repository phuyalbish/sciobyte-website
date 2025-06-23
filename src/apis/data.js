import axios from "axios";
import { BASE_API_URL } from "@/config/baseurl.js";


export const fetchData = async (slug) => {
  try {
    const response = await axios({
      url: `${BASE_API_URL}/${slug}/`,
      method: "GET",
    });
    return response;
  } catch (error) {
    console.log("Error while fetching blog data: ", error);
  }
}
