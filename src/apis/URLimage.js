
import { BASE_MEDIA_URL } from "@/config/baseurl.js";

export const URLImage = async (img) => {
  console.log(BASE_MEDIA_URL + img);
  return BASE_MEDIA_URL + img;
};
