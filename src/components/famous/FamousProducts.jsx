import React from "react";
import "./famous.scss";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
export const products = [
  {
    id: "0",
    featured: true,
    fdetails: {
      image:
        "https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      title: "Home Speakers",
      time: "From $399 or $16.62/mo.",
      duration: "for 24 mo.*",
      category: "Smartphones".toUpperCase(),
    },
  },
  {
    id: "1",
    featured: true,
    fdetails: {
      image:
        "https://images.unsplash.com/photo-1658824026666-12be29114ab5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      title: "Home Speakers",
      time: "From $399 or $16.62/mo.",
      duration: "for 24 mo.*",
      category: "Studio Display".toUpperCase(),
    },
  },
  {
    id: "2",
    featured: true,
    fdetails: {
      image:
        "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      title: "Home Speakers",
      time: "From $399 or $16.62/mo.",
      duration: "for 24 mo.*",
      category: "Studio Display".toUpperCase(),
    },
  },
  {
    id: "3",
    featured: true,
    fdetails: {
      image:
        "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=629&q=80",
      title: "Home Speakers",
      time: "From $399 or $16.62/mo.",
      duration: "for 24 mo.*",
      category: "Studio Display".toUpperCase(),
    },
  },
];
const FamousProducts = () => {
  return (
    <>
      <main className="container-xxl mt-4  ">
        <div className="card-header d-flex justify-content-between align-items-baseline">
          <h4>Featured Collection</h4>
          <p>
            <AiOutlineLeft />
            <AiOutlineRight />
          </p>
        </div>
      </main>
      <section className="container-xxl mt-4 famous-main">
        <main className="d-flex flex-row gap-2 flex-wrap ">
          {products.map((res) => {
            return (
              <>
                <div
                  class="card border-0 famous-card position-relative"
                  style={{
                    width: "24.5%",
                    height: "25rem",
                    overflow: "hidden",
                  }}
                >
                  <div className="card-body famous-position position-absolute ">
                    <p className="text-white famous-brand">
                      {res.fdetails.category}
                    </p>
                    <h5 className="card-title famous-title mt-2">
                      {res.fdetails.title}
                    </h5>
                    <p className="card-text famous-text mt-2">
                      {res.fdetails.time} {res.fdetails.duration}
                    </p>
                  </div>
                  <img
                    src={res.fdetails.image}
                    class="card-img-bottom famous-image"
                    alt="..."
                  />
                </div>
              </>
            );
          })}
        </main>
      </section>
    </>
  );
};

export default FamousProducts;
