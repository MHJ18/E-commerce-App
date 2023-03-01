import React, { useState, useEffect } from "react";
import "./special.scss";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import HalfRating from "../Products/Ratings";

const SpecialProducts = () => {
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
        image: "images/tab.jpg",
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
      <main className="container-xxl special-main products__shop ">
        <div className="card-header d-flex justify-content-between align-items-baseline my-3">
          <h4>Our Latest News</h4>
          <p>
            <AiOutlineLeft />
            <AiOutlineRight />
          </p>
        </div>

        <div className="d-flex flex-row gap-2 flex-wrap">
          {products.map((res, ind) => {
            return (
              <>
                <div
                  key={res.id}
                  className="product-first"
                  style={{ maxWidth: "32.9%" }}
                >
                  <div className="d-flex flex-row card border-0 card-image ">
                    <div className="image-special position-relative">
                      <img
                        src={res.image}
                        className="img-fluid d-block "
                        alt="..."
                      />
                      <div className="product-options px-2 position-bar special-options position-absolute d-flex flex-column gap-3 ">
                        <svg>
                          <use xlinkHref="images/add-cart.svg#i-cart"></use>
                        </svg>
                        <svg>
                          <use xlinkHref="images/prodcompare.svg#Layer_1"></use>
                        </svg>
                        <svg>
                          <use xlinkHref="images/view.svg#Capa_1"></use>
                        </svg>
                      </div>
                    </div>

                    <div className="card-body">
                      <p className="card-title product-branding">
                        {res.others.brand}
                      </p>
                      <p className="Card-text product-title mb-2">
                        {res.others.info.slice(0, 50)}
                        ...
                      </p>
                      <HalfRating />
                      <span className="product-price mt-2 d-block">
                        {res.others.discount < 100 && (
                          <span className="text-danger">
                            $
                            {res.others.price -
                              (res.others.price * res.others.discount) / 100}
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
                          <span className="mx-3  rounded-3 free-tag">Free</span>
                        )}
                      </span>

                      <div className="like-container position-absolute position-like special-like d-flex flex-column">
                        <input
                          name="check"
                          type="checkbox"
                          className="input-product d-none "
                          id="like"
                        />
                        <label htmlFor="like" onClick={onclick}>
                          <span className="product-like ">
                            <svg
                              viewBox="0 0 29 29"
                              fill="currentcolor"
                              xmlns="http://www.w3.org/2000/svg"
                              stroke="currentcolor"
                              className="like-icon "
                              style={{
                                color: checked && "rgb(192, 11, 11)",
                              }}
                            >
                              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                <rect width="24" height="24" fill="#fff"></rect>
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M5.36129 3.46995C6.03579 3.16081 6.76287 3 7.50002 3C8.23718 3 8.96425 3.16081 9.63875 3.46995C10.3129 3.77893 10.9185 4.22861 11.4239 4.78788C11.7322 5.12902 12.2678 5.12902 12.5761 4.78788C13.5979 3.65726 15.0068 3.00001 16.5 3.00001C17.9932 3.00001 19.4021 3.65726 20.4239 4.78788C21.4427 5.91515 22 7.42425 22 8.9792C22 10.5342 21.4427 12.0433 20.4239 13.1705L14.2257 20.0287C13.0346 21.3467 10.9654 21.3467 9.77429 20.0287L3.57613 13.1705C3.07086 12.6115 2.67474 11.9531 2.40602 11.2353C2.13731 10.5175 2 9.75113 2 8.9792C2 8.20728 2.13731 7.44094 2.40602 6.72315C2.67474 6.00531 3.07086 5.34694 3.57613 4.78788C4.08157 4.22861 4.68716 3.77893 5.36129 3.46995Z"
                                  fill="currentcolor"
                                ></path>
                              </g>
                            </svg>
                          </span>
                        </label>
                      </div>
                      {/* AAdd to cart menu image */}

                      {res.others.discount && (
                        <span className="position-absolute product-badge badge rounded-pill discount-special">
                          -{res.others.discount}%
                        </span>
                      )}
                      <div className="d-inline-flex flex-lg-row gap-2 align-items-baseline my-2 ">
                        <p>
                          <strong>5 </strong>days
                        </p>
                        <div className="d-flex flex-lg-row justify-content-center gap-1">
                          <figure className="bg-warning text-white round-time rounded-circle d-flex justify-content-center align-items-center">
                            1
                          </figure>
                          :
                          <figure className="bg-warning text-white round-time rounded-circle d-flex justify-content-center align-items-center">
                            1
                          </figure>
                          :
                          <figure className="bg-warning text-white round-time rounded-circle d-flex justify-content-center align-items-center">
                            1
                          </figure>
                        </div>
                      </div>
                      <div className="d-flex flex-column gap-1">
                        <p className="products-count-title">
                          Products<span className="products-count">: 200</span>
                        </p>
                        <div
                          class="progress"
                          style={{
                            height: "8px",
                          }}
                        >
                          <div
                            class="progress-bar"
                            role="progressbar"
                            aria-label="Basic example"
                            style={{ width: "15%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <button className="btn mt-3 text-uppercase btn-md btn-dark rounded-4 align-self-start">
                          Option
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default SpecialProducts;
