import React from "react";
import { sideBar } from "./datas/datas";
import { useLocation } from "react-router-dom";
import { RxDividerVertical } from "react-icons/rx";

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 h-screen w-20 -z-10 flex justify-center"
        style={{ boxShadow: "4px 0 12px -2px #88888854" }}
      >
        <div className="mt-24 flex gap-y-4 flex-col">
          {sideBar.map((item) => {
            const { id, img, name } = item;
            return (
              <div
                key={id}
                className={`px-3 py-2 relative ${
                  pathname.endsWith(name) ? "bg-blue-100 rounded-md" : ""
                }`}
              >
                {pathname.endsWith(name) ? (
                  <RxDividerVertical className="absolute text-5xl -top-0.5 -left-9 w-fit font-bold text-indigo-800" />
                ) : (
                  ""
                )}

                <a>
                  <img src={img} alt="demo" className="h-7 w-7" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
