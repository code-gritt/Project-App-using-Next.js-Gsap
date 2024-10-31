"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import ImageGrid from "./components/ImageGrid/index";

const Project2 = () => {
  const router = useRouter();
  const [timeline, setTimeline] = useState(null);

  useLayoutEffect(() => {
    const condiv = gsap.context(() => {
      const tl = gsap.timeline({
        paused: true,
        onComplete: () => router.push("/landing"),
      });
      setTimeline(tl);
    });

    return () => condiv.revert();
  }, []);

  return (
    <>
      <div className="contentproject2">
        <div className="titleproject2">
          <div className="big text-white z-10 md:text-[50px] lg:text-[100px] text-[50px] md:top-0 top-[50px]">
            <span>T</span>
            <span>o</span>
            <span>d</span>
            <span>o</span> {""}
            <span>L</span>
            <span>i</span>
            <span>s</span>
            <span>t</span> {""}
            <span>A</span>
            <span>p</span>
            <span>p</span>
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
