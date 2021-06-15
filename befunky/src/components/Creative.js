import React from "react";

const Creative = () => {
  return (
    <>
      <section className="p-10 text-center">
        <div>
          <h2 className="text-2xl font-bold mb-2 md:text-4xl">
            Your All-In-One Creative Solution
          </h2>
          <p className="md:mb-10 lg:w-1/2 lg:mx-auto">
            Watch BeFunky in action to see how it makes your photo editing,
            collage making, and graphic design workflow seamless.
          </p>
        </div>

        <div>
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/310214112"
            width="400"
            height="360"
            frameBorder="0"
            allowFullScreen
            className="block mx-auto md:w-1/2"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Creative;
