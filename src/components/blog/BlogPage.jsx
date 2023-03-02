import React, { useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import "./blog.scss";
const BlogPage = ({ grid }) => {
  const [cards, setcards] = useState([]);
  useLayoutEffect(() => {
    setcards([
      {
        image:
          "https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        details: {
          title: "Card Title",
          info: " Some quick example text to build on the card title and make up the bulk of the card's content",
        },
      },
      {
        image: "images/blog-1.jpg",
        details: {
          title: "Card Title",
          info: " Some quick example text to build on the card title and make up the bulk of the card's content",
        },
      },
      {
        image: "images/blog-1.jpg",
        details: {
          title: "Card Title",
          info: " Some quick example text to build on the card title and make up the bulk of the card's content",
        },
      },
      {
        image: "images/blog-1.jpg",
        details: {
          title: "Card Title",
          info: " Some quick example text to build on the card title and make up the bulk of the card's content",
        },
      },
    ]);
  }, []);
  return (
    <>
      <section
        className={`container blogs__shop gap-10 d-flex px-0 flex-wrap  ${
          grid === "6" && "justify-content-between"
        } ${grid === "4" && "gap-2"} my-4`}
      >
        {cards.map((res, ind) => {
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
                        ? "d-flex flex-row align-items-center full-view blog-full"
                        : "d-flex flex-column align-items-center "
                    }
                  >
                    <img
                      src={res.image}
                      style={{
                        objectFit: "cover",
                      }}
                      className="card-img-top img-fluid store-wrapper blog-image"
                      alt="..."
                    />
                    <div class="card-body">
                      <p class="card-text">
                        <small class="text-muted card-date ">
                          11 JUNE, 2022
                        </small>
                      </p>
                      <h5 class="card-title ">{res.details.title}</h5>
                      <p
                        className={`Card-text mb-1 text-clamp grid-text full-text`}
                      >
                        {res.details.info}
                      </p>
                      <Link
                        to={"/" || "#"}
                        class="btn btn-dark text-white rounded-5 fs-7 mt-2 align-self-end"
                      >
                        READ MORE
                      </Link>
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

export default BlogPage;
