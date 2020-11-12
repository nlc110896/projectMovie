import React from "react";
import {
  GET_FILMSCHEDULE_REQUEST,
  GET_FILMSCHEDULE_SUCCESS,
  GET_FILMSCHEDULE_FAILED,
} from "../constant/index";
import Axios from "axios";

export function ActFetchGetFilmShchedule(id) {
  return (dispatch) => {
    dispatch(actGetFilmScheduleRequest());
    const url = `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${id}&maNhom=GP05`;
    Axios.get(url)
      .then((result) => {
        dispatch(actGetFilmScheduleSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actGetFilmScheduleError(err));
      });
  };
}

const actGetFilmScheduleRequest = () => {
  return {
    type: GET_FILMSCHEDULE_REQUEST,
  };
};
const actGetFilmScheduleSuccess = (data) => {
  const newArrayByLichChieu = () => {
    if (data) {
      return data.map((item, index) => {
        return item.lstCumRap;
      });
    }
  };
  return {
    type: GET_FILMSCHEDULE_SUCCESS,
    payload: newArrayByLichChieu(data),
  };
};
const actGetFilmScheduleError = (err) => {
  return {
    type: GET_FILMSCHEDULE_FAILED,
    payload: err,
  };
};
