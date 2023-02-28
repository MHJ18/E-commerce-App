import React, { useEffect, useLayoutEffect, useState } from "react";
import HoverRating from "./Ratings";
import "./product.scss";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import $ from "jquery";
const ProductsListing = () => {
  const [checked, setchecked] = useState(false);
  const [products, setproducts] = useState([]);
  function onclick() {
    setchecked(!checked);
    console.log("u clicked me");
  }

  useEffect(() => {
    setproducts([
      {
        id: "0",
        featured: true,
        fdetails: {
          image:
            "https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          title: "Home Speakers",
          time: "From $399 or $16.62/mo.",
          duration: "for 24 mo.*",
          discount: 15,
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
        id: "2",

        image: "images/watch.jpg",
        image2: "images/tab1.jpg",
        others: {
          brand: "Havelts",
          info: "Some quick example text to build on the card title and make up the bulk of the card's content",
          price: 100.0,
          discount: 100,
        },
      },
      {
        id: "3",
        image: "images/watch.jpg",
        image2: "images/tab1.jpg",
        others: {
          brand: "Havelts",
          info: "Some quick example text to build on the card title and make up the bulk of the card's content",
          price: 100.0,
        },
      },
    ]);
  }, [checked]);
  return (
    <>
      <main className="container-xxl mt-4 ">
        <div className="card-header d-flex justify-content-between align-items-baseline">
          <h4>Featured Collection</h4>
          <p>
            <AiOutlineLeft />
            <AiOutlineRight />
          </p>
        </div>
      </main>
      <section className="container-xxl  products__shop d-flex gap-3 my-4 ">
        <div className="card" style={{ maxWidth: "11rem" }}>
          <div className="row g-0 align-items-center justify-content-center">
            <div className="col-md-4">
              <img
                src="images/watch.jpg"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title fs-6">Smart Watch</h5>
              </div>
            </div>
            <div className="col-md-4">
              <img
                src="images/speaker.jpg"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title fs-6">Speaker</h5>
              </div>
            </div>
            <div className="col-md-4">
              <img
                src="images/laptop.jpg"
                className="img-fluid rounded-start object-cover"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title fs-6">Laptops</h5>
              </div>
            </div>
          </div>
        </div>
        {products.map((res, ind) => {
          return (
            <>
              {res?.featured ? (
                <div
                  className="card featured-card position-relative"
                  style={{ width: "15rem" }}
                >
                  <img
                    src={res.fdetails.image}
                    className="card-img-top featured-image"
                    alt="..."
                  />
                  <div className="card-body text-position position-absolute">
                    <p className=" featured-discount">
                      {res.fdetails.discount}% OFF
                    </p>
                    <h5 className="card-title featured-title">
                      {res.fdetails.title}
                    </h5>
                    <p className="card-text featured-text">
                      {res.fdetails.time}
                    </p>
                    <p className="card-text ">
                      <small className=" featured-text">
                        {res.fdetails.duration}
                      </small>
                    </p>
                  </div>
                </div>
              ) : (
                <div
                  key={res.id}
                  className="card border-0 position-relative card-image"
                  style={{ width: "15rem" }}
                >
                  <img
                    src={res.image}
                    className="card-img-top image-primary"
                    alt="..."
                    style={{ display: !res.image2 && "block" }}
                  />
                  {res?.image2 && (
                    <img
                      src={res.image2}
                      className="card-img-top image-secondary"
                      alt="image-second"
                    />
                  )}
                  <div className="card-body">
                    <p className="card-title product-branding">
                      {res.others.brand}
                    </p>
                    <p className="Card-text product-title mb-2">
                      {res.others.info.slice(0, 50)}
                      ...
                    </p>
                    <HoverRating />
                    <span className="product-price mt-2 d-block">
                      {res.others.discount < 100 && (
                        <span className="">
                          $
                          {res.others.price -
                            (res.others.price * res.others.discount) / 100}
                        </span>
                      )}
                      <span
                        className="orignal-price"
                        style={{
                          textDecoration: res.others.discount && "line-through",
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

                    <div className="like-container position-absolute position-like d-flex flex-column">
                      <form onSubmit={(e) => e.preventDefault()}>
                        <input
                          name="check"
                          type="checkbox"
                          className="input-product d-none "
                          id="like"
                        />
                        <label key={ind} htmlFor="like" onClick={onclick}>
                          <span className="product-like">
                            <svg
                              viewBox="0 0 29 29"
                              fill="currentcolor"
                              xmlns="http://www.w3.org/2000/svg"
                              stroke="currentcolor"
                              className="like-icon"
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
                      </form>
                    </div>
                    {/* AAdd to cart menu image */}

                    {res.others.discount && (
                      <span className="position-absolute product-badge badge rounded-pill">
                        -{res.others.discount}%
                      </span>
                    )}
                    <div className="product-options px-2 position-bar position-absolute d-flex flex-column gap-3 ">
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
                </div>
              )}
            </>
          );
        })}
      </section>
    </>
  );
};

export default ProductsListing;
