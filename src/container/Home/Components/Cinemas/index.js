import React, { useEffect, useState, useMemo } from "react";
import { connect } from "react-redux";
import ActFetchGetCinema from "../Cinemas/action/getCinema";
import ActFetchGetCinemaSystem from "../Cinemas/action/getCinemaSystem";
import { ActFetchGetFilmShchedule } from "../Cinemas/action/getFilmSchedule";

export function Cinemas(props) {
  const { dataCinema, dataCinemaSystem, dataFilmSchedule } = props;
  const [cinemaSystemState, setCinemaSystemState] = useState();

  useEffect(() => {
    props.fetchGetCinema();
    props.fetchGetCinemaSystem("BHDStar");
    props.fetchGetFilmSchedule("BHDStar");
  }, []);

  const handleGetCinema = (id) => {
    props.fetchGetCinemaSystem(id);
    props.fetchGetFilmSchedule(id);
  };
  // Click vào sẽ cho mã cụm rạp để lấy danh sách phim
  const handleGetFilmSchedule = (maPhim) => {
    console.log(maPhim);

    getFilmSchedule(maPhim);
  };

  const getFilmSchedule = (id) => {
    if (dataFilmSchedule && dataFilmSchedule.length > 0) {
      return dataFilmSchedule.map((item, index) => {
        if (item && item.length > 0) {
          return item.map((item1, index1, arr) => {
            // console.log(item1);
            // đến đây vẫn còn render được
            // return <p>{item1.maCumRap}</p>;
            // Nhưng khi dùng filter để rút mảng theo ma cụm rạp
            if (index1 === arr.findIndex((i) => i.maCumRap === id)) {
              setCinemaSystemState({
                ...cinemaSystemState,
                movieByCinema: item1,
              });
            }
          });
        }
      });
    }
  };

  const renderLogoRap = () => {
    if (dataCinema && dataCinema.length > 0) {
      return dataCinema.map((item, index) => {
        if ((index = 0)) {
          return (
            <li className="nav-item " role="presentation">
              <a
                className="nav-link  img-after active"
                id="home-tab"
                data-toggle="tab"
                value={item.maHeThongRap}
                href="#home"
                role="tab"
                aria-controls="home"
                aria-selected="false"
                onClick={(event) => handleGetCinema(item)}
              >
                <img className="img-fluid" src={item.logo} />
              </a>
            </li>
          );
        } else {
          return (
            <li className="nav-item " role="presentation">
              <a
                className="nav-link  img-after"
                id="home-tab"
                data-toggle="tab"
                value={item.maHeThongRap}
                href="#home"
                role="tab"
                aria-controls="home"
                aria-selected="false"
                onClick={(event) => handleGetCinema(item.maHeThongRap)}
              >
                <img className="img-fluid" src={item.logo} />
              </a>
            </li>
          );
        }
      });
    }
  };

  const renderCinemaSystem = () => {
    if (dataCinemaSystem && dataCinemaSystem.length > 0) {
      return dataCinemaSystem.map((item, index) => {
        return (
          <li className="nav-item" role="presentation">
            <a
              aria-selected="true"
              className="cinema-item row "
              value={item.maCumRap}
              id="home-tab"
              data-toggle="tab"
              aria-selected="false"
              onClick={() => {
                handleGetFilmSchedule(item.maCumRap);
              }}
            >
              <div className="cinema-img col-3 ">
                <div
                  className="cinemaImg_item nav flex-column nav-pills"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <img
                    className="img-fluid"
                    src="https://s3img.vcdn.vn/123phim/2018/10/lotte-cinema-phu-tho-15383865322515.jpg"
                    alt
                  />
                </div>
              </div>
              <div className="cinema-info col-9">
                <p>{item.tenCumRap}</p>
                <p>{item.diaChi}</p>
                <a href="#">Chi tiết</a>
              </div>
            </a>
          </li>
        );
      });
    }
  };

  return (
    <section className="cinemas">
      <div className="cinemas-content container">
        <div className="cinemas-wrapper">
          <div className="cinema-sticket mb-5">
            <div className="cinema-sticket-content">Lựa chọn Phim</div>
          </div>
          <div className="row row-height">
            <div className="col-1 cinemaBrand-list">
              <ul
                className="nav nav-pills d-block"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                {renderLogoRap()}
              </ul>
            </div>
            <div className="cinema-list col-4">
              <div className="tab-content" id="v-pills-tabContent">
                <ul
                  className="cinemaListLocation tab-pane fade show active nav nav-pills"
                  id="galaxy__cinema"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  {renderCinemaSystem()}
                </ul>
              </div>
            </div>
            <div className="movie-schedule col-7 col-md-7 col-sm-12 col-12">
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="movie-name tab-pane fade show active"
                  id="danh_sach_phim"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  {/* <div className="movie-schedule-item row active">
                    <div className="movie-item d-flex">
                      <div className="movie-item-img col-2">
                        <div
                          className="movie-img nav flex-column nav-pills"
                          id="v-pills-tab"
                          role="tablist"
                          aria-orientation="vertical"
                        >
                          <img
                            className="img-fluid"
                            src="https://s3img.vcdn.vn/mobile/123phim/2020/10/trai-xac-song-the-clearing-c18-16018860556392_60x60.png"
                            alt
                          />
                        </div>
                      </div>
                      <div className="movie-text col-10">
                        <p>
                          {" "}
                          <span className="btn btn-danger">C18</span> Cậu Bé
                          Người Gỗ Pinocchio - Pinocchio
                        </p>
                        <p>86 phút - TIX 6.2 - IMDb 0</p>
                      </div>
                    </div>
                    <div className="movie-time-schedule col-12 pt-3">
                      <div className="row ">
                        <div className="type-film col-12">2D Digital</div>
                        <div className="schdule mt-1">
                          <button className="btn btn-time">
                            <span className="time-start">10:10</span>
                            <span>~ 12:10</span>
                          </button>
                          <button className="btn btn-time">
                            <span className="time-start">10:10</span>
                            <span>~ 12:10</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    loadingCinema: state.getCinemaReducer.loadingCinema,
    dataCinema: state.getCinemaReducer.dataCinema,
    errCinema: state.getCinemaReducer.errCinema,

    loadingCinemaSystem: state.getCinemaSystemReducer.loadingCinemaSystem,
    dataCinemaSystem: state.getCinemaSystemReducer.dataCinemaSystem,
    errCinemaSystem: state.getCinemaSystemReducer.errCinemaSystem,

    loadingFilmSchedule: state.getFilmScheduleReducer.loadingFilmSchedule,
    dataFilmSchedule: state.getFilmScheduleReducer.dataFilmSchedule,
    errFilmSchedule: state.getFilmScheduleReducer.errFilmSchedule,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchGetCinema: () => {
      dispatch(ActFetchGetCinema());
    },
    fetchGetCinemaSystem: (id) => {
      dispatch(ActFetchGetCinemaSystem(id));
    },
    fetchGetFilmSchedule: (id) => {
      dispatch(ActFetchGetFilmShchedule(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cinemas);
