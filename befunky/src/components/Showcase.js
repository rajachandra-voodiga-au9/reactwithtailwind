import React from "react";
import hero from "../images/hero.jpg";
const Showcase = () => {
  return (
    <>
      <section className="bg-green-200  py-32 px-10 md:grid md:grid-cols-2 md:gap-20 ">
        <div className="md:pt-32">
          <h1 className="font-bold text-4xl mb-4">
            Photo Editing and Graphic Design Made for Everyone
          </h1>
          <p className="mb-4">
            BeFunky's all-in-one online Creative Platform has everything you
            need to easily edit photos, create graphic designs, and make photo
            collages.
          </p>
          <button className="bg-blue-700 py-2 px-4 font-bold rounded-lg text-lg text-white  mb-10 hover:opacity-75 transition-all">
            Get Started
          </button>
        </div>
        <div className="slider"></div>
      </section>
    </>
  );
};

export default Showcase;
