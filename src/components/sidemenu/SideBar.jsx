import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HalfRating from "../Products/Ratings";
import StoreProducts from "../Storeproducts/StoreProducts";
import "./sidebar.css";
const SideBar = () => {
  const [products, setproducts] = useState([]);
  const [checked, setchecked] = useState(false);
  useEffect(() => {
    setproducts([
      {
        id: "1",
        image: "images/tab.jpg",
        image2: "images/tab1.jpg",
        others: {
          brand: "Havelts",
          info: "Some quick example text to build on the card title and make up the bulk of the card's content",
          price: 100.0,
          discount: 16,
        },
      },
      {
        id: "1",
        image: "images/watch.jpg",
        image2: "images/tab1.jpg",
        others: {
          brand: "Havelts",
          info: "Some quick example text to build on the card title and make up the bulk of the card's content",
          price: 100.0,
          discount: 16,
        },
      },
    ]);
  }, []);
  return (
    <>
      <section className="store__main py-4">
        <main className="container-xxl  ">
          <div className="row">
            <div className="col-3">
              {/* parent-container */}
              <div className="d-flex flex-column px-3 gap-2 font-family ">
                <div className="sidebar__1 bg-whites p-3 bg-white rounded shadow-sm">
                  <h5 className="sidebar-heading">Shop By Categories</h5>
                  <ul className="ps-0">
                    <li className="category-list">Watch</li>
                    <li className="category-list">Smart Tv</li>
                    <li className="category-list">Camera</li>
                    <li className="category-list">Laptop</li>
                  </ul>
                </div>
                <div className="sidebar__2 p-3  bg-white rounded shadow-sm">
                  <h5 className="sidebar-heading mb-2">Filter By</h5>
                  <div className="ms-0 mt-3">
                    <h6 className="sidebar-heading-inner">Availability</h6>
                    <div className="form-check fs-7 text-gray">
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
                    <div className="form-check fs-7 text-gray">
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
                    <h6 className="sidebar-heading-inner mt-3">Price</h6>
                    <div className="d-flex mt-3 gap-2 row-setting justify-content- align-items-center">
                      <p className="price-sign text-gray">$</p>
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
                      <p className="price-sign text-gray">$</p>
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
                    <h6 className="sidebar-heading-inner mt-4">Colors</h6>
                    <div className="mt-2">
                      <ul className=" pe-3 d-flex flex-wrap flex-lg-row flex-sm-column colors-list gap-2">
                        <li className="colors">
                          <button className="colors-pick-1 color-picker "></button>
                        </li>
                        <li className="colors">
                          <button className=" colors-pick-2 color-picker"></button>
                        </li>
                        <li className="colors">
                          <button className=" colors-pick-3 color-picker"></button>
                        </li>
                        <li className="colors">
                          <button className=" colors-pick-4 color-picker"></button>
                        </li>
                        <li className="colors">
                          <button className=" colors-pick-5 color-picker"></button>
                        </li>
                        <li className="colors">
                          <button className=" colors-pick-6 color-picker"></button>
                        </li>
                        <li className="colors">
                          <button className=" colors-pick-8 color-picker"></button>
                        </li>
                        <li className="colors">
                          <button className=" colors-pick-9 color-picker"></button>
                        </li>
                        <li className="colors">
                          <button className=" colors-pick-10 color-picker"></button>
                        </li>
                        <li className="colors">
                          <button className=" colors-pick-11 color-picker"></button>
                        </li>
                        <li className="colors">
                          <button className=" colors-pick-12 color-picker"></button>
                        </li>
                        <li className="colors">
                          <button className=" colors-pick-13 color-picker"></button>
                        </li>
                        <li className="colors">
                          <button className=" colors-pick-14 color-picker"></button>
                        </li>
                      </ul>
                    </div>
                    <h6 className="sidebar-heading-inner">Size</h6>
                    <div className="form-check fs-7 text-gray">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck1"
                      />
                      <label className="form-check-label" for="defaultCheck1">
                        S (2)
                      </label>
                    </div>
                    <div className="form-check fs-7">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck2"
                      />
                      <label
                        className="form-check-label text-gray"
                        for="defaultCheck2"
                      >
                        M (4)
                      </label>
                    </div>
                  </div>
                </div>
                <div className="sidebar__3 ps-3 py-3  bg-white rounded shadow-sm">
                  <h5 className="sidebar-heading ">Product Tags</h5>
                  <div className="d-flex flex-wrap align-items-center mt-3 gap-1">
                    <p className="badge fs-7 mb-1 tag p-2  tags text-secondary">
                      Headphone
                    </p>
                    <p className="badge fs-7 tag p-2 mb-1  tags text-secondary">
                      Head
                    </p>
                    <p className="badge fs-7 tag p-2 mb-1  tags text-secondary">
                      phone
                    </p>
                    <p className="badge fs-7 tag p-2 mb-1 tags  text-secondary">
                      Head
                    </p>
                    <p className="badge fs-7 tag p-2 mb-1  tags text-secondary">
                      Phone
                    </p>
                    <p className="badge fs-7 tag p-2 mb-1  tags text-secondary">
                      Laptop
                    </p>
                  </div>
                </div>
                <div className="sidebar__4 p-2  bg-white rounded shadow-sm">
                  <h5 className="sidebar-heading">Random Product</h5>

                  <div className="d-flex flex-column gap-2 flex-wrap">
                    {products.map((res, ind) => {
                      return (
                        <>
                          <div
                            key={res.id}
                            className="product-first"
                            style={{ maxWidth: "100%" }}
                          >
                            <div className="d-flex flex-row gap-1 card border-0 ">
                              <div
                                className=" position-relative"
                                style={{ width: "100%" }}
                              >
                                <img
                                  src={res.image}
                                  className="img-fluid d-block "
                                  alt="..."
                                />
                              </div>

                              <div className="card-body random-body fs-7">
                                <p className="Card-text random-text">
                                  {res.others.info}
                                  ...
                                </p>
                                <HalfRating />
                                <span className="random-price  d-block">
                                  {res.others.discount < 100 && (
                                    <span className="text-danger">
                                      $
                                      {res.others.price -
                                        (res.others.price *
                                          res.others.discount) /
                                          100}
                                    </span>
                                  )}
                                  <span
                                    className="orignal-price"
                                    style={{
                                      textDecoration:
                                        res.others.discount && "line-through",
                                      margin: res.others.discount && "0 0.6rem",
                                      color: res.others.discount && "#777",
                                    }}
                                  >
                                    ${res.others.price}
                                  </span>
                                  {res.others.discount === 100 && (
                                    <span className="mx-3  rounded-3 free-tag">
                                      Free
                                    </span>
                                  )}
                                </span>

                                {/* AAdd to cart menu image */}

                                {res.others.discount && (
                                  <span className="position-absolute badge rounded-pill random-discount">
                                    -{res.others.discount}%
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <StoreProducts />
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
export default SideBar;
