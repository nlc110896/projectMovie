import React from "react";

export default function Header() {
  return (
    <header>
      <div className="header-content">
        <div className="header-content-wrapper">
          <nav
            className="navbar navbar-expand-lg navbar-light"
            style={{ backgroundColor: "black" }}
          >
            <div className="navbar-brand col-2 d-flex header-logo">
              <p style={{ color: "white", fontSize: 16 }}>Booking Movie</p>
            </div>
            <div
              className="collapse navbar-collapse col-8"
              style={{ height: 30, marginTop: 25 }}
              id="navbarSupportedContent"
            >
              <ul
                className="navbar-nav justify-content-around"
                style={{ width: "100%" }}
              >
                <li className="nav-item active">
                  <a
                    className="nav-link"
                    style={{ color: "white", fontSize: 16 }}
                    href="#"
                  >
                    Lịch chiếu
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    style={{ color: "white", fontSize: 16 }}
                    href="#"
                  >
                    Cụm rạp
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    style={{ color: "white", fontSize: 16 }}
                    href="#"
                  >
                    Tin tức
                  </a>
                </li>
              </ul>
            </div>
            <div className="navbar-brand col-2 d-flex header-signin">
              <img src="https://tix.vn/app/assets/img/avatar.png" alt />
              <p style={{ color: "white", fontSize: 16 }}>Đăng nhập</p>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
