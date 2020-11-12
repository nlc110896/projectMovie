import { combineReducers } from "redux";
import getMovieListReducer from "../container/Home/Components/Bookingbar/modules/reducer/index";
import getMovieListRapReducer from "../container/Home/Components/Bookingbar/modules/reducer/getCinemaReducer";
import {
  getCinemaReducer,
  getCinemaSystemReducer,
  getFilmScheduleReducer,
} from "../container/Home/Components/Cinemas/reducers/index";
const rootReducer = combineReducers({
  getMovieListReducer,
  getMovieListRapReducer,
  getCinemaReducer,
  getCinemaSystemReducer,
  getFilmScheduleReducer,
});

export default rootReducer;
