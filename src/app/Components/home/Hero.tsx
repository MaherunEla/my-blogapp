import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col gap-5  items-center justify-center h-[700px] ">
      <div className="w-full xl:w-[800px] flex flex-col gap-5  items-center justify-center ">
        <h2 className="text-[var(--textColor)] text-5xl font-bold text-center leading-[70px]">
          Free Next.js Full-Stack Website Using Prisma
        </h2>
        <p className="text-[var(--textColor)] text-2xl text-center xl:px-20 ">
          This is a Free Next.js full stack template that you can use to create
          Blogs based on differnt category and also you can chat with others.
          This website is full of functionalities.
        </p>

        <button className="py-5 px-5 bg-blue-600 text-white rounded-lg text-lg font-bold">
          Explore All Blogs
        </button>
      </div>
    </div>
  );
};

export default Hero;
