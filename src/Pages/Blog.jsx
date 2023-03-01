import React, { useState, useLayoutEffect } from "react";
import BreadCrumbs from "../components/breadcrumbs/BreadCrumbs";
import OurProducts from "../components/Storeproducts/OurProducts";
import "../components/Storeproducts/products.css";
const Blog = () => {
  const [grid, setgrid] = useState("3");
  function onclick(e) {
    console.log(e.target.closest("p").dataset.set);
    setgrid(e.target.closest("p").dataset.set);
  }
  const [cards, setcards] = useState([]);
  useLayoutEffect(() => {
    setcards([
      {
        image: "images/blog-1.jpg",
        details: {
          title: "Card Title",
          info: " Some quick example text to build on the card title and make up the bulk of the card's content",
        },
      },
      {
        image: "images/blog-1.jpg",
        details: {
          title: "Card Title",
          info: " Some quick example text to build on the card title and make up the bulk of the card's content",
        },
      },
      {
        image: "images/blog-1.jpg",
        details: {
          title: "Card Title",
          info: " Some quick example text to build on the card title and make up the bulk of the card's content",
        },
      },
      {
        image: "images/blog-1.jpg",
        details: {
          title: "Card Title",
          info: " Some quick example text to build on the card title and make up the bulk of the card's content",
        },
      },
    ]);
  }, []);
  return (
    <>
      <BreadCrumbs />
      <section className="bg-light py-4">
        <main className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="sidebar__1 bg-whites mx-2 p-3 bg-white rounded shadow-sm">
                <h5 className="sidebar-heading">Shop By Categories</h5>
                <ul className="ps-0">
                  <li className="category-list">Watch</li>
                  <li className="category-list">Smart Tv</li>
                  <li className="category-list">Camera</li>
                  <li className="category-list">Laptop</li>
                </ul>
              </div>
            </div>
            <div className="col">
              <main className="products-store mx-2">
                <section className="py-1 bg-white rounded">
                  <div className="sort-by px-2 d-flex flex-wrap justify-content-between align-items-center">
                    <div className="d-flex  flex-wrap flex-row align-items-center gap-2">
                      <p className="select-title">Sort By:</p>
                      <div className="dropdown">
                        <button
                          className="btn d-flex align-items-center gap-2 bg-light button-filter dropdown-toggle categories fs-7 text-gray"
                          type="button"
                          data-bs-toggle="dropdown"
                          data-bs-theme="dark"
                          aria-expanded="false"
                          value="Best Selling"
                        >
                          <span> Best Selling</span>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-dark">
                          <li
                            value="best-selling"
                            className="dropdown-item active"
                          >
                            Best Selling
                          </li>
                          <li
                            value="title-ascending"
                            className="dropdown-item "
                          >
                            Aplhabetically, A-Z
                          </li>
                          <li
                            value="title-descending"
                            className="dropdown-item "
                          >
                            Aplhabetically, Z-A
                          </li>
                          <li
                            value="price-ascending"
                            className="dropdown-item "
                          >
                            Price, low to high
                          </li>
                          <li
                            value="price-descending"
                            className="dropdown-item "
                          >
                            Price, high to low
                          </li>
                          <li
                            value="created-descending"
                            className="dropdown-item"
                          >
                            Date, new to old
                          </li>
                          <li
                            value="created-ascending"
                            className="dropdown-item "
                          >
                            Date, old to new
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      onClick={onclick}
                      className="d-flex flex-row flex-wrap gap-1 align-items-center"
                    >
                      <p className="total-products">24 Products</p>
                      <p data-set="3" className="layout rounded-3 px-2 py-1">
                        <img
                          className="img-fluid"
                          src="images/gr4.svg"
                          alt=""
                        />
                      </p>
                      <p data-set="4" className="layout rounded-3 px-2 py-1">
                        <img
                          className="img-fluid"
                          src="images/gr3.svg"
                          alt=""
                        />
                      </p>
                      <p data-set="6" className="layout rounded-3 px-2 py-1">
                        <img
                          className="img-fluid"
                          src="images/gr2.svg"
                          alt=""
                        />
                      </p>
                      <p data-set="12" className="layout rounded-3 px-2 py-1">
                        <img className="img-fluid" src="images/gr.svg" alt="" />
                      </p>
                    </div>
                  </div>
                </section>

                <OurProducts grid={grid} />
              </main>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Blog;
