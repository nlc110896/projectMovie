import React from "react";
import {
  GET_CINEMA_REQUEST,
  GET_CINEMA_SUCCESS,
  GET_CINEMA_FAILED,
  GET_CINEMASYSTEM_REQUEST,
  GET_CINEMASYSTEM_SUCCESS,
  GET_CINEMASYSTEM_FAILED,
  GET_FILMSCHEDULE_REQUEST,
  GET_FILMSCHEDULE_SUCCESS,
  GET_FILMSCHEDULE_FAILED,
} from "../constant/index";
let initialState1 = {
  loadingCinema: false,
  dataCinema: null,
  errCinema: null,
};
export function getCinemaReducer(state = initialState1, action) {
  switch (action.type) {
    case GET_CINEMA_REQUEST:
      state.loadingCinema = true;
      state.dataCinema = null;
      state.errCinema = null;

      return { ...state };
    case GET_CINEMA_SUCCESS:
      state.loadingCinema = false;
      state.dataCinema = action.payload;
      state.errCinema = null;

      return { ...state };
    case GET_CINEMA_FAILED:
      state.loadingCinema = false;
      state.dataCinema = null;
      state.errCinema = action.payload;

      return { ...state };

    default:
      return { ...state };
  }
}

let initialState2 = {
  loadingCinemaSystem: false,
  dataCinemaSystem: null,
  errCinemaSystem: null,
};

export function getCinemaSystemReducer(state = initialState2, action) {
  switch (action.type) {
    case GET_CINEMASYSTEM_REQUEST:
      state.loadingCinemaSystem = true;
      state.dataCinemaSystem = null;
      state.errCinemaSystem = null;

      return { ...state };
    case GET_CINEMASYSTEM_SUCCESS:
      state.loadingCinemaSystem = false;
      state.dataCinemaSystem = action.payload;
      state.errCinemaSystem = null;

      return { ...state };
    case GET_CINEMASYSTEM_FAILED:
      state.loadingCinemaSystem = false;
      state.dataCinemaSystem = null;
      state.errCinemaSystem = action.payload;

      return { ...state };

    default:
      return { ...state };
  }
}

let initialState3 = {
  loadingFilmSchedule: false,
  dataFilmSchedule: null,
  errFilmSchedule: null,
};

export function getFilmScheduleReducer(state = initialState3, action) {
  switch (action.type) {
    case GET_FILMSCHEDULE_REQUEST:
      state.loadingFilmSchedule = true;
      state.dataFilmSchedule = null;
      state.errFilmSchedule = null;

      return { ...state };
    case GET_FILMSCHEDULE_SUCCESS:
      state.loadingFilmSchedule = false;
      state.dataFilmSchedule = action.payload;
      state.errFilmSchedule = null;

      return { ...state };
    case GET_FILMSCHEDULE_FAILED:
      state.loadingFilmSchedule = false;
      state.dataFilmSchedule = null;
      state.errFilmSchedule = action.payload;

      return { ...state };

    default:
      return { ...state };
  }
}
