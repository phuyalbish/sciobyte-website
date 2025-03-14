import axios from "axios";
import { BASE_API_URL } from "@/config/baseurl.js";

export const fetchBlogs = async () => {
  try {
    const response = await axios({
      url: `${BASE_API_URL}/blogs/all/`,
      method: "GET",
    });
    return response;
  } catch (error) {
    console.log("Error while fetching blog data: ", error);
  }
};

export const fetchBlogBySlug = async (slug) => {
  try {
    const response = await axios({
      url: `${BASE_API_URL}/blogs/${slug}/`,
      method: "GET",
    });
    return response;
  } catch (error) {
    console.log("Error while fetching blog data: ", error);
  }
}
