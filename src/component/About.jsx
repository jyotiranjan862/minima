import React from "react";

const About = () => {
  return (
    <section
      id="About us"
      className="py-6 px-6 md:px-12 lg:px-24 h-[76vh] flex flex-col md:flex-row"
    >
      {/* Left Section with Images */}
      <div className="w-full md:w-[40%] relative h-[40vh] md:h-full mb-8 md:mb-0 hidden md:flex">
  <div className="border-[.4rem] border-yellow-400 h-[90%] md:h-[98%] w-[40%]"></div>
  <div className=" w-[70%] h-[89%] absolute top-4 md:top-4 left-4 md:left-5 flex items-center justify-center overflow-hidden">
    <img 
      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHBlb3BsZXxlbnwwfHx8fDE2ODc2OTIxMjM&ixlib=rb-4.0.3&q=80&w=400" 
      alt="About Us" 
      className="object-cover h-full w-full " 
    />
  </div>
</div>


      {/* Right Text Section */}
      <div className="w-full md:w-[60%] flex flex-col justify-center items-start h-full text-left px-6 md:px-0">
        <h2 className="text-2xl md:text-5xl font-semibold tracking-wide mb-4 md:mb-6">
          About Us
        </h2>
        <ul className="space-y-4 text-[1rem] lg:text-[1.2rem] text-gray-700">
          <li>
            <p>
              <span className="font-semibold">
                Minima is a template social:
              </span>
              platform that offers full-service social media solutions.
            </p>
          </li>
          <li>
            <p>
              With our co-founder Philip Demi, we have one of the biggest German
              influencers in our team, which gives our clients direct access to
              the influencer world.
            </p>
          </li>
          <li>
            <p>
              Our target group is primarily established brands that know us as a
              modern premium agency.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
