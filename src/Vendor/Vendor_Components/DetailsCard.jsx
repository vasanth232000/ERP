import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const DetailsCard = () => {
  return (
    <section>
      <div className="flex gap-x-3 items-center mb-3">
        <span className="text-2xl font-normal">Your Details</span>
        <FaRegEdit className="text-xl font-semibold" />
      </div>
      <div>
        <h4 className="text-base font-semibold mb-3">Scopex Pvt Ltd</h4>
        <div className="flex gap-x-3 mb-2">
          <FaLocationDot className="text-2xl" />
          <p className="text-xs">
            No.125, 4th Floor, Madras Thiruvallur High Rd, Vivek Nagar, West
            Krishnapuram, Ambattur, Chennai, Tamil Nadu 600053.
          </p>
        </div>
        <div className="flex gap-x-3 mb-2">
          <FaMobileAlt className="text-sm" />
          <p className="text-xs">+91 98765 43210</p>
        </div>
        <div className="flex gap-x-3 mb-2">
          <MdAlternateEmail className="text-sm" />
          <p className="text-xs">Info@scopex.in</p>
        </div>
      </div>
    </section>
  );
};

export default DetailsCard;
