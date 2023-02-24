import React from "react";
import { Outlet } from "react-router";
import Footer from "../footer/Footer";
import Main from "../main/Main";
import "./header.scss";
const Header = () => {
  return (
    <>
      <header className="header__top">
        <section className="header__section container-xxl">
          <div className="row">
            <div className="col-lg-6">
              <p className="header__shipping">
                Free Shipping Over $100 & Free Returns
              </p>
            </div>
            <div className="col-lg-6">
              <p className="telephone">
                Hotline:
                <a href="tel:+92 3094151413">(888)4344 6000-(888)13388193</a>
              </p>
              <nav></nav>
            </div>
          </div>
        </section>
      </header>
      <Main />
      <Outlet />
      <Footer />
    </>
  );
};

export default Header;
