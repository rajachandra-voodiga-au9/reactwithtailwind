import React, { useState } from "react";
import data from "../data/features";
const Features = () => {
  const [cards, setCards] = useState(data);
  return (
    <>
      <div className="text-center pt-10 px-10 bg-gray-200">
        <h2 className="font-bold text-2xl mb-5">Most Popular Features</h2>
        <p className="pb-10">
          BeFunky has an amazing collection of tools and features for photo
          editing, collage making, and graphic design. Here are some favorites:
        </p>
      </div>

      <section className="px-10 pb-10 bg-gray-200 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:px-56">
        {cards.map((card) => {
          const { id, image, title, desc } = card;
          return (
            <div key={id}>
              <img src={image} alt="title" className="rounded-t-lg w-full" />
              <div className="bg-white px-5 py-5 rounded-b-lg">
                <h3 className="font-bold my-2 text-xl">{title}</h3>
                <p className="">{desc}</p>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Features;
