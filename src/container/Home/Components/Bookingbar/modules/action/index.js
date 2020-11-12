import React from "react";
import {
  GET_MOVIELIST_REQUEST,
  GET_MOVIELIST_SUCCESS,
  GET_MOVIELIST_FAILED,
} from "../constant/index";
import Axios from "axios";

export function ActFetchBookingBar() {
  return (dispatch) => {
    dispatch(actGetMovieListRequest());
    const url =
      "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP05";
    Axios.get(url)
      .then((result) => {
        dispatch(actGetMovieListSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actGetMovieListFailed(err));
      });
  };
}

const actGetMovieListRequest = () => {
  return {
    type: GET_MOVIELIST_REQUEST,
  };
};
const actGetMovieListSuccess = (data) => {
  return {
    type: GET_MOVIELIST_SUCCESS,
    payload: data,
  };
};
const actGetMovieListFailed = (err) => {
  return {
    type: GET_MOVIELIST_FAILED,
    payload: err,
  };
};
