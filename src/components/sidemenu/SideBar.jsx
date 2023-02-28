import React from "react";
import { Link } from "react-router-dom";
import MultilineTextFields from "../inputs/PriceSelect";
import "./sidebar.css";
const SideBar = () => {
  return (
    <>
      <section className="store__main py-5">
        <main className="container-fluid px-4 ">
          <div className="row">
            <div className="col-2">
              {/* parent-container */}
              <div className="d-flex flex-column gap-2 font-family ">
                <div className="sidebar__1 bg-whites p-2 bg-white rounded shadow-sm">
                  <h5 className="sidebar-heading">Shop By Categories</h5>
                  <ul className="ps-0">
                    <li className="category-list">Watch</li>
                    <li className="category-list">Smart Tv</li>
                    <li className="category-list">Camera</li>
                    <li className="category-list">Laptop</li>
                  </ul>
                </div>
                <div className="sidebar__2 p-2  bg-white rounded shadow-sm">
                  <h5 className="sidebar-heading mb-2">Filter By</h5>
                  <div className="ms-2">
                    <h6 className="sidebar-heading-inner">Availability</h6>
                    <div className="form-check fs-7">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck1"
                      />
                      <label className="form-check-label" for="defaultCheck1">
                        In Stock (2)
                      </label>
                    </div>
                    <div className="form-check fs-7">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck2"
                      />
                      <label className="form-check-label" for="defaultCheck2">
                        Out of Stock (0)
                      </label>
                    </div>
                    <h6 className="sidebar-heading-inner mt-2">Price</h6>
                    <div className="d-flex gap-2 row-setting justify-content-start align-items-center">
                      <p className="price-sign">$</p>
                      <div class="form-floating col-4 input-price">
                        <input
                          type="email"
                          class="form-control input-price "
                          id="floatingInput"
                          placeholder="name@example.com"
                          style={{ maxHeight: "2rem" }}
                        />
                        <label htmlFor="floatingInput">From</label>
                      </div>
                      <p className="price-sign">$</p>
                      <div class="form-floating col-4 input-price ">
                        <input
                          type="email"
                          class="form-control input-price "
                          id="floatingInput"
                          placeholder="name@example.com"
                          style={{ maxHeight: "2rem" }}
                        />
                        <label htmlFor="floatingInput">To</label>
                      </div>
                    </div>
                    <h6 className="sidebar-heading-inner">Colors</h6>
                    <div className="">
                      <ul className=" pe-3 d-flex flex-wrap flex-lg-row flex-sm-column gap-1">
                        <li className="colors">
                          <button
                            role="picker"
                            className="colors-pick"
                          ></button>
                        </li>
                        <li className="colors">
                          <button
                            role="picker"
                            className=" colors-pick"
                          ></button>
                        </li>
                        <li className="colors">
                          <button
                            role="picker"
                            className=" colors-pick"
                          ></button>
                        </li>
                        <li className="colors">
                          <button
                            role="picker"
                            className=" colors-pick"
                          ></button>
                        </li>
                        <li className="colors">
                          <button
                            role="picker"
                            className=" colors-pick"
                          ></button>
                        </li>
                        <li className="colors">
                          <button
                            role="picker"
                            className=" colors-pick"
                          ></button>
                        </li>
                        <li className="colors">
                          <button
                            role="picker"
                            className=" colors-pick"
                          ></button>
                        </li>
                        <li className="colors">
                          <button
                            role="picker"
                            className=" colors-pick"
                          ></button>
                        </li>
                        <li className="colors">
                          <button
                            role="picker"
                            className=" colors-pick"
                          ></button>
                        </li>
                        <li className="colors">
                          <button
                            role="picker"
                            className=" colors-pick"
                          ></button>
                        </li>
                        <li className="colors">
                          <button
                            role="picker"
                            className=" colors-pick"
                          ></button>
                        </li>
                        <li className="colors">
                          <button
                            role="picker"
                            className=" colors-pick"
                          ></button>
                        </li>
                        <li className="colors">
                          <button
                            role="picker"
                            className=" colors-pick"
                          ></button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="sidebar__3 p-2  bg-white rounded shadow-sm">
                  <h5 className="sidebar-heading">Product Tags</h5>
                  <Link className="sidebar__links d-block">Home</Link>
                  <Link className="sidebar__links d-block">Our store</Link>
                  <Link className="sidebar__links d-block">Blogs</Link>
                  <Link className="sidebar__links d-block">Contact</Link>
                </div>
                <div className="sidebar__4 p-2  bg-white rounded shadow-sm">
                  <h5 className="sidebar-heading">Random Product</h5>
                  <Link className="sidebar__links d-block">Home</Link>
                  <Link className="sidebar__links d-block">Our store</Link>
                  <Link className="sidebar__links d-block">Blogs</Link>
                  <Link className="sidebar__links d-block">Contact</Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default SideBar;
