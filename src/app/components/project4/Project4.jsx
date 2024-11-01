import React from "react";
import "./Project4.css";
import { TweenMax } from "gsap-trial";
import { Power2, Power3, Power4, Expo, Circ } from "gsap";

const Project4 = () => {
  TweenMax.from(".logo", 1, {
    delay: 1.2,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut,
  });

  TweenMax.staggerFrom(
    ".menu-links ul li",
    1,
    {
      delay: 1.2,
      opacity: 0,
      x: -20,
      ease: Power4.easeInOut,
    },
    0.08
  );

  TweenMax.from(".search", 1, {
    delay: 1.6,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut,
  });

  TweenMax.from(".cart", 1, {
    delay: 1.8,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut,
  });

  TweenMax.to(".border-bottom", 1, {
    delay: 1.4,
    width: "100%",
    ease: Expo.easeInOut,
  });

  TweenMax.from(".subtitle", 1, {
    delay: 2.8,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut,
  });

  TweenMax.to(".title", 1, {
    delay: 2.2,
    width: "100%",
    ease: Expo.easeInOut,
  });

  TweenMax.from(".desc", 1, {
    delay: 2.8,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut,
  });

  TweenMax.from(".readmore", 1, {
    delay: 2.8,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut,
  });

  TweenMax.to(".slider", 1, {
    delay: 3,
    opacity: 1,
    ease: Expo.easeInOut,
  });

  TweenMax.to(".img-1", 1, {
    delay: 2.2,
    width: "450px",
    ease: Expo.easeInOut,
  });

  TweenMax.to(".img-2", 1, {
    delay: 2.2,
    width: "300px",
    ease: Expo.easeInOut,
  });

  TweenMax.to(".img-3", 1, {
    delay: 2.2,
    width: "300px",
    ease: Expo.easeInOut,
  });

  TweenMax.to(".first", 1.5, {
    delay: 0.2,
    left: "-100%",
    ease: Expo.easeInOut,
  });

  TweenMax.to(".second", 1.5, {
    delay: 0.4,
    left: "-100%",
    ease: Expo.easeInOut,
  });

  TweenMax.to(".third", 1.5, {
    delay: 0.6,
    left: "-100%",
    ease: Expo.easeInOut,
  });

  return (
    <>
      <div className="project4body">
        <div className="overlay first"></div>
        <div className="overlay second"></div>
        <div className="overlay third"></div>

        <div className="wrapper">
          <div className="nav">
            <div className="logo">
              <img src="./img/xxl-logo.jpg" alt="" />
            </div>
            <div className="menu-links">
              <ul>
                <li>Home</li>
                <li>News</li>
                <li>Music</li>
                <li>Videos</li>
                <li>Shop</li>
              </ul>
            </div>
            <div className="search">
              <i className="fa fa-search"></i>
            </div>
            <div className="cart">
              <i className="fa fa-shopping-cart"></i>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="img-1"></div>

          <div className="slider">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Skills
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              React.js · Express.js · Tailwind CSS · HTML5 · Cascading Style
              Sheets (CSS) · JavaScript · TypeScript · Front-End Development ·
              Web Development · Software Development
            </p>
          </div>

          <div className="img-2"></div>
          <div className="slider">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Description
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Building a SaaS landing page with modern UI and mobile-first
              principles while strengthening React.js and Tailwind CSS skills.
            </p>
          </div>

          <div className="img-3"></div>
        </div>
      </div>
    </>
  );
};

export default Project4;
