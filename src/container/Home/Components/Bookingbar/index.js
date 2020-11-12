import React, { useEffect, useState } from "react";
import { ActFetchBookingBar } from "./modules/action/index";
import { ActFetchBookingBarRap } from "./modules/action/getCinema";
import { connect, useSelector, useDispatch } from "react-redux";

export function Bookingbar(props) {
  const { data, dataRap } = props;
  console.log(dataRap);

  useEffect(() => {
    props.fetchBookingBar();
  }, []);

  const hanldeGetID = (id) => {
    props.fetchBookingBarRap(id);
  };

  const renderTenPhim = () => {
    if (data && data.length > 0) {
      return data.map((item, index) => {
        return (
          <option
            key={item.maPhim}
            className="dropdown-item"
            value={item.maPhim}
          >
            {item.tenPhim}
          </option>
        );
      });
    }
  };
  const renderRapPhim = () => {
    if (dataRap) {
      return dataRap.map((item) => {
        return (
          <option key={item.maLichChieu} className="dropdown-item">
            {item.thongTinRap.tenCumRap}
          </option>
        );
      });
    }
  };
  const renderNgayChieu = () => {
    if (dataRap) {
      return dataRap.map((item) => {
        return (
          <option key={item.maLichChieu} className="dropdown-item">
            {new Date(item.ngayChieuGioChieu).toLocaleDateString()}
          </option>
        );
      });
    }
  };
  const renderSuatChieu = () => {
    if (dataRap) {
      return dataRap.map((item) => {
        return (
          <option key={item.maLichChieu} className="dropdown-item">
            {new Date(item.ngayChieuGioChieu).toLocaleTimeString()}
          </option>
        );
      });
    }
  };

  return (
    <section className="booking-bars">
      <div className="booking-bar-content">
        <div className="booking-bar-wrapper container d-flex">
          <div className="booking-bar-home">
            <select
              name="movieSelect"
              onChange={(event) => hanldeGetID(event.target.value)}
            >
              <option value="movieSelect" hidden selected>
                Chọn Phim
              </option>

              {renderTenPhim()}
            </select>
          </div>
          <div className="booking-bar-smallhome">
            <select name="CinemaSelect">
              <option value="CinemaSelect" hidden selected>
                Chọn Rạp
              </option>

              {renderRapPhim()}
            </select>
          </div>
          <div className="booking-bar-smallhome">
            <select name="DateSelect">
              <option value="DateSelect" hidden selected>
                Chọn Ngày
              </option>
              {renderNgayChieu()}
            </select>
          </div>
          <div className="booking-bar-smallhome">
            <select name="TimeSelect">
              <option value="TimeSelect" hidden selected>
                Chọn suất chiếu
              </option>
              {renderSuatChieu()}
            </select>
          </div>
          <div className="booking-button">
            <div>
              <button className="btn btn-info"> Đặt vé </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.getMovieListReducer.loading,
    data: state.getMovieListReducer.data,
    err: state.getMovieListReducer.err,

    loadingRap: state.getMovieListRapReducer.loadingRap,
    dataRap: state.getMovieListRapReducer.dataRap,
    errRap: state.getMovieListRapReducer.errRap,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBookingBar: () => {
      dispatch(ActFetchBookingBar());
    },
    fetchBookingBarRap: (id) => {
      if (id && id > 0) {
        dispatch(ActFetchBookingBarRap(id));
      }
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Bookingbar);
