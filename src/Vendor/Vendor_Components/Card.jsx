import React from "react";
import CountUp from "react-countup";

const Card = ({ id, img, name, count }) => {
  return (
    <div key={id} className="w-[23%] border-2 p-4 mb-3 rounded-md">
      <h4 className="text-sm font-semibold mb-3">{name}</h4>
      <div className="flex justify-between">
        <CountUp
          className="text-3xl font-semibold text-[#27248E]"
          end={count}
        />
        <img src={img} alt={name} />
      </div>
    </div>
  );
};

export default Card;
