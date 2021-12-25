import axios from "../config";

export const fetchApiData = async (url) => {
  return await axios
    .get(url)
    .then((response) => response.data)
    .catch((response) => response.data);
};

export const storeApiData = async (url, data) => {
  return await axios
    .post(url, data)
    .then((response) => response.data)
    .catch((response) => response.response.data);
};

export const deleteApiData = async (url) => {
  return await axios
    .delete(url)
    .then((response) => response.data)
    .catch((response) => response.response.data);
};
