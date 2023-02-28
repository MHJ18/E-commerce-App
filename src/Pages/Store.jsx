import React from "react";
import BreadCrumbs from "../components/breadcrumbs/BreadCrumbs";
import Helmett from "../components/Helmet";
import StoreSide from "../Shared/StoreSide";

const Store = () => {
  return (
    <>
      <Helmett title={"Our-Store"} />
      <BreadCrumbs />
      <StoreSide />
    </>
  );
};

export default Store;
