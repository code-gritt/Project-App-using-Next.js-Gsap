"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import { SplitText } from "gsap-trial/SplitText";
import ImageGrid from "./components/ImageGrid/index";
gsap.registerPlugin(SplitText);

const Project2 = () => {
  const router = useRouter();
  const [timeline, setTimeline] = useState(null);

  let mySplitText = new SplitText(".split", { type: "chars" });
  let chars = mySplitText.chars;

  gsap.from(chars, {
    yPercent: 130,
    stagger: 0.05,
    ease: "back.out",
    duration: 2,
    scrollTrigger: {
      trigger: ".split",
      start: "top 80%",
      markers: true,
    },
  });

  return (
    <>
      <div className="contentproject2">
        <div className="titleproject2">
          <div className="big text-white z-10 md:text-[50px] lg:text-[100px] text-[50px] md:top-0 top-[50px]">
            <h1 className="split">TodoList App</h1>
          </div>
        </div>
      </div>
      <ImageGrid timeline={timeline} />;
    </>
  );
};

export default Project2;

export const Letter = ({ space, letter }) => {
  return space == true ? (
    <div className="text">&nbsp;</div>
  ) : (
    <div className="text" style={style.letter}>
      {letter}
    </div>
  );
};
