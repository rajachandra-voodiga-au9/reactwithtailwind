import React from "react";
import data from "../data/data";
const Grid = () => {
  const [items, setItems] = React.useState(data);
  return (
    <>
      <section className="px-10 py-10 grid grid-cols-1 gap-10 ">
        {items.map((item) => {
          const { id, image, title, desc, link } = item;
          return (
            <div
              key={id}
              className="grid-card py-10 lg:flex lg:items-center lg:justify-center lg:px-56"
            >
              <div className="lg:w-1/2 lg:mx-10">
                <h3 className="font-bold text-4xl mb-5">{title}</h3>
                <p className="mb-3">{desc}</p>
                <button className="mb-10 border border-4 border-blue-400 py-2 px-4 rounded-lg">
                  {link}
                </button>
              </div>

              <div>
                <img src={image} alt={title} />
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Grid;
