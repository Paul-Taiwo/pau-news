import { HEADLINES_FETCHED, HEADLINES_ERROR, CLEAR_HEADLINES } from "../constants";

const initialState = {
  fetched: false,
  page: 1,
  loadingMore: false,
  data: [],
  hasError: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HEADLINES_FETCHED:
      return {
        ...state,
        fetched: true,
        data: { ...action.payload },
      };

    case HEADLINES_ERROR:
      return {
        ...state,
        fetched: true,
        hasError: true,
        error: action.payload.response,
      };

    case CLEAR_HEADLINES:
      return { ...initialState };

    default:
      return state;
  }
};

export default reducer;
