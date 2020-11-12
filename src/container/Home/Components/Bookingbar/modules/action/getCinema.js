import React from "react";
import {
  GET_MOVIELISTRAP_REQUEST,
  GET_MOVIELISTRAP_SUCCESS,
  GET_MOVIELISTRAP_FAILED,
} from "../constant/index";
import Axios from "axios";

export function ActFetchBookingBarRap(id) {
  return (dispatch) => {
    dispatch(actGetMovieListRapRequest());
    const url = `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`;
    Axios.get(url)
      .then((result) => {
        dispatch(actGetMovieListRapSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actGetMovieListRapFailed(err));
      });
  };
}

const actGetMovieListRapRequest = () => {
  return {
    type: GET_MOVIELISTRAP_REQUEST,
  };
};
const actGetMovieListRapSuccess = (data) => {
  const newArrayByMaRap = (data) => {
    if (data) {
      return data.lichChieu.filter((item, index, arr) => {
        return (
          index ===
          arr.findIndex(
            (i) => i.thongTinRap.maCumRap === item.thongTinRap.maCumRap
          )
        );
      });
    }
  };
  return {
    type: GET_MOVIELISTRAP_SUCCESS,
    payload: newArrayByMaRap(data),
  };
};
const actGetMovieListRapFailed = (err) => {
  return {
    type: GET_MOVIELISTRAP_FAILED,
    payload: err,
  };
};
