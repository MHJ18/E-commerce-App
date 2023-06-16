import React, { useEffect, useState } from "react";
import HoverRating from "../Products/Ratings";
import "./products.css";
import { Link } from "react-router-dom";

const OurProducts = ({ grid }) => {
  const [checked, setchecked] = useState(false);
  const [products, setproducts] = useState([]);
  function onclick() {
    setchecked(!checked);
    console.log("u clicked me");
  }

  useEffect(() => {
    setproducts([
      {
        id: "1",
        image:
          "https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",

        others: {
          brand: "Sony",
          info: "Some quick example text to build on the card title and make up the bulk of the card's content",
          price: 100.0,
          discount: 16,
        },
      },
      {
        id: "2",

        image:
          "https://images.unsplash.com/photo-1611496855431-6501b335c67f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",

        others: {
          brand: "Xiaomi",
          info: "Some quick example text to build on the card title and make up the bulk of the card's content .well if u need anything else",
          price: 100.0,
        },
      },
      {
        id: "2",

        image: "images/watch.jpg",

        others: {
          brand: "Havelts",
          info: "Some quick example text to build on the card title and make up the bulk of the card's content",
          price: 100.0,
          discount: 100,
        },
      },
      {
        id: "2",

        image: "images/watch.jpg",

        others: {
          brand: "Havelts",
          info: "Some quick example text to build on the card title and make up the bulk of the card's content",
          price: 100.0,
          discount: 100,
        },
      },
      {
        id: "2",

        image: "images/watch.jpg",

        others: {
          brand: "Havelts",
          info: "Some quick example text to build on the card title and make up the bulk of the card's content",
          price: 100.0,
          discount: 100,
        },
      },
    ]);
  }, [checked]);
  return (
    <>
      <section
        className={`container products__shop gap-10 d-flex px-0 flex-wrap  ${
          grid === "6" && "justify-content-between"
        } ${grid === "4" && "gap-2"} my-4`}
      >
        {products.map((res, ind) => {
          return (
            <>
              <main
                key={ind}
                className={`grid-${grid || 3} mb-2 store-wrapper `}
              >
                <div className="card store-wrapper  border-0 card-image">
                  <div
                    className={
                      grid === "12"
                        ? "d-flex flex-row align-items-center full-view"
                        : "d-flex flex-column align-items-center "
                    }
                  >
                    <Link to="/products/:id">
                      <img
                        src={res.image}
                        style={{
                          objectFit: "cover",
                        }}
                        className="card-img-top img-fluid store-wrapper"
                        alt="..."
                      />
                    </Link>
                    <div className="card-body align-self-start">
                      <p className="card-title product-branding full-brand">
                        {res.others.brand}
                      </p>
                      <p
                        className={`Card-text product-title mb-1 ${
                          grid !== 12 && "text-clamp"
                        } full-text`}
                      >
                        {res.others.info}
                      </p>
                      <p
                        className={`${
                          grid === "12"
                            ? "d-block mb-1 grid-text mt-2"
                            : "d-none"
                        }`}
                      >
                        {"Lorem ipsum dolor sit amet consectetur adipisicing elit.delectus exercitationem, alias repellendus. Nostrum impedit iste vero!".slice(
                          0,
                          170
                        )}
                      </p>
                      <HoverRating grid={grid} />
                      <span className="product-price  d-block full-price-discount">
                        {res.others.discount < 100 && (
                          <span className="">
                            $
                            {res.others.price -
                              (res.others.price * res.others.discount) / 100}
                          </span>
                        )}
                        <span
                          className="orignal-price full-price"
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

                      {/* AAdd to cart menu image */}

                      {res.others.discount && (
                        <span className="position-absolute product-badge badge discount rounded-pill">
                          -{res.others.discount}%
                        </span>
                      )}
                      <img
                        className="position-absolute full-like"
                        src="images/wish.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </main>
            </>
          );
        })}
      </section>
    </>
  );
};

export default OurProducts;
// OurProducts.defaultProps = {
//   grid: "3",
// };
