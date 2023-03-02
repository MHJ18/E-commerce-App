import React from "react";
import { Helmet } from "react-helmet";
import BreadCrumbs from "../components/breadcrumbs/BreadCrumbs";
import Form from "../components/form/Form";
import { FaHome, FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { BsCalendarDateFill } from "react-icons/bs";
const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us</title>
        <link
          rel="icon"
          type="image/png"
          href="https://thenounproject.com/api/private/icons/122197/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABj_08NVsI-se-aqnFjzMz8W_wsWfDFTeqG_9BEptv2RGN-4h8MfdOYxGbcWTj_aWQg6avRjwx3oP0l-HWTOHbUQ7Id1w%3D%3D"
        />
      </Helmet>
      <BreadCrumbs />
      <main className="bg-light">
        <section className="container-xxl py-4">
          <div className="row gap-3">
            <div className="col-lg-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76947.17135454417!2d74.40312662279815!3d31.53468678524804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1677676543307!5m2!1sen!2s"
                width="100%"
                height="450"
                style={{}}
                allowfullscreen={true}
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="d-flex gap-4 flex-lg-row flex-sm-column bg-white rounded-3 shadow-sm py-3">
              <div className="col-5 px-4">
                <h5 className="fs-4 ">Contact</h5>
                <Form />
                <button type="submit" className="btn btn-dark rounded-4 px-3">
                  Submit
                </button>
              </div>
              <div className="col">
                <div className="d-flex flex-column gap-3">
                  <h5 className="fs-4 ">Get In Touch With Us</h5>
                  <p
                    className="d-flex flex-row align-items-center gap-2 form-text"
                    style={{ fontSize: "0.9rem", lineHeight: 1.4 }}
                  >
                    <span>
                      <FaHome className="fs-4" />
                    </span>
                    33 New Montgomery St. 750 San Francisco,CA , USA 94105
                  </p>
                  <p
                    className="d-flex flex-row align-items-center gap-2 form-text"
                    style={{ fontSize: "0.9rem" }}
                  >
                    <span>
                      <FaPhoneAlt className="fs-4" />
                    </span>
                    (+92)7-723-4608
                  </p>
                  <p
                    className="d-flex flex-row align-items-center gap-2 form-text"
                    style={{ fontSize: "0.9rem" }}
                  >
                    <span>
                      <HiMail className="fs-4" />
                    </span>
                    Hassaanjaved82@gmail.com
                  </p>
                  <p
                    className="d-flex flex-row align-items-center gap-2 form-text"
                    style={{ fontSize: "0.9rem" }}
                  >
                    <span>
                      <BsCalendarDateFill className="fs-4" />
                    </span>
                    Monday - Friday 10 AM-8 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
