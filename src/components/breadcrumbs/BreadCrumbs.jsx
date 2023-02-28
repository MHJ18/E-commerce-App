import React, { useEffect } from "react";
import { Link, NavLink, useLocation, Navigate } from "react-router-dom";
import "./bread.scss";

const BreadCrumbs = (props) => {
  const nav = useLocation();

  return (
    <>
      <aside className="container-xxl ">
        <div className="d-flex justify-content-center">
          <nav className="bread" aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item text-info">
                <Link to="/">Home</Link>
              </li>
              <li class="breadcrumb-item" aria-current="page">
                {nav.pathname.slice(1)}
              </li>
            </ol>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default BreadCrumbs;
BreadCrumbs.defaultProps = {
  path: "Store",
};
