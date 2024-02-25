import React from "react";
import { cards } from "../datas/datas";
import Card from "./Card";

const CardContainer = () => {
  return (
    <section>
      <div className="flex w-full flex-wrap px-3 py-5 justify-start gap-x-3">
        {cards.map((item) => {
          return <Card {...item} key={item.id} />;
        })}
      </div>
    </section>
  );
};

export default CardContainer;
