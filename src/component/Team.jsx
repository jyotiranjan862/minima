import React from "react";

const Team = () => {
  const teamMembers = [
    {
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofHxwZW9wbGV8ZW58MHx8fHwxNjg3NjkyMTIz&ixlib=rb-4.0.3&q=80&w=400",
      name: "John Doe",
      role: "Project Manager",
    },
    {
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofHxwZW9wbGV8ZW58MHx8fHwxNjg3NjkyMTIz&ixlib=rb-4.0.3&q=80&w=400",
      name: "Jane Smith",
      role: "Software Engineer",
    },
    {
      img: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofHxwZW9wbGV8ZW58MHx8fHwxNjg3NjkyMTIz&ixlib=rb-4.0.3&q=80&w=400",
      name: "Emily Davis",
      role: "UI/UX Designer",
    },
    {
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofHxwZW9wbGV8ZW58MHx8fHwxNjg3NjkyMTIz&ixlib=rb-4.0.3&q=80&w=400",
      name: "Sophia Johnson",
      role: "Marketing Specialist",
    },
    {
      img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofHxwZW9wbGV8ZW58MHx8fHwxNjg3NjkyMTIz&ixlib=rb-4.0.3&q=80&w=400",
      name: "Michael Brown",
      role: "Data Scientist",
    },
    {
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofHxwZW9wbGV8ZW58MHx8fHwxNjg3NjkyMTIz&ixlib=rb-4.0.3&q=80&w=400",
      name: "Chris Wilson",
      role: "DevOps Engineer",
    },
    {
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofHxwZW9wbGV8ZW58MHx8fHwxNjg3NjkyMTIz&ixlib=rb-4.0.3&q=80&w=400",
      name: "Anna Lee",
      role: "Business Analyst",
    },
    {
      img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofHxwZW9wbGV8ZW58MHx8fHwxNjg3NjkyMTIz&ixlib=rb-4.0.3&q=80&w=400",
      name: "David Miller",
      role: "HR Manager",
    },
  ];

  return (
    <div id="Our Team" className="w-full min-h-[80vh] px-4 sm:px-6 md:px-24 py-6 md:py-10">
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-wide mb-6 md:mb-8 text-center">
        Our Awesome Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10 place-items-center">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center sm:w-[9rem] lg:w-[12rem]"
          >
            <div className="w-[13rem] h-[13rem] sm:w-[11rem] sm:h-[11rem] lg:w-[12rem] lg:h-[12rem] xl:w-[14rem] xl:h-[14rem] rounded-lg mb-4 overflow-hidden">
              <img
                src={member.img}
                alt={member.name}
                className="object-cover h-full w-full"
              />
            </div>
            <p className="text-center text-sm sm:text-base lg:text-lg text-gray-500 mb-2">
              {member.name}
            </p>
            <h5 className="text-base sm:text-lg lg:text-xl font-medium text-center mb-2">
              {member.role}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
