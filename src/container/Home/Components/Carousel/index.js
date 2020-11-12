import React from "react";

export default function Carousel() {
  return (
    <section className="carousel">
      <div className="carousel-content">
        <div className="carousel-content-warpper">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://s3img.vcdn.vn/123phim/2020/10/tiec-trang-mau-blood-moon-party-16021267739246.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://s3img.vcdn.vn/123phim/2020/10/tiec-trang-mau-blood-moon-party-16021267739246.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://s3img.vcdn.vn/123phim/2020/10/tiec-trang-mau-blood-moon-party-16021267739246.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://s3img.vcdn.vn/123phim/2020/10/tiec-trang-mau-blood-moon-party-16021267739246.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://s3img.vcdn.vn/123phim/2020/10/tiec-trang-mau-blood-moon-party-16021267739246.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
