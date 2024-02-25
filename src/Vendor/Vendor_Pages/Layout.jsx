import React from "react";
import {
  VendorHeader,
  VendorSidebar,
  VendorSubHeader,
} from "../Vendor_Components";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <VendorHeader />
      <VendorSubHeader />
      <div className="flex">
        <VendorSidebar />
        <div className="ms-20 w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
