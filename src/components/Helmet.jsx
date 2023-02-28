import React from "react";
import { Helmet } from "react-helmet";
const Helmett = (props) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{props.title}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
    </div>
  );
};

export default Helmett;
Helmet.defaultProps = {
  title: "E-Commerce",
};
