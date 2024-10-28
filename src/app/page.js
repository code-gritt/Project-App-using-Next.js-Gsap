"use client";
import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
// Import Swiper React components
import Head from "next/head";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
<Head>
  <link rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.min.css" />
  <link rel="stylesheet" href="https://unpkg.com/swiper/css/pagination.css" />
</Head>;
import { useSwiperSlide } from "swiper/react";
// Import Swiper stylesfirst
import "swiper/css";
import "swiper/css/pagination";
import img1 from "@/../public/img-1.png";
import img2 from "@/../public/img-2.png";
import img3 from "@/../public/img-3.png";
// import required modules
import { Pagination } from "swiper/modules";
import { gsap } from "gsap";
import Image from "next/image";

export default function Home() {
  const [active, setActive] = useState();
  // useEffect(() => {
  //   console.log("run");

  //   return () => {
  //     // console.log("done");
  //     // setActive(true);

  //     setTimeout(() => {
  //       let ctx = gsap.context(() => {
  //         gsap.from(".first .yellow", {y: "1000", duration: 2});
  //       });
  //       ctx.clear();
  //     }, 2000);
  //   };
  // }, []);

  const swiperSlide = useSwiperSlide();
  const root = useRef();
  useEffect(() => {
    console.log(active, "active");
  }, [active]);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (active === 0 || active === undefined) {
        gsap.from(".first .yellow", { y: "-1000", duration: 2 });
        // gsap.from(".first .blue", {y: "-1000", duration: 2});
        gsap.from(".first .black", { y: "1000", duration: 2 });
        gsap.from(".first img", { x: "1000", duration: 2 });
        gsap.from(".first .small", { y: "100", opacity: 0, delay: 2.1 });
        gsap.from(".first .big span", {
          y: "100",
          opacity: 0,
          delay: 2.1,
          stagger: 0.2,
        });

        // setTimeout(() => {
        //   gsap.to(".first img", {x: "-1000", duration: 2});
        // }, 1000);

        // setTimeout(() => {
        //   gsap.from(".first img", {opacity: "0", duration: 2});
        //   gsap.to(".first img", {opacity: "1", duration: 2});
        //   gsap.from(".first img", {x: "0", duration: 2});
        // }, 2000);
      } else if (active === 1) {
        //

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

        // setTimeout(() => {
        //   gsap.to(".first img", {x: "-1000", duration: 2});
        // }, 1000);

        // setTimeout(() => {
        //   gsap.from(".first img", {opacity: "0", duration: 2});
        //   gsap.to(".first img", {opacity: "1", duration: 2});
        //   gsap.from(".first img", {x: "0", duration: 2});
        // }, 2000);
      } else if (active === 2) {
        //

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

        // setTimeout(() => {
        //   gsap.to(".first img", {x: "-1000", duration: 2});
        // }, 1000);

        // setTimeout(() => {
        //   gsap.from(".first img", {opacity: "0", duration: 2});
        //   gsap.to(".first img", {opacity: "1", duration: 2});
        //   gsap.from(".first img", {x: "0", duration: 2});
        // }, 2000);
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
    // ctx.clear();
    return () => ctx.revert();
  }, [active]);

  // useLayoutEffect(() => {
  //   // if (active) {
  //   console.log(active);

  //   let ctx = gsap.context(() => {
  //     gsap.from(" .yellow", {y: "-1000", duration: 2});
  //     gsap.from(" .red", {y: "-1000", duration: 2});
  //     gsap.from(" .blue", {y: "-1000", duration: 2});
  //     gsap.from(" .black", {y: "1000", duration: 2});
  //     gsap.from(" img", {x: "1000", duration: 2});
  //     gsap.from(" .small", {y: "100", opacity: 0, delay: 2.1});
  //     gsap.from(" .big span", {
  //       y: "100",
  //       opacity: 0,
  //       delay: 2.1,
  //       stagger: 0.2,
  //     });
  //     setTimeout(() => {
  //       gsap.to(".first img", {x: "-1000", duration: 2});
  //     }, 1000);
  //     setTimeout(() => {
  //       gsap.from(".first img", {opacity: "0", duration: 2});
  //       gsap.to(".first img", {opacity: "1", duration: 2});
  //       gsap.from(".first img", {x: "0", duration: 2});
  //     }, 2000);
  //   }, root);

  //   console.log(active);

  //   return () => ctx.revert();
  //   // }
  // }, []);

  return (
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
          <div className="yellow"></div>
          <div className="black"></div>
          <div className="content">
            <div className="title">
              <div className="small"></div>
              <div className="big md:text-[200px] lg:text-[280px] text-[150px] md:top-0 top-[50px]">
                <span>R</span>
                <span>A</span>
                <span>C</span>
                <span>E</span>
              </div>
            </div>
            <div className="image relative">
              {/* <Image alt="" src={img1} fill /> */}
            </div>
            <div className="absolute bottom-10 p-2  gap-4 text-[#fffcef] justify-center text-xl flex items-center w-full">
              <span className=" ">
                <b className="font-bold z-20">302</b> MPH
              </span>
              <span className=" ">
                <b className="font-bold">0-100</b> KMPH
              </span>
              <span className="">
                <b className="font-bold">350</b> KW
              </span>
              <button className=" py-2 px-3 border border-[#efca29] rounded-[10px] text-[#efca29] cursor-pointer hover:bg-[#efca29] hover:text-[#1a1a15]">
                Discover Now <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </SwiperSlide>
        {/* item2 */}
        <SwiperSlide
          className={`w-full  h-full  ${active === 1 ? "first" : ""}`}
        >
          <div className="red"></div>
          <div className="black"></div>
          <div className="content relative">
            <div className="title">
              <div className="small">
                {/* Let's {isActive ? setActive(true) : setActive(false)} */}
                {/* {active && "active"} */}
              </div>
              <div className="big  md:text-[200px] lg:text-[280px] text-[150px] md:top-0 top-[50px]">
                <span>R</span>
                <span>A</span>
                <span>C</span>
                <span>E</span>
              </div>
            </div>
            <div className="image relative">
              {/* <Image alt="" src={img2} fill /> */}
              {/* <img src="images/img-1.png" alt=""> */}
            </div>
            <div className="absolute bottom-10 p-2  gap-4 text-[#fffcef] justify-center text-xl flex items-center w-full">
              <span className="font-bold z-20">
                <b>302</b> MPH
              </span>
              <span className="font-bold z-20">
                <b>0-100</b> KMPH
              </span>
              <span className="font-bold z-20">
                <b>350</b> KW
              </span>
              <button className=" py-2 px-3 border border-[#d23f3d] rounded-[10px] text-[#d23f3d] cursor-pointer hover:bg-[#d23f3d] hover:text-[#1a1a15]">
                Discover Now <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </SwiperSlide>
        {/* item3 */}
        <SwiperSlide
          className={`w-full h-full  ${active === 2 ? "first" : ""}`}
        >
          <div className="blue"></div>
          <div className="black"></div>
          <div className="content">
            <div className="title">
              <div className="small">
                {/* Let's {isActive ? setActive(true) : setActive(false)} */}
                {/* {active && "active"} */}
              </div>
              <div className="big md:text-[200px] lg:text-[280px] text-[150px] md:top-0 top-[50px]">
                <span>B</span>
                <span>l</span>
                <span>o</span>
                <span>g</span>
                <span>A</span>
                <span>p</span>
                <span>p</span>
              </div>
            </div>
            <div className="image relative">
              {/* <Image alt="" src={img3} fill /> */}
            </div>
            <div className="absolute bottom-10 p-2  gap-4 text-[#fffcef] justify-center text-xl flex items-center w-full">
              <span className="font-bold z-20">
                <b>302</b> MPH
              </span>
              <span className="font-bold z-20">
                <b>0-100</b> KMPH
              </span>
              <span className="font-bold z-20">
                <b>350</b> KW
              </span>
              <button className=" py-2 px-3 border border-[#00d2fa] rounded-[10px] text-[#00d2fa] cursor-pointer hover:bg-[#00d2fa] hover:text-[#1a1a15]">
                Discover Now <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={`w-full h-full  ${active === 3 ? "first" : ""}`}
        >
          <div className="blue"></div>
          <div className="black"></div>
          <div className="content">
            <div className="title">
              <div className="small">
                {/* Let's {isActive ? setActive(true) : setActive(false)} */}
                {/* {active && "active"} */}
              </div>
              <div className="big md:text-[200px] lg:text-[280px] text-[150px] md:top-0 top-[50px]">
                <span>B</span>
                <span>r</span>
                <span>o</span>
                <span>g</span>
                <span>A</span>
                <span>p</span>
                <span>p</span>
              </div>
            </div>
            <div className="image relative">
              {/* <Image alt="" src={img3} fill /> */}
            </div>
            <div className="absolute bottom-10 p-2  gap-4 text-[#fffcef] justify-center text-xl flex items-center w-full">
              <span className="font-bold z-20">
                <b>302</b> MPH
              </span>
              <span className="font-bold z-20">
                <b>0-100</b> KMPH
              </span>
              <span className="font-bold z-20">
                <b>350</b> KW
              </span>
              <button className=" py-2 px-3 border border-[#00d2fa] rounded-[10px] text-[#00d2fa] cursor-pointer hover:bg-[#00d2fa] hover:text-[#1a1a15]">
                Discover Now <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={`w-full h-full  ${active === 1 ? "first" : ""}`}
        >
          <div className="blue"></div>
          <div className="black"></div>
          <div className="content">
            <div className="title">
              <div className="small">
                {/* Let's {isActive ? setActive(true) : setActive(false)} */}
                {/* {active && "active"} */}
              </div>
              <div className="big md:text-[200px] lg:text-[280px] text-[150px] md:top-0 top-[50px]">
                <span>B</span>
                <span>l</span>
                <span>o</span>
                <span>g</span>
                <span>A</span>
                <span>p</span>
                <span>p</span>
              </div>
            </div>
            <div className="image relative">
              {/* <Image alt="" src={img3} fill /> */}
            </div>
            <div className="absolute bottom-10 p-2  gap-4 text-[#fffcef] justify-center text-xl flex items-center w-full">
              <span className="font-bold z-20">
                <b>302</b> MPH
              </span>
              <span className="font-bold z-20">
                <b>0-100</b> KMPH
              </span>
              <span className="font-bold z-20">
                <b>350</b> KW
              </span>
              <button className=" py-2 px-3 border border-[#00d2fa] rounded-[10px] text-[#00d2fa] cursor-pointer hover:bg-[#00d2fa] hover:text-[#1a1a15]">
                Discover Now <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={`w-full h-full  ${active === 2 ? "first" : ""}`}
        >
          <div className="blue"></div>
          <div className="black"></div>
          <div className="content">
            <div className="title">
              <div className="small">
                {/* Let's {isActive ? setActive(true) : setActive(false)} */}
                {/* {active && "active"} */}
              </div>
              <div className="big md:text-[200px] lg:text-[280px] text-[150px] md:top-0 top-[50px]">
                <span>B</span>
                <span>l</span>
                <span>o</span>
                <span>g</span>
                <span>A</span>
                <span>p</span>
                <span>p</span>
              </div>
            </div>
            <div className="image relative">
              {/* <Image alt="" src={img3} fill /> */}
            </div>
            <div className="absolute bottom-10 p-2  gap-4 text-[#fffcef] justify-center text-xl flex items-center w-full">
              <span className="font-bold z-20">
                <b>302</b> MPH
              </span>
              <span className="font-bold z-20">
                <b>0-100</b> KMPH
              </span>
              <span className="font-bold z-20">
                <b>350</b> KW
              </span>
              <button className=" py-2 px-3 border border-[#00d2fa] rounded-[10px] text-[#00d2fa] cursor-pointer hover:bg-[#00d2fa] hover:text-[#1a1a15]">
                Discover Now <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={`w-full h-full  ${active === 2 ? "first" : ""}`}
        >
          <div className="blue"></div>
          <div className="black"></div>
          <div className="content">
            <div className="title">
              <div className="small">
                {/* Let's {isActive ? setActive(true) : setActive(false)} */}
                {/* {active && "active"} */}
              </div>
              <div className="big md:text-[200px] lg:text-[280px] text-[150px] md:top-0 top-[50px]">
                <span>B</span>
                <span>l</span>
                <span>o</span>
                <span>g</span>
                <span>A</span>
                <span>p</span>
                <span>p</span>
              </div>
            </div>
            <div className="image relative">
              {/* <Image alt="" src={img3} fill /> */}
            </div>
            <div className="absolute bottom-10 p-2  gap-4 text-[#fffcef] justify-center text-xl flex items-center w-full">
              <span className="font-bold z-20">
                <b>302</b> MPH
              </span>
              <span className="font-bold z-20">
                <b>0-100</b> KMPH
              </span>
              <span className="font-bold z-20">
                <b>350</b> KW
              </span>
              <button className=" py-2 px-3 border border-[#00d2fa] rounded-[10px] text-[#00d2fa] cursor-pointer hover:bg-[#00d2fa] hover:text-[#1a1a15]">
                Discover Now <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={`w-full h-full  ${active === 2 ? "first" : ""}`}
        >
          <div className="blue"></div>
          <div className="black"></div>
          <div className="content">
            <div className="title">
              <div className="small">
                {/* Let's {isActive ? setActive(true) : setActive(false)} */}
                {/* {active && "active"} */}
              </div>
              <div className="big md:text-[200px] lg:text-[280px] text-[150px] md:top-0 top-[50px]">
                <span>B</span>
                <span>l</span>
                <span>o</span>
                <span>g</span>
                <span>A</span>
                <span>p</span>
                <span>p</span>
              </div>
            </div>
            <div className="image relative">
              {/* <Image alt="" src={img3} fill /> */}
            </div>
            <div className="absolute bottom-10 p-2  gap-4 text-[#fffcef] justify-center text-xl flex items-center w-full">
              <span className="font-bold z-20">
                <b>302</b> MPH
              </span>
              <span className="font-bold z-20">
                <b>0-100</b> KMPH
              </span>
              <span className="font-bold z-20">
                <b>350</b> KW
              </span>
              <button className=" py-2 px-3 border border-[#00d2fa] rounded-[10px] text-[#00d2fa] cursor-pointer hover:bg-[#00d2fa] hover:text-[#1a1a15]">
                Discover Now <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
}
