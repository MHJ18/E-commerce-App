import React from "react";
import HalfRating from "./Ratings";
import "./product.scss";
const ReviewForm = () => {
  return (
    <>
      <div class="accordion-body">
        <div className="d-flex flex-column  py-3 mt-3">
          <div class="mb-3">
            <label
              for="exampleFormControlInput1"
              class="form-label label-review"
            >
              Name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter your name"
            />
          </div>
          <div class="mb-3">
            <label
              for="exampleFormControlInput1"
              class="form-label label-review"
            >
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="john@example.com"
            />
          </div>
          <div class="mb-2">
            <label
              for="exampleFormControlInput1"
              class="form-label label-review"
            >
              Rating
            </label>
            <HalfRating />
          </div>

          <div class="mb-3">
            <label
              for="exampleFormControlInput1"
              class="form-label label-review"
            >
              Review Title
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Give your review a title"
            />
          </div>
          <div class="">
            <label class="form-label label-review">Comments</label>
            <textarea
              class="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: "100px", resize: "none" }}
            ></textarea>
          </div>
          <button className="btn btn-dark align-self-end rounded-5 fs-7 mt-3">
            Submit Review
          </button>
        </div>
      </div>
    </>
  );
};

export default ReviewForm;
