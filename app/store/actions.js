import { getHeadlines } from "../utils";
import { HEADLINES_FETCHED, HEADLINES_ERROR, CLEAR_HEADLINES } from "../constants";

export const getNewsHeadlines = (category, page) => {
  const cat = category.toLowerCase() === "world" ? "general" : category;

  return async (dispatch, getState) => {
    const state = getState();

    try {
      const response = await getHeadlines("us", cat, page);

      dispatch({ type: HEADLINES_FETCHED, payload: { ...response.data } });
    } catch (error) {
      console.log("ERRRRRRRRRRR", error);
      dispatch({ type: HEADLINES_ERROR, payload: error });
      // setNews({ ...news, fetched: true, data: [], error: err.message });
    }
  };
};

export const clearHeadlines = () => {
  return (dispatch) => dispatch({ type: CLEAR_HEADLINES });
};
