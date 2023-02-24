import React from "react";
import { Outlet } from "react-router";
import { Link, NavLink } from "react-router-dom";
import Footer from "../footer/Footer";
import { BsSearch } from "react-icons/bs";

import "./header.scss";
const Header = () => {
  return (
    <>
      <header className="header__top text-white">
        <section className="header__section container-xxl pt-2">
          <div className="row">
            <div className="col-lg-6">
              <p className="header__shipping ">
                Free Shipping Over $100 & Free Returns
              </p>
            </div>
            <div className="col-lg-6">
              <p className="telephone text-end">
                Hotline:
                <a
                  className="text-light mx-1 hotline "
                  href="tel:+92 3094151413"
                >
                  (888)-4344 6000 0000
                </a>
              </p>
              <nav></nav>
            </div>
          </div>
        </section>
        {/* //* WEll now to main menu */}
        <section className="header__main mt-3 py-2">
          <div className="container-xxl text-white mb-3">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-2">
                <h2>
                  <Link>Digitic.</Link>
                </h2>
              </div>
              <div className="col-lg-4">
                <div class="input-group ">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search product here."
                    aria-label="Search Product"
                    aria-describedby="Search Product"
                  />
                  <button
                    className="btn text-white button-color"
                    type="button"
                    id="button-addon2"
                  >
                    <BsSearch className="react-icon" />
                  </button>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="menu-options ">
                  <div className="menu d-flex justify-content-evenly align-items-center">
                    <Link className="items d-flex align-items-center gap-1">
                      <svg>
                        <use xlinkHref="images/compare.svg#svg-1" />
                      </svg>
                      <p>
                        Favourite <br /> wishlist
                      </p>
                    </Link>
                    <Link className="items d-flex align-items-center gap-1 px-1">
                      <svg>
                        <use xlinkHref="images/wishlist.svg#Capa_1" />
                      </svg>
                      <p>
                        Compare <br /> Products
                      </p>
                    </Link>
                    <Link className="items d-flex align-items-center gap-1">
                      <svg>
                        <use xlinkHref="images/user.svg#Capa_1" />
                      </svg>
                      <p className="d-flex flex-column justify-content-center align-items-center">
                        Login <br />
                        <span className="menu-item"> My Account</span>
                      </p>
                    </Link>
                    <Link className="items d-flex align-items-center gap-1 position-relative">
                      <svg className="cart-icon">
                        <use xlinkHref="images/cart.svg#Capa_1" />
                      </svg>
                      <span class="notification">0</span>
                      <div className="d-flex flex-column align-items-center justify-content-center">
                        <p> Cart </p>
                        <p className="cart-item"> $ 10.00</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
      <header className="header__menu bg-dark text-white">
        <section className="header__menu-list container-xxl">
          <nav className="">
            <ul className="d-flex align-items-center justify content-center">
              <li className="take-away p-2">
                <NavLink to="" active>
                  Home
                </NavLink>
              </li>
              <li className="take-away p-2">
                <NavLink to="">Our Store</NavLink>
              </li>
              <li className="take-away p-2">
                <NavLink to="">Blog</NavLink>
              </li>
              <li className="take-away p-2">
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
        </section>
      </header>
      <Outlet />
      <Footer />
    </>
  );
};

export default Header;
