import React from "react";
import Helmett from "../Helmet";
import BreadCrumbs from "../breadcrumbs/BreadCrumbs";
import "./product.scss";
import HalfRating from "./Ratings";
import { Link } from "react-router-dom";
import { useState } from "react";
import ReviewForm from "./ReviewForm";
import ProductDescription from "./ProductDescription";
import ReactImageZoom from "react-image-zoom";
const Products = () => {
  const [orderedproduct, setorderedProduct] = useState(true);

  return (
    <div>
      <Helmett title={"Product | Listing"} />
      <BreadCrumbs />
      <section className="product_wrapper py-5 bg-light">
        <main className=" container-xxl bg-white rounded-3 shadow">
          {/* product section */}
          <div className="div-left d-flex flex-row gap-3 p-2 py-4 justify-content-start align-items-stretch">
            <div className="product-image p-1 border col-5">
              <img
                className="img-fluid product-overview"
                src="https://images.unsplash.com/photo-1585298723682-7115561c51b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                alt=""
              />
            </div>
            <div className="product-details ps-2">
              <h5 className="text-uppercase fw-semibold mb-3 text-secondary d-flex flex-column gap-2 ">
                Black Headphones Bulk 10 Pack Multi Colored For Students
              </h5>
              <p className="product-price fw-semibold text-danger fs-6 mb-2">
                $100.00
              </p>
              <HalfRating />
              <main className="d-flex flex-column gap-3">
                <div class="input-group input-group-sm">
                  <input
                    type="text"
                    class="form-control border-bottom my-2 pb-2"
                    aria-label="Small"
                    placeholder="write a review"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div className="product-category pt-3">
                  <span className="fw-semibold text-dark fs-6">Type :</span>
                  <span className="text-lighter ms-1"> Headsets</span>
                </div>
                <div className="product-category ">
                  <span className="fw-semibold text-dark">Brand :</span>
                  <span className="text-lighter ms-1 "> Razor</span>
                </div>
                <div className="product-category ">
                  <span className="fw-semibold text-dark">Categories :</span>
                  <div className="text-lighter fs-7 ">
                    <div className="sidebar__3 ps-3">
                      <div className="d-flex flex-wrap align-items-center mt-2 gap-1">
                        <p className="badge fs-7  tag p-2 tags text-secondary">
                          Headphone
                        </p>
                        <p className="badge fs-7 tag p-2  tags text-secondary">
                          Head
                        </p>
                        <p className="badge fs-7 tag p-2  tags text-secondary">
                          phone
                        </p>
                        <p className="badge fs-7 tag p-2 tags  text-secondary">
                          Head
                        </p>
                        <p className="badge fs-7 tag p-2 tags text-secondary">
                          Phone
                        </p>
                        <p className="badge fs-7 tag p-2  tags text-secondary">
                          Laptop
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-category">
                  <span className="fw-semibold text-dark">Tags :</span>
                  <span className="text-lighter d-inline-flex gap-4 flex-row align-items-center">
                    &nbsp;
                    <p>headphones</p>
                    <p>laptop</p>
                    <p>
                      <i class="fa fa-mobile" aria-hidden="true">
                        mobiles
                      </i>
                    </p>
                  </span>
                </div>
                <div className="product-category ">
                  <span className="fw-semibold text-dark">SKU :</span>
                  <span className="text-lighter ms-1 "> SKU027</span>
                </div>
                <div className="product-category ">
                  <span className="fw-semibold text-dark">Availability :</span>
                  <span className="text-lighter ms-1 ">
                    <span className="text-cyan">541</span> in stock
                  </span>
                </div>
                <div className="product-category">
                  <p className="fw-semibold text-dark">Size :</p>
                  <div className="d-flex flex-row gap-2">
                    <button className="btn btn-outline-primary px-3 btn-sm">
                      S
                    </button>
                    <button className="btn btn-outline-primary px-3 btn-sm">
                      M
                    </button>
                    <button className="btn btn-outline-primary px-3 btn-sm">
                      L
                    </button>
                  </div>
                </div>
                <div className="product-category ">
                  <span className="fw-semibold text-dark">Color :</span>
                  <div>
                    <button className=" colors-pick-1 color-picker ms-1 color-select-product"></button>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </main>
        <main className="my-4">
          <ProductDescription />
        </main>
        <main className="reviews-wrapper my-4">
          <div className="container-xxl p-0">
            <h4 className="text-uppercase fw-semibold">reviews</h4>
            <div className="py-3 px-2 d-flex flex-column gap-2">
              <div className="bg-platinum rounded-3 border-bottom p-3 shadow-light">
                <p className="fw-semibold ">Customer Reviews</p>
                <span className="d-flex gap-2 align-items-center justify-content-between">
                  <p className="d-flex flex-row gap-2 align-items-center">
                    <HalfRating />
                    <small className="fs-7 mb-1">Based on 2 reviews</small>
                  </p>
                  {orderedproduct && (
                    <button
                      class="bg-platinum border-bottom border-danger fs-7 text-secondary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      write a review
                    </button>
                  )}
                </span>

                <div
                  id="collapseOne"
                  class="accordion-collapse collapse "
                  data-bs-parent="#accordionExample"
                >
                  <form>
                    <ReviewForm />
                  </form>
                </div>
              </div>
              <div className="reviews-border bg-white p-3">
                <HalfRating />
                <img
                  src="/users/default.jpg"
                  alt=""
                  className="rounded-circle"
                  width={"40px"}
                />

                <span className="d-flex gap-2 align-items-center justify-content-between">
                  <div>
                    <p className="fs-7">
                      <span className="fw-semibold">aaaaaaa </span>
                      on
                      <span className="fw-semibold"> Aug 29,2022</span>
                    </p>
                    <p className="fs-7 my-3">
                      Nice work though , i really enjoyed this product
                    </p>
                  </div>
                  <Link class="fs-7 text-secondary border-bottom ">
                    write a review
                  </Link>
                </span>
              </div>
              <div className="reviews-border bg-white p-3">
                <HalfRating />
                <img
                  src="/users/default.jpg"
                  alt=""
                  className="rounded-circle"
                  width={"40px"}
                />

                <span className="d-flex gap-2 align-items-center justify-content-between">
                  <div>
                    <p className="fs-7">
                      <span className="fw-semibold">aaaaaaa </span>
                      on
                      <span className="fw-semibold"> Aug 29,2022</span>
                    </p>
                    <p className="fs-7 my-3">
                      Nice work though , i really enjoyed this product
                    </p>
                  </div>
                </span>
              </div>
              <div className="reviews-border bg-white p-3">
                <HalfRating />
                <img
                  src="/users/default.jpg"
                  alt=""
                  className="rounded-circle"
                  width={"40px"}
                />
                <div>
                  <p className="fs-7">
                    <span className="fw-semibold text-jasper">Ali </span>
                    on
                    <span className="text-secondary fw-semibold ms-1">
                      Aug 29,2022
                    </span>
                  </p>
                  <p className="fs-7 my-3 mt-2 text-secondary">
                    Nice work though , i really enjoyed this product
                  </p>
                  <div className="client-response bg-light p-3 rounded-2 ms-4">
                    <div className="response-details">
                      <h6 className="">- Digitic</h6>
                      <p className="fs-7 fw-normal text-secondary">
                        Please let us know if we can do anything for you
                      </p>
                    </div>
                  </div>
                </div>

                <Link class="fs-8 reviews-links text-secondary d-block text-end mt-2">
                  Report as inappropriate
                </Link>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Products;
