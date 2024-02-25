import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

const SubHeader = () => {
  return (
    <nav className="bg-[#27248E] px-16 py-3 flex justify-center items-center relative z-20">
      <div>
        <div className="icons flex gap-x-6">
          <div className="flex gap-x-2 items-center">
            <FaHome className="text-neutral-300 text-xl" />
            <label className="text-neutral-100 text-xs">Pages</label>
          </div>
          <div className="flex gap-x-2 items-center">
            <FaShoppingCart className="text-neutral-300 text-xl" />
            <label className="text-neutral-100 text-xs">Customize</label>
          </div>
          <div className="flex gap-x-2 items-center">
            <FaShoppingBag className="text-neutral-300 text-xl" />
            <label className="text-neutral-100 text-xs">Promote</label>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SubHeader;
