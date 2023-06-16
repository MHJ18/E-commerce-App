import React from "react";
import Helmett from "../Helmet";
import BreadCrumbs from "../breadcrumbs/BreadCrumbs";
import "../Storeproducts/products.css";
import { Link } from "react-router-dom";
import "./singleblog.scss";
import { BsArrowLeft } from "react-icons/bs";
const SingleBlog = () => {
  return (
    <>
      <Helmett title={"Dynamic-Title"} />
      <BreadCrumbs />
      <div className="bg-light ">
        <section className="blogview-Wrapper container-xxl py-4">
          <div className="row gap-2">
            <div className="col-3 ">
              <div className="sidebar__1 rounded-4 mx-2 p-3 bg-gray shadow-sm">
                <h5 className="sidebar-heading">Shop By Categories</h5>
                <ul className="ps-0">
                  <li className="category-list">Watch</li>
                  <li className="category-list">Smart Tv</li>
                  <li className="category-list">Camera</li>
                  <li className="category-list">Laptop</li>
                </ul>
              </div>
            </div>
            <main className="main-blog col-8">
              <div>
                {/* blog section */}
                <h5 className="text-secondary mb-3">
                  A Beautiful Sunday Morning Renaissance
                </h5>
                <img
                  src="images/main-banner.jpg"
                  className="img-fluid image-blogview rounded w-100"
                  alt=""
                />
              </div>
              <div className="des-container d-flex flex-column gap-2">
                <p className="description mt-3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nihil veniam nulla distinctio praesentium fuga dolore quos
                  quaerat velit? Quis voluptate id nulla sed libero quod
                  laudantium laboriosam veritatis aperiam explicabo.
                </p>
                <Link to="/blog" className="text-danger blogs-marker mt-3">
                  <BsArrowLeft /> Back to Blogs
                </Link>
              </div>
            </main>
          </div>
        </section>
      </div>
    </>
  );
};

export default SingleBlog;
