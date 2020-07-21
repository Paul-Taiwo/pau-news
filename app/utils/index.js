import { bgColors, SEARCH, HEADLINES } from "../constants";
import requestClient from "../services/RequestClient";

const getBgColor = () => bgColors[Math.floor(Math.random() * bgColors.length)];

const getHeadlines = async (country = "us", category) => {
  try {
    let url = `${HEADLINES}&country=${country}&category=${category.toLowerCase()}`;
    // console.log("URL ==========>", url);
    const response = await requestClient.get(url);

    return response;
  } catch (e) {
    throw new Error(e);
  }
};

const search = async (query, cancelToken) => {
  try {
    const url = `${SEARCH}&q=${query.toLowerCase()}`;
    let res = await axios.get(url, {
      cancelToken: cancelToken.token,
    });

    return res.data;
  } catch (error) {
    let err = new Error(error.message);
    err.isCancel = axios.isCancel(error);

    throw err;
  }
};

export { getBgColor, search, getHeadlines };
