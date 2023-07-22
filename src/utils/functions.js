import axios from "axios";
import { port } from "./constants";

export const handleFetch = async (api, callback) => {
  try {
    const response = await axios.get(`http://localhost:${port}${api}`);
    callback(response);
  } catch (error) {
    console.log("Error:", error.message);
  }
};
