import React from "react";
import { VendorHeader, VendorSidebar } from "../Vendor_Components";

const Layout = () => {
  return (
    <>
      <VendorHeader />
      <div className="flex">
        <VendorSidebar />
      </div>
    </>
  );
};

export default Layout;
