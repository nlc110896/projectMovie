import {
  GET_MOVIELISTRAP_REQUEST,
  GET_MOVIELISTRAP_SUCCESS,
  GET_MOVIELISTRAP_FAILED,
} from "../constant/index";

let initialState = {
  loadingRap: false,
  dataRap: null,
  errRap: null,
};

const getMovieListRapReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIELISTRAP_REQUEST:
      state.loadingRap = true;
      state.dataRap = null;
      state.errRap = null;
      return { ...state };
    case GET_MOVIELISTRAP_SUCCESS:
      state.loadingRap = false;
      state.dataRap = action.payload;
      state.errRap = null;
      return { ...state };
    case GET_MOVIELISTRAP_FAILED:
      state.loadingRap = false;
      state.dataRap = null;
      state.errRap = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default getMovieListRapReducer;
