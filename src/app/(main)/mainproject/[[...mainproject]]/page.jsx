"use client";
import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";
<Head>
  <link rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.min.css" />
  <link rel="stylesheet" href="https://unpkg.com/swiper/css/pagination.css" />
</Head>;
import { useSwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import img1 from "@/../public/img-1.png";
import img2 from "@/../public/img-2.png";
import img3 from "@/../public/img-3.png";
import { Pagination } from "swiper/modules";
import { gsap } from "gsap";
import Image from "next/image";
import Project1 from "../../../components/project1/Project1";
import Project2 from "../../../components/project2/Project2";
import Project3 from "../../../components/project3/Project3";
import Project4 from "../../../components/project4/Project4";

const Main = () => {
  const [active, setActive] = useState();

  const swiperSlide = useSwiperSlide();
  const root = useRef();
  useEffect(() => {
    console.log(active, "active");
  }, [active]);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (active === 0 || active === undefined) {
        gsap.from(".first .yellowproject1", { y: "-1000", duration: 2 });
        gsap.from(".first .blackproject1", { y: "1000", duration: 2 });
        gsap.from(".first .greenproject1", { y: "500", duration: 3 });
        gsap.from(".first img", { x: "1000", duration: 2 });
        gsap.from(".first .small", { y: "100", opacity: 0, delay: 2.1 });
        gsap.from(".first .big span", {
          y: "100",
          opacity: 0,
          delay: 2.1,
          stagger: 0.2,
        });
      } else if (active === 1) {
        gsap.from(" .red", { y: "-1000", duration: 2 });
        gsap.from(" .black", { y: "1000", duration: 2 });
        gsap.from(" img", { x: "1000", duration: 2 });
        gsap.from(" .small", { y: "100", opacity: 0, delay: 2.1 });
        gsap.from(" .big span", {
          y: "100",
          opacity: 0,
          delay: 2.1,
          stagger: 0.2,
        });
      } else if (active === 2) {
        gsap.from(".first .blue", { y: "-1000", duration: 2 });
        gsap.from(".first .black", { y: "1000", duration: 2 });
        gsap.from(".first img", { x: "1000", duration: 2 });
        gsap.from(".first .small", { y: "100", opacity: 0, delay: 2.1 });
        gsap.from(".first .big span", {
          y: "100",
          opacity: 0,
          delay: 2.1,
          stagger: 0.2,
        });
      } else if (active === 3) {
        gsap.from(".first .blue", { y: "-1000", duration: 2 });
        gsap.from(".first .black", { y: "1000", duration: 2 });
        gsap.from(".first img", { x: "1000", duration: 2 });
        gsap.from(".first .small", { y: "100", opacity: 0, delay: 2.1 });
        gsap.from(".first .big span", {
          y: "100",
          opacity: 0,
          delay: 2.1,
          stagger: 0.2,
        });
      }
      //
    }, root);

    console.log(active);

    return () => ctx.revert();
  }, [active]);

  return (
    <>
      <div className="min-h-screen">
        <Swiper
          ref={root}
          // slidesPerView={2}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
              return (
                '<span class="' +
                className +
                '"> <span>' +
                String(index + 1).padStart(2, "0") +
                "</span></span>"
              );
            },
          }}
          onActiveIndexChange={(swiper) => {
            console.log(swiper);
            setActive(swiper.activeIndex);
          }}
          speed={1000}
          direction="vertical"
          // direction={getDirection()}

          slidesPerView={1}
          // spaceBetween={30}
          mousewheel={true}
          modules={[Pagination]}
          className="mySwiper  h-screen "
          // className="mySwiper h-screen"
        >
          <SwiperSlide
            className={`w-full  h-full  ${
              active === 0 || active === 0 ? "first" : "first"
            }`}
          >
            <Project1 />
          </SwiperSlide>
          {/* item2 */}
          <SwiperSlide
            className={`w-full  h-full  ${active === 1 ? "first" : ""}`}
          >
            <Project2 />
          </SwiperSlide>
          {/* item3 */}
          <SwiperSlide
            className={`w-full h-full  ${active === 2 ? "first" : ""}`}
          >
            <Project3 />
          </SwiperSlide>
          <SwiperSlide
            className={`w-full h-full  ${active === 3 ? "first" : ""}`}
          >
            <Project4 />
          </SwiperSlide>

          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </>
  );
};

export default Main;
