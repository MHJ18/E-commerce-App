import React, { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import "./blog.scss";
const Blog = () => {
  const [cards, setcards] = useState([]);
  useLayoutEffect(() => {
    setcards([
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
      <section className="container-xxl  card-main ">
        <div className="card-header d-flex justify-content-between align-items-baseline my-3">
          <h4>Our Latest News</h4>
          <p>
            <AiOutlineLeft />
            <AiOutlineRight />
          </p>
        </div>
        <div className="d-flex flex-wrap gap-3">
          {cards.map((res) => {
            return (
              <>
                <div
                  class="card border-0 card-body-main rounded-3"
                  style={{ width: "18rem" }}
                >
                  <img
                    src={res.image}
                    class="card-img-top image-fluid card-image"
                    alt="..."
                  />
                  <div class="card-body">
                    <p class="card-text">
                      <small class="text-muted card-date">11 JUNE, 2022</small>
                    </p>
                    <h5 class="card-title ">{res.details.title}</h5>
                    <p class="card-text">{res.details.info}</p>
                    <Link
                      to={"/" || "#"}
                      class="btn btn-dark text-white rounded-5 card-button"
                    >
                      READ MORE
                    </Link>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Blog;
