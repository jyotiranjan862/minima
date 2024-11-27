import React from "react";

const Story = () => {
  return (
    <div className="w-full min-h-[80vh] py-6 flex flex-col lg:flex-row justify-between px-6 md:px-24 gap-8">
      <div className="w-full lg:w-[45%]">
        <h2 className="text-2xl text-start md:text-5xl font-semibold tracking-wide mb-4 md:mb-6">
          Our Success Story
        </h2>
        <div className="mt-4">
          <p className="text-[1.1rem] text-gray-500">
            Develop a website by finding a product destiny that has value and
            branding to become a characteristic of the company.
          </p>
          <div className="mt-6 ">
            <h3 className="text-[4rem] md:text-[5rem] text-blue-700 font-semibold text-center lg:text-start">
              100
            </h3>
            <p className="text-[1.1rem] font-bold text-gray-700 text-center lg:text-start">
              Projects Completed
            </p>
          </div>
          <div className="mt-6">
            <h3 className="text-[4rem] md:text-[5rem] text-blue-700 font-semibold text-center lg:text-start">
              235
            </h3>
            <p className="text-[1.1rem] font-bold text-gray-700 text-center lg:text-start">
              Happy Clients
            </p>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[45%]">
        <h2 className="text-2xl text-start md:text-5xl font-semibold tracking-wide mb-4 md:mb-6">
          Services We Provide
        </h2>
        <div className="mt-4">
          <p className="text-[1.1rem] text-gray-500">
            We help clients improve their social media performance.
          </p>
        </div>
        <div className="mt-6 flex flex-col gap-6">
          {Array(4)
            .fill()
            .map((_, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="bg-gray-400 w-[6rem] h-[3rem] rounded-lg"></div>
                <div>
                  <h4 className="text-[1.1rem] md:text-[1.4rem] text-gray-800 font-semibold">
                    Performance Marketing
                  </h4>
                  <p className="text-[.98rem] text-gray-400">
                    We create and design websites to make them trendy and fresh,
                    helping businesses stay ahead.
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Story;
