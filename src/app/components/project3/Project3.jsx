import React from "react";
import "./Project3.css";
import { TweenMax } from "gsap-trial";
import { Power2, Power3, Expo, Circ } from "gsap";

const Project3 = () => {
  TweenMax.to(".left", 2, {
    stagger: {
      from: "end",
    },
    delay: 0.8,
    width: "50%",
    ease: Power2.easeInOut,
  });

  TweenMax.to(".right", 2, {
    stagger: {
      from: "end",
    },
    delay: 0.6,
    width: "50%",
    ease: Power3.easeInOut,
  });

  TweenMax.from(".nav", 2, {
    stagger: {
      from: "end",
    },
    delay: 0.8,
    opacity: 0,
    ease: Expo.easeInOut,
  });

  TweenMax.from(".text h1", 2, {
    stagger: {
      from: "end",
    },
    delay: 0.6,
    x: 1000,
    ease: Circ.easeInOut,
  });

  TweenMax.from(".text p", 2, {
    stagger: {
      from: "end",
    },
    delay: 0.7,
    x: 1000,
    ease: Circ.easeInOut,
  });

  TweenMax.to(".karina", 2, {
    stagger: {
      from: "end",
    },
    delay: 1.5,
    width: "800px",
    ease: Power2.easeInOut,
  });

  TweenMax.staggerFrom(
    ".bottomnav ul li",
    2,
    {
      delay: 1,
      x: 1000,
      ease: Circ.easeInOut,
    },
    0.08
  );

  TweenMax.from(".info", 2, {
    delay: 1.5,
    y: 100,
    ease: Circ.easeInOut,
  });

  TweenMax.from(".name", 2, {
    delay: 1.5,
    x: -600,
    ease: Circ.easeInOut,
  });

  return (
    <>
      <div className="wrapper">
        <div className="left"></div>
        <div className="right"></div>

        <div className="content">
          <div className="img-wrapper">
            <div className="karina"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project3;
