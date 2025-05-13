

import axios from "axios";
import { BASE_API_URL } from "@/config/baseurl.js";
export const fetchEvents = async () => {
  try {
    const response = await axios({
      url: `${BASE_API_URL}/upcomingevents/all/`,
      method: "GET",
    });
    return response;
  } catch (error) {
    console.log("Error while fetching event data: ", error);
  }
};
