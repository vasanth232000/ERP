import React from "react";
import { FaChevronLeft } from "react-icons/fa";

const Heading = ({ title }) => {
  return (
    <div className="flex items-center gap-x-3">
      <button>
        <FaChevronLeft className="text-2xl" />
      </button>
      <span className="text-2xl font-semibold">{title}</span>
    </div>
  );
};

export default Heading;
