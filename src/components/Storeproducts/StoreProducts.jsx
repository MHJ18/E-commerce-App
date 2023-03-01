import React, { useState } from "react";
import { Link } from "react-router-dom";
import OurProducts from "./OurProducts";
import "./products.css";

const StoreProducts = () => {
  const [grid, setgrid] = useState("3");
  function onclick(e) {
    console.log(e.target.closest("p").dataset.set);
    setgrid(e.target.closest("p").dataset.set);
  }
  return (
    <>
      <main className="products-store">
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
                  <li value="best-selling" className="dropdown-item active">
                    Best Selling
                  </li>
                  <li value="title-ascending" className="dropdown-item ">
                    Aplhabetically, A-Z
                  </li>
                  <li value="title-descending" className="dropdown-item ">
                    Aplhabetically, Z-A
                  </li>
                  <li value="price-ascending" className="dropdown-item ">
                    Price, low to high
                  </li>
                  <li value="price-descending" className="dropdown-item ">
                    Price, high to low
                  </li>
                  <li value="created-descending" className="dropdown-item">
                    Date, new to old
                  </li>
                  <li value="created-ascending" className="dropdown-item ">
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
                <img className="img-fluid" src="images/gr4.svg" alt="" />
              </p>
              <p data-set="4" className="layout rounded-3 px-2 py-1">
                <img className="img-fluid" src="images/gr3.svg" alt="" />
              </p>
              <p data-set="6" className="layout rounded-3 px-2 py-1">
                <img className="img-fluid" src="images/gr2.svg" alt="" />
              </p>
              <p data-set="12" className="layout rounded-3 px-2 py-1">
                <img className="img-fluid" src="images/gr.svg" alt="" />
              </p>
            </div>
          </div>
        </section>
        <OurProducts grid={grid} />
      </main>
    </>
  );
};

export default StoreProducts;
