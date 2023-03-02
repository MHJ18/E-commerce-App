import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import BreadCrumbs from "../breadcrumbs/BreadCrumbs";
import "../compare/compare.scss";
const WishList = () => {
  const [checked, setchecked] = useState(true);
  const [products, setproducts] = useState([]);

  function close(e, indx) {
    setproducts(products.filter((item, ind) => ind !== indx));
    console.log(indx);
  }
  useEffect(() => {
    setproducts([
      {
        id: "1",
        image:
          "https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",

        others: {
          brand: "Honor Tab-17 8gb Rom 256GB Storage",
          info: "Sony",
          price: 100.0,
          discount: 16,
        },
      },
      {
        id: "2",
        image:
          "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",

        others: {
          brand: "Honor Tab-17 8gb Rom 256GB Storage",
          info: "Sony",
          price: 100.0,
          discount: 16,
        },
      },
    ]);
  }, [checked]);
  return (
    <>
      <Helmet>
        <title>Favourite-products</title>
        <link
          rel="icon"
          type="image/png"
          href="https://thenounproject.com/api/private/icons/122197/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABj_08NVsI-se-aqnFjzMz8W_wsWfDFTeqG_9BEptv2RGN-4h8MfdOYxGbcWTj_aWQg6avRjwx3oP0l-HWTOHbUQ7Id1w%3D%3D"
        />
      </Helmet>
      <BreadCrumbs />

      <main className="compare-wrapper bg-light Wishlist-wrapper">
        <section className="container-xxl py-4 d-flex flex-row flex-wrap align-items-center gap-2">
          {products.map((res, ind) => {
            return (
              <>
                <main key={ind} className="card-compare shadow-sm">
                  <div className="card border-0">
                    <div
                      className={` d-flex flex-column align-items-center ${
                        checked && "night-mode"
                      } `}
                    >
                      <div className="image-container position-relative">
                        <img
                          src={res.image}
                          style={{
                            objectFit: "cover",
                          }}
                          className="card-img-top img-fluid compare-img "
                          alt="..."
                        />
                        <svg
                          className="img-fluid cross-sign"
                          onClick={(e) => close(e, ind)}
                        >
                          <use xlinkHref="images/cross.svg#croos_1"></use>
                        </svg>
                      </div>
                      <div className="card-body align-self-start">
                        <p className="card-title compare-title ">
                          {res.others.brand}
                        </p>

                        <span className="product-price d-block full-price-discount text-discount">
                          {res.others.discount < 100 && (
                            <span className="">
                              $
                              {res.others.price -
                                (res.others.price * res.others.discount) / 100}
                            </span>
                          )}
                          <span
                            className="orignal-price "
                            style={{
                              textDecoration:
                                res.others.discount && "line-through",
                              margin: res.others.discount && "0 0.6rem",
                              color: res.others.discount && "#aaa",
                            }}
                          >
                            ${res.others.price}
                          </span>
                          {res.others.discount === 100 && (
                            <span className="mx-3 rounded-3 free-tag">
                              Free
                            </span>
                          )}
                        </span>

                        {/* AAdd to cart menu image */}

                        {res.others.discount && (
                          <span className="position-absolute d-none product-badge badge discount rounded-pill">
                            -{res.others.discount}%
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </main>
              </>
            );
          })}
        </section>
      </main>
    </>
  );
};

export default WishList;
