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





export const fetchFavouriteTreks = async () => {

      const slugs = JSON.parse(localStorage.getItem('favorites') || '[]');
      console.log(slugs)
      if (slugs.length === 0) return;

      try {
        const query = slugs.map(slug => `slugs=${slug}`).join("&");
        console.log(query)
        const response = await axios({
            url: `${BASE_API_URL}/treks/slugs/?${query}`,
            method: "GET",
          });
        const data = await response.data;
       return data;
      } catch (error) {
        console.log("Error")
      }
};

