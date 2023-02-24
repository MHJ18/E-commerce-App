import React from "react";
import { Outlet } from "react-router";
import { Link, NavLink } from "react-router-dom";
import Footer from "../footer/Footer";

import "./header.scss";
const Header = () => {
  return (
    <>
      <header className="header__top text-white">
        <section className="header__section container-xxl py-2">
          <div className="row">
            <div className="col-lg-6">
              <p className="header__shipping ">
                Free Shipping Over $100 & Free Returns
              </p>
            </div>
            <div className="col-lg-6">
              <p className="telephone text-end">
                Hotline:
                <a className="text-light mx-1" href="tel:+92 3094151413">
                  (888)-4344 6000 0000
                </a>
              </p>
              <nav></nav>
            </div>
          </div>
        </section>
        {/* //* WEll now to main menu */}
        <section className="header__main">
          <div className="container-xxl text-white">
            <div className="row">
              <div className="col-lg-2">
                <h2>
                  <Link>Digitic.</Link>
                </h2>
              </div>
              <div className="col-lg-5">bello</div>
              <div className="col-lg-5">lelo</div>
            </div>
          </div>
        </section>
      </header>
      <Outlet />
      <Footer />
    </>
  );
};

export default Header;
