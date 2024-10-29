import React from "react";

const Project1 = () => {
  return (
    <>
      <div className="yellowproject1"></div>
      <div className="blackproject1"></div>
      <div className="greenproject1"></div>
      <div className="content">
        <div className="title">
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

        <div className="project1subtitle1 block max-w-3xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Description
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Built a full stack job portal application from scratch using Next JS
            14, the user can login as a candidate or as a recruiter, post a job,
            edit, update, delete a job. Lots of states have been managed inside
            next.js server components.
          </p>

          <h5 className="mb-2 mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Technologies used
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            React.js · Next.js · Tailwind CSS · Mongoose Web Server · MongoDB ·
            HTML5 · Cascading Style Sheets (CSS) · Front-End Development ·
            Back-End Web Development · Node.js
          </p>
        </div>
      </div>
    </>
  );
};

export default Project1;
