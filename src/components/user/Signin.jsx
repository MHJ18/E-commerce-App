import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, Navigate } from "react-router-dom";
import BreadCrumbs from "../breadcrumbs/BreadCrumbs";
import Form from "../form/Form";
import "./signin.scss";
const Signin = () => {
  const [navigate, setnavigate] = useState(false);
  return (
    <>
      {navigate && <Navigate to="/user" />}
      <Helmet>
        <title>Favourite-products</title>
        <link
          rel="icon"
          type="image/png"
          href="https://thenounproject.com/api/private/icons/122197/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABj_08NVsI-se-aqnFjzMz8W_wsWfDFTeqG_9BEptv2RGN-4h8MfdOYxGbcWTj_aWQg6avRjwx3oP0l-HWTOHbUQ7Id1w%3D%3D"
        />
      </Helmet>
      <BreadCrumbs />
      <main className="bg-light user-warapper night-mode">
        <section className="container-xxl py-4 ">
          <div className="row py-3 rounded justify-content-center ">
            <div className=" p-4 gap-3 rounded-3 d-flex col-5 bg-white flex-column  align-items-center">
              <div className="text-center mb-3">
                <h5 className="form-title">Reset Your Password</h5>
                <h6 className="reset-text">
                  We will send u an email to reset your password
                </h6>
              </div>
              <div className="align-self-start col-8 ps-4 input-container">
                <div className="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control bg-light sign-input "
                  />
                </div>
                <p className="input-text">
                  *Email should br the one used during account creation
                </p>
              </div>

              <div className=" d-flex flex-lg-row flex-sm-column flex-wrap gap-3 ">
                <button type="button" class="btn btn-outline-info rounded-4">
                  Submit
                </button>
                <button
                  onClick={() => {
                    setnavigate(true);
                  }}
                  type="button"
                  class="btn btn-outline-dark rounded-4"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Signin;
