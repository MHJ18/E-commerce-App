import React, { useLayoutEffect, useState } from "react";
import "./collection.scss";
import Marquee from "react-fast-marquee";
const Collection = () => {
  const [products, setproducts] = useState([]);
  useLayoutEffect(() => {
    setproducts([
      {
        img: "images/camera.jpg",
        details: { name: "Camera", quantity: "10 Items" },
      },
      {
        img: "images/tv.jpg",
        details: { name: "Smart Tv", quantity: "10 Items" },
      },
      {
        img: "images/camera.jpg",
        details: { name: "Smart Watches", quantity: "10 Items" },
      },
      {
        img: "images/headphone.jpg",
        details: { name: "Music & Gaming", quantity: "10 Items" },
      },
      {
        img: "images/camera.jpg",
        details: { name: "Camera", quantity: "10 Items" },
      },
      {
        img: "images/camera.jpg",
        details: { name: "Camera", quantity: "10 Items" },
      },
      {
        img: "images/camera.jpg",
        details: { name: "Camera", quantity: "10 Items" },
      },
      {
        img: "images/camera.jpg",
        details: { name: "Camera", quantity: "10 Items" },
      },
    ]);
  }, []);

  return (
    <>
      <section className="items-collection">
        <main className="container-xxl items-container py-4">
          <div className="d-flex flex-wrap gap border-class">
            {products?.map(function (res, ind) {
              return (
                <>
                  <div
                    key={ind}
                    className="product d-flex flex-lg-row align-items-center gap-2 "
                  >
                    <img src={res.img} alt="" />
                    <div>
                      <h6>{res.details.name}</h6>
                      <p>{res.details.quantity}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <main className="brands-logo">
            <Marquee
              behavior="smooth"
              direction="right"
              speed="50"
              gradient={false}
              play={false}
              style={{ height: 100 }}
            >
              <div className="d-flex gap-3">
                <div className="brands-image">
                  <img src="images/brand-01.png" alt="" />
                </div>
                <div className="brands-image">
                  <img src="images/brand-02.png" alt="" />
                </div>
                <div className="brands-image">
                  <img src="images/brand-03.png" alt="" />
                </div>
                <div className="brands-image">
                  <img src="images/brand-04.png" alt="" />
                </div>
                <div className="brands-image">
                  <img src="images/brand-05.png" alt="" />
                </div>
                <div className="brands-image">
                  <img src="images/brand-06.png" alt="" />
                </div>
                <div className="brands-image">
                  <img src="images/brand-07.png" alt="" />
                </div>
                <div className="brands-image">
                  <img src="images/brand-08.png" alt="" />
                </div>
              </div>
            </Marquee>
          </main>
        </main>
      </section>
    </>
  );
};

export default Collection;
