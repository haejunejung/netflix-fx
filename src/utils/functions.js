import axios from "axios";
import { port } from "./constants";

export const handleFetch = async (api, callback) => {
  const response = await axios.get(`http://localhost:${port}${api}`);
  callback(response);
};
