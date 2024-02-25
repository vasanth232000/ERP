import React from "react";
import {
  VendorCard,
  VendorDetailsCard,
  VendorHeading,
} from "../Vendor_Components";

const Dashboard = () => {
  return (
    <section className="p-8 w-full grid grid-cols-4 ">
      <div className="col-span-3">
        <VendorHeading title="DASHBOARD" />
        <VendorCard />
      </div>
      <div>
        <VendorDetailsCard />
      </div>
    </section>
  );
};

export default Dashboard;
