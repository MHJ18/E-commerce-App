import React from "react";
import "./form.scss";
const Form = () => {
  return (
    <>
      <div className="my-3 input-form">
        <input
          className="form-control"
          type="text"
          placeholder="Name"
          aria-label="default input example"
        />
      </div>
      <div className="mb-3 input-form">
        <input
          type="email"
          className="form-control email-input"
          id="exampleFormControlInput1"
          placeholder="Email *"
        />
      </div>
      <div className="my-3 input-form">
        <input
          className="form-control"
          type="text"
          placeholder="Phone number"
          aria-label="Phone number"
        />
      </div>

      <div className="mb-3 input-form">
        <textarea
          className="form-control text-area"
          placeholder="Comment"
          style={{ height: 100 }}
        ></textarea>
      </div>
    </>
  );
};

export default Form;
