import React from "react";

const Project1 = () => {
  return (
    <>
      <div className="yellowproject1"></div>
      <div className="blackproject1"></div>
      <div className="greenproject1"></div>
      <div className="content">
        <div className="title">
          {/* <div className="small"></div> */}
          <div className="big md:text-[50px] lg:text-[100px] text-[50px] md:top-0 top-[50px]">
            <span>J</span>
            <span>o</span>
            <span>b</span> {""}
            <span>P</span>
            <span>o</span>
            <span>r</span>
            <span>t</span>
            <span>a</span>
            <span>l</span> {""}
            <span>A</span>
            <span>p</span>
            <span>p</span>
          </div>
        </div>
        <div className="project1subtitle1 p-2 gap-4 text-[#000000] justify-center text-xl">
          <span className="">
            <b className="font-bold">Description: {""}</b>
            Built a full stack job portal application from scratch using Next JS
            14, the user can login as a candidate or as a recruiter, post a job,
            edit, update, delete a job. Lots of states have been managed inside
            next.js server components.
          </span>
        </div>
        <div className="project1subtitle p-2 gap-4 text-[#000000] justify-center text-xl">
          <span className="">
            <b className="font-bold">Technologies used: {""}</b>
            React.js · Next.js · Tailwind CSS · Mongoose Web Server · MongoDB ·
            HTML5 · Cascading Style Sheets (CSS) · Front-End Development ·
            Back-End Web Development · Node.js
          </span>
        </div>
      </div>
    </>
  );
};

export default Project1;
