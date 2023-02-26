import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
import {
  BsLinkedin,
  BsGithub,
  BsFacebook,
  BsYoutube,
  BsInstagram,
  BsDiscord,
  BsApple,
} from "react-icons/bs";
import { RiGooglePlayFill } from "react-icons/ri";
const Footer = () => {
  return (
    <>
      <footer className="footer__main text-white">
        <div className=" container-xxl py-5">
          <div className="row py-2 justify-content-center align-items-center ">
            <div className="col-lg-5 footer-signup">
              <div className="d-flex align-items-center gap-3">
                <img
                  src="images/newsletter.png"
                  alt="image of newsalert"
                  className="image-fluid "
                />
                <h3 className="newsletter mb-0">Sign Up for Newsletter</h3>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Email Address"
                  aria-label="Search Product"
                  aria-describedby="Search Product"
                />
                <button
                  className="btn text-white button-color button-padding"
                  type="button"
                  id="button-addon2"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row container-fluid mb-4 border-footer pt-4 ">
          <div className="col-lg-3 d-flex flex-column flex-wrap gap-2">
            <h4>Contact Us</h4>

            <p className="mb-1 py-2 font-footer-1">Demo Store</p>
            <div className="address font-footer-1">
              <p className="mb-1 ">No.1259 Freedom, New York, 111</p>
              <span>United States</span>
            </div>

            <a className="mb-1 py-2 font-footer" href="tel:+923094151413">
              +91-987654321
            </a>
            <a className="mb-1 py-2 font-footer" href="mailto:demo@gamil.com">
              Demo@gamil.com
            </a>
            <div className="d-flex flex-lg-row gap-2 fs-5 text-info">
              <BsFacebook />
              <BsGithub />
              <BsLinkedin />
              <BsDiscord />
              <BsInstagram />
              <BsYoutube />
            </div>
          </div>
          <div className="col-lg-2 d-flex flex-column flex-wrap gap-2">
            <h4>Information</h4>

            <Link className="mb-1 py-2 font-footer">Privacy Policy</Link>
            <Link className="mb-1 py-2 font-footer">Refund Policy</Link>
            <Link className="mb-1 py-2 font-footer">Shipping Policy</Link>
            <Link className="mb-1 py-2 font-footer">Terms of Service</Link>
            <Link className="mb-1 py-2 font-footer">Blogs</Link>
          </div>
          <div className="col-lg-2 d-flex flex-column flex-wrap gap-2">
            <h4>Account</h4>

            <Link className="mb-1 py-2 font-footer">Search</Link>
            <Link className="mb-1 py-2 font-footer">About Us</Link>
            <Link className="mb-1 py-2 font-footer">Faq</Link>
            <Link className="mb-1 py-2 font-footer">Contact</Link>
            <Link className="mb-1 py-2 font-footer">Size Chart</Link>
          </div>
          <div className="col-lg-2 d-flex flex-column flex-wrap gap-2">
            <h4>Quick Links</h4>

            <Link className="mb-1 py-2 font-footer">Accessories</Link>
            <Link className="mb-1 py-2 font-footer">Laptops</Link>
            <Link className="mb-1 py-2 font-footer">Headphones</Link>
            <Link className="mb-1 py-2 font-footer">Smart Watches</Link>
            <Link className="mb-1 py-2 font-footer">Tablets</Link>
          </div>
          <div className="col-lg-2 d-flex flex-column align-items-start flex-wrap gap-2">
            <h4>Our App</h4>

            <p className="mb-1 py-2 font-footer-2">
              Download our App and get Extra 15% Discount on your first Order..!
            </p>
            <div className="row gap-1 container">
              <Link
                to="https://googleplay.com"
                className="col col-md-12 col-sm-12 btn btn-light align-self-start padding text-dark"
              >
                <div className="d-flex align-items-center">
                  <RiGooglePlayFill className="fs-4" />
                  <div className="d-inline-flex flex-column  btn-text align-items-start d-inline-block mx-1">
                    <p>Get it on</p>
                    <p className="btn-text-inner">Google play</p>
                  </div>
                </div>
              </Link>
              <Link
                to="https://www.Apple.com"
                className="col col-md-12 col-sm-12 btn btn-primary align-self-start padding "
              >
                <div className="d-flex align-items-center">
                  <BsApple className="fs-4" />
                  <div className="d-flex flex-column flex-wrap btn-text align-items-center mx-1">
                    <p>Download on the</p>
                    <p className="btn-text-inner">App Store</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="d-flex justify-content-center py-2 border-footer">
            <div>
              &copy; {new Date().getFullYear()} Powered by Developer's Corner
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
