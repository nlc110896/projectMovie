import React from "react";
import { connect } from "react-redux";
export function MovieTab(props) {
  console.log(props);
  const { data } = props;
  const renderHTML1 = () => {
    if (data && data.length > 0) {
      return data.map((item, index) => {
        if (index <= 7) {
          return (
            <div className="carousel-item-dangchieu col-md-3 col-sm-12 col-12">
              <a href={item.trailer}>
                <div className="phimDangChieu">
                  <img className="img-fluid" src={item.hinhAnh} alt="Image 1" />
                  <div className="hidden-detail">
                    <div className="overlay">
                      <i className="fa fa-play" />
                    </div>
                    <div className="text-info">
                      <p>IMDb: {item.danhGia}</p>
                      <p>Thời lượng: 89 phút</p>
                    </div>
                  </div>
                </div>
              </a>
              <div className="carousel-item-info">
                <div className="movies-info">
                  <span className="span__02">{item.tenPhim}</span>
                </div>
                <button className="btn btn-danger ticker-booking">
                  <a href>Mua vé</a>
                </button>
              </div>
            </div>
          );
        }
      });
    }
  };
  const renderHTML2 = () => {
    if (data && data.length > 0) {
      return data.map((item, index) => {
        if (index >= 8 && index <= 15) {
          return (
            <div className="carousel-item-dangchieu col-md-3 col-sm-12 col-12">
              <a href={item.trailer}>
                <div className="phimDangChieu">
                  <img className="img-fluid" src={item.hinhAnh} alt="Image 1" />
                  <div className="hidden-detail">
                    <div className="overlay">
                      <i className="fa fa-play" />
                    </div>
                    <div className="text-info">
                      <p>IMDb: {item.danhGia}</p>
                      <p>Thời lượng: 89 phút</p>
                    </div>
                  </div>
                </div>
              </a>
              <div className="carousel-item-info">
                <div className="movies-info">
                  <span className="span__02">{item.tenPhim}</span>
                </div>
                <button className="btn btn-danger ticker-booking">
                  <a href>Mua vé</a>
                </button>
              </div>
            </div>
          );
        }
      });
    }
  };
  const renderHTML3 = () => {
    if (data && data.length > 0) {
      return data.map((item, index) => {
        if (index >= 15 && index <= 22) {
          return (
            <div className="carousel-item-dangchieu col-md-3 col-sm-12 col-12">
              <a href={item.trailer}>
                <div className="phimDangChieu">
                  <img className="img-fluid" src={item.hinhAnh} alt="Image 1" />
                  <div className="hidden-detail">
                    <div className="overlay"></div>
                    <div className="text-info">
                      <p>{new Date(item.ngayKhoiChieu).toLocaleDateString()}</p>
                      <p>Thời lượng: 89 phút</p>
                    </div>
                  </div>
                </div>
              </a>
              <div className="carousel-item-info1">
                <div className="movies-info">
                  <span className="span__02">{item.tenPhim}</span>
                </div>
              </div>
            </div>
          );
        }
      });
    }
  };
  const renderHTML4 = () => {
    if (data && data.length > 0) {
      return data.map((item, index) => {
        if (index >= 23 && index <= 30) {
          return (
            <div className="carousel-item-dangchieu col-md-3 col-sm-12 col-12">
              <a href={item.trailer}>
                <div className="phimDangChieu">
                  <img className="img-fluid" src={item.hinhAnh} alt="Image 1" />
                  <div className="hidden-detail">
                    <div className="overlay"></div>
                    <div className="text-info">
                      <p>{new Date(item.ngayKhoiChieu).toLocaleDateString()}</p>
                      <p>Thời lượng: 89 phút</p>
                    </div>
                  </div>
                </div>
              </a>
              <div className="carousel-item-info1">
                <div className="movies-info">
                  <span className="span__02">{item.tenPhim}</span>
                </div>
              </div>
            </div>
          );
        }
      });
    }
  };
  return (
    <section className="movies-tab">
      <div className="movies-tab-content container">
        <div className="movies-tab-wrapper">
          <div className="movies-tab-line">
            <div className="row">
              <div className="col-12">
                <nav>
                  <div
                    className="nav nav-tabs movie-line"
                    id="nav-tab"
                    role="tablist"
                  >
                    <a
                      className="nav-item nav-link active"
                      id="nav-home-tab"
                      data-toggle="tab"
                      href="#nowShowingMovie"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      Phim đang chiếu
                    </a>
                    <a
                      className="nav-item nav-link"
                      id="nav-profile-tab"
                      data-toggle="tab"
                      href="#incomingShowingMovie"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                    >
                      Phim sắp chiếu
                    </a>
                  </div>
                </nav>
              </div>
              <div className="col-6"></div>
            </div>
          </div>
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nowShowingMovie"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <div
                id="carouselExampleSlides"
                className="carousel slide nowShowingMovie"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">{renderHTML1()}</div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">{renderHTML2()}</div>
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleSlides"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleSlides"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="incomingShowingMovie"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <div
                id="incomingMovie"
                className="carousel slide nowShowingMovie"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">{renderHTML3()}</div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">{renderHTML4()}</div>
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#incomingMovie"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#incomingMovie"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Next</span>
                </a>
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
    loading: state.getMovieListReducer.loading,
    data: state.getMovieListReducer.data,
    err: state.getMovieListReducer.err,
  };
};
export default connect(mapStateToProps, null)(MovieTab);
