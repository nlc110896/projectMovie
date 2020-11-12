import React from "react";
import {
  GET_CINEMASYSTEM_REQUEST,
  GET_CINEMASYSTEM_SUCCESS,
  GET_CINEMASYSTEM_FAILED,
} from "../constant/index";
import Axios from "axios";

export default function ActFetchGetCinemaSystem(id) {
  return (dispatch) => {
    dispatch(actGetCinemaSystemRequest());
    const url = `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${id}`;
    Axios.get(url)
      .then((result) => {
        dispatch(actGetCinemaSystemSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actGetCinemaSystemError(err));
      });
  };
}

const actGetCinemaSystemRequest = () => {
  return {
    type: GET_CINEMASYSTEM_REQUEST,
  };
};
const actGetCinemaSystemSuccess = (data) => {
  return {
    type: GET_CINEMASYSTEM_SUCCESS,
    payload: data,
  };
};
const actGetCinemaSystemError = (err) => {
  return {
    type: GET_CINEMASYSTEM_FAILED,
    payload: err,
  };
};
