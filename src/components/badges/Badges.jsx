import React from "react";
import "./badges.scss";
const Badges = () => {
  return (
    <>
      <figure className="container-xxl badges-container">
        <div className="d-flex flex-row justify-content-between align-items-center">
          <div className="facilities-1 d-flex align-items-center gap-3">
            <img
              src="images/service.png"
              className="image-fluid d-block"
              alt="delivery icon"
            />
            <div className="d-flex flex-column">
              <p className="detail-heading">Free Shipping</p>
              <p className="detail-des">From all orders over $5</p>
            </div>
          </div>
          <div className="facilities-1 d-flex align-items-center gap-3">
            <img
              src="images/service-02.png"
              className="image-fluid d-block"
              alt="delivery icon"
            />
            <div className="d-flex flex-column">
              <p className="detail-heading">Daily Suprise Offers</p>
              <p className="detail-des">Save upto 25% off</p>
            </div>
          </div>
          <div className="facilities-1 d-flex align-items-center gap-3">
            <img
              src="images/service-03.png"
              className="image-fluid d-block"
              alt="delivery icon"
            />
            <div className="d-flex flex-column">
              <p className="detail-heading">Support 24/7</p>
              <p className="detail-des">Shop with an expert</p>
            </div>
          </div>
          <div className="facilities-1 d-flex align-items-center gap-3">
            <img
              src="images/service-04.png"
              className="image-fluid d-block"
              alt="delivery icon"
            />
            <div className="d-flex flex-column">
              <p className="detail-heading">Affordable Prices</p>
              <p className="detail-des">Get factory Default Price</p>
            </div>
          </div>
          <div className="facilities-1 d-flex align-items-center gap-3">
            <img
              src="images/service-05.png"
              className="image-fluid d-block"
              alt="delivery icon"
            />
            <div className="d-flex flex-column">
              <p className="detail-heading">Secure Payments</p>
              <p className="detail-des">100% Protected Payment</p>
            </div>
          </div>
        </div>
      </figure>
    </>
  );
};

export default Badges;
