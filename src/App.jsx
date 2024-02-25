import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { VendorLayout, VendorDashboard } from "./Vendor/Vendor_Pages";

const router = createBrowserRouter([
  {
    path: "/vendor",
    element: <VendorLayout />,
    children: [
      {
        index: true,
        element: <VendorDashboard />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
