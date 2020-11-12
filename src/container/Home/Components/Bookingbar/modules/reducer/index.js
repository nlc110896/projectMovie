import {
  GET_MOVIELIST_REQUEST,
  GET_MOVIELIST_SUCCESS,
  GET_MOVIELIST_FAILED,
} from "../constant/index";

let initialState = {
  loading: false,
  data: null,
  err: null,
};

const getMovieListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIELIST_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;

      return { ...state };
    case GET_MOVIELIST_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;

      return { ...state };
    case GET_MOVIELIST_FAILED:
      state.loading = false;
      state.data = null;
      state.err = action.payload;

      return { ...state };

    default:
      return { ...state };
  }
};

export default getMovieListReducer;
