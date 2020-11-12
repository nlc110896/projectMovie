import React from "react";
import {
  GET_CINEMA_REQUEST,
  GET_CINEMA_SUCCESS,
  GET_CINEMA_FAILED,
} from "../constant/index";
import Axios from "axios";

export default function ActFetchGetCinema() {
  return (dispatch) => {
    dispatch(actGetCinemaRequest());
    const url =
      "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap";
    Axios.get(url)
      .then((result) => {
        dispatch(actGetCinemaSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actGetCinemaError(err));
      });
  };
}

const actGetCinemaRequest = () => {
  return {
    type: GET_CINEMA_REQUEST,
  };
};
const actGetCinemaSuccess = (data) => {
  return {
    type: GET_CINEMA_SUCCESS,
    payload: data,
  };
};
const actGetCinemaError = (err) => {
  return {
    type: GET_CINEMA_FAILED,
    payload: err,
  };
};
