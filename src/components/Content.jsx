import React from "react";

const Content = ({ setActiveScreen }) => {
  return (
    <>
      <h1 className="mb-4 relative inline-block text-5xl font-bold w-full text-center md:text-start">
        About Me
      </h1>
      <p className="text-[#555] my-2">
        As a passionate web developer and UI/UX designer, I am always eager to
        learn about the latest trends and technologies. I am particularly
        interested in the intersection of design and development, and I am
        always striving to create user experiences that are both beautiful and
        functional.
      </p>
      <p className="text-[#555] my-6">
        My skills include HTML, CSS, JavaScript, and React, which I use to build
        responsive and user-friendly web applications.
      </p>

      <h2 className="text-[#f2f2f2] text-[2rem] my-2 font-bold">
        What I Do !!!
      </h2>
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="flex justify-between rounded-[8px] border border-[#333] p-4 m-2 md:m-4 gap-3 items-center">
          <div className="icon">
            <img src="/uiux.png" alt="" width="100" height="100" />
          </div>
          <div className="w-3/4 text-[#555]">
            <h3 className="text-[#f2f2f2] mb-[3px]">UI/UX Design</h3>
            <p className="m-0">
              Explore my design journey through a diverse portfolio of UI/UX
              projects, showcasing various design solutions.
            </p>
          </div>
        </div>

        <div className="flex justify-between rounded-[8px] border border-[#333] p-4 m-2 md:m-4 gap-3 items-center">
          <div className="icon">
            <img
              src="/icons8-diploma-100.png"
              alt=""
              width="100"
              height="100"
            />
          </div>
          <div className="w-3/4 text-[#555]">
            <h3 className="text-[#f2f2f2] mb-[3px]">Certificate</h3>
            <p className="m-0">A collection of certificates I have earned.</p>
          </div>
        </div>

        <div className="flex justify-between rounded-[8px] border border-[#333] p-4 m-2 md:m-4 gap-3 items-center">
          <div className="icon">
            <img src="/front-end.png" alt="" width="100" height="100" />
          </div>
          <div className="w-3/4 text-[#555]">
            <h3 className="text-[#f2f2f2] mb-[3px]">Frontend Design</h3>
            <p className="m-0">
              I have attached several front-end designs I have created for your
              review.
            </p>
          </div>
        </div>
        <div className="flex justify-between rounded-[8px] border border-[#333] p-4 m-2 md:m-4 gap-3 items-center">
          <div className="icon">
            <img src="/full-stack.png" alt="" />
          </div>
          <div className="w-3/4 text-[#555]">
            <h3 className="text-[#f2f2f2] mb-[3px]">Full Stack Developement</h3>
            <p className="m-0">
              Here are some examples of full-stack web applications I've
              developed.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <button
          className="text-white font-bold py-2 px-4 rounded-full"
          onClick={() => setActiveScreen("Portofolio")}
        >
          See More
        </button>
      </div>
    </>
  );
};

export default Content;
