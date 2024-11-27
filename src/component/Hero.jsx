import React from "react";

const Hero = () => {
  return (
    <section id="Home" className="bg-black text-white px-[5.8rem] py-12 md:py-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="text-center lg:text-left lg:w-[54%] space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold leading-snug">
            Authentic content for your{" "}
            <span className="bg-yellow-400 text-black font-semibold px-2 py-1 rounded-md shadow-md inline-block align-middle">
              social media
            </span>{" "}
            presence?
          </h1>

          <p className="text-gray-400">
            We have made it our business to offer unique solutions in the field
            of social media, authentic content productions, e-commerce, and
            brand building.
          </p>
          <input
            type="button"
            value="Get Started"
            className="bg-white px-7 py-2.5 rounded-lg text-black"
          />
          <div className="mt-8">
            <span className="text-gray-400 text-sm block mb-3">
              Also trusted by
            </span>
            <div className="flex items-center space-x-4 justify-center lg:justify-start">
              <div className="bg-white text-black px-4 py-2 rounded shadow">
                Google
              </div>
              <div className="bg-white text-black px-4 py-2 rounded shadow">
                Microsoft
              </div>
              <div className="bg-white text-black px-4 py-2 rounded shadow">
                OYO
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="mt-12 lg:mt-0 lg:w-1/2 lg:flex justify-end hidden ">
          <div className="bg-red-400 w-[17.6rem] h-[480px] rounded-xl shadow-lg flex items-center justify-center">
            <p className="text-white font-semibold">Image Placeholder</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
