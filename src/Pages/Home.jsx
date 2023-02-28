import React from "react";
import { Link } from "react-router-dom";
import Badges from "../components/badges/Badges";
import Blog from "../components/blog/Blog";
import Collection from "../components/collection/Collection";
import FamousProducts from "../components/famous/FamousProducts";

import ProductsListing from "../components/Products/ProductsListing";
import SpecialProducts from "../components/Special/SpecialProducts";
import "./home.scss";
const Home = () => {
  return (
    <>
      <main className="main-home">
        <div className="home-container container-xxl mb-5">
          <div className="row align-items-start">
            <div className="col-6">
              <div
                id="carouselExampleIndicators"
                class="carousel slide rounded-2"
                data-bs-ride="true"
              >
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    class="active btn-carousal"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    className="btn-carousal"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                </div>
                <div class="carousel-inner rounded-3 ">
                  <div class="carousel-item active">
                    <img
                      src="images/main-banner-1.jpg"
                      class="d-block w-100"
                      alt="..."
                    />
                    <div className="image-text position-absolute">
                      <p className="image-text-title ">supercharged for pros</p>
                      <h4 className="image-heading">iPad S13+ pro</h4>
                      <p className="my-2 image-text-des  ">
                        From $999.00 or $41.62/mo
                      </p>
                      <Link className="btn btn-round mt-2 text-white">
                        Buy Now
                      </Link>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img
                      src="images/main-banner.jpg"
                      class="d-block w-100 "
                      alt="..."
                    />
                    <div className="image-text position-absolute">
                      <p className="image-text-title ">supercharged for pros</p>
                      <h4 className="image-heading">Special Sale</h4>
                      <p className=" image-text-des">
                        From $999.00 or $41.62/mo
                      </p>
                      <p className="mb-2 image-text-des">
                        for 24 mo. Footnote*
                      </p>
                      <Link className="btn btn-round mt-2 text-white">
                        Buy Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex align-items-center flex-wrap gap">
                <div className="flexbox-1 flexbox">
                  <div class="carousel-item active rounded-image hover">
                    <img
                      src="images/catbanner-01.jpg"
                      class="d-block w-100 img-fluid"
                      alt="..."
                    />
                    <div className="image-text position-absolute">
                      <p className="image-text-title-child ">
                        supercharged for pros
                      </p>
                      <h4 className="image-heading-child">iPad S13+ pro</h4>
                      <p className="my-2 image-text-des-child  ">
                        From $999.00 or $41.62/mo
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flexbox-2 flexbox">
                  <div class="carousel-item active rounded-image hover">
                    <img
                      src="images/catbanner-03.jpg"
                      class="d-block w-100 "
                      alt="..."
                    />
                    <div className="image-text position-absolute">
                      <p className="image-text-title-child ">
                        supercharged for pros
                      </p>
                      <h4 className="image-heading-child">iPad S13+ pro</h4>
                      <p className="my-2 image-text-des-child  ">
                        From $999.00 or $41.62/mo
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex-box-3 flexbox">
                  <div class="carousel-item active rounded-image hover">
                    <img
                      src="images/catbanner-02.jpg"
                      class="d-block w-100 "
                      alt="..."
                    />
                    <div className="image-text position-absolute">
                      <p className="image-text-title-child ">
                        supercharged for pros
                      </p>
                      <h4 className="image-heading-child">iPad S13+ pro</h4>
                      <p className="my-2 image-text-des-child  ">
                        From $999.00 or $41.62/mo
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex-box-4 flexbox">
                  <div class="carousel-item active rounded-image hover">
                    <img
                      src="images/catbanner-04.jpg"
                      class="d-block w-100 "
                      alt="..."
                    />
                    <div className="image-text position-absolute">
                      <p className="image-text-title-child ">
                        supercharged for pros
                      </p>
                      <h4 className="image-heading-child">iPad S13+ pro</h4>
                      <p className="my-2 image-text-des-child  ">
                        From $999.00 or $41.62/mo
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <main className="main-home-secondary">
        <Badges />
        <Collection />
        <ProductsListing />
        <FamousProducts />
        <Blog />
        <SpecialProducts />
      </main>
    </>
  );
};

export default Home;
