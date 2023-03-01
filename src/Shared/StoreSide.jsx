import React from "react";
import SideBar from "../components/sidemenu/SideBar";
import StoreProducts from "../components/Storeproducts/StoreProducts";

const StoreSide = () => {
  return (
    <>
      <div style={{ backgroundColor: "#F4F5F3" }}>
        <SideBar />
        {/* <select
                  className=" border-0 fs-7 select-bar bg-light text-gray form-control form-select"
                  data-bs-toggle="dropdown"
                  data-bs-theme="dark"
                  value="best-selling"
                >
                  <option className="" value="best-selling" selected>
                    Best Selling
                  </option>
                  <option value="title-ascending" selected>
                    Aplhabetically, A-Z
                  </option>
                  <option value="title-descending" selected>
                    Aplhabetically, Z-A
                  </option>
                  <option value="price-ascending" selected>
                    Price, low to high
                  </option>
                  <option value="price-descending" selected>
                    Price, high to low
                  </option>
                  <option value="created-descending" selected>
                    Date, new to old
                  </option>
                  <option value="created-ascending" selected>
                    Date, old to new
                  </option>
                </select> */}
      </div>
    </>
  );
};

export default StoreSide;
