"use client";
import React, { useRef, useLayoutEffect } from "react";
import Head from "next/head";
<Head>
  <link rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.min.css" />
  <link rel="stylesheet" href="https://unpkg.com/swiper/css/pagination.css" />
</Head>;
import { gsap } from "gsap";
import Link from "next/link";

export default function Home() {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 1.3,
      })
        .from(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "-=30",
          delay: 1.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
        })
        .from("#welcome", {
          opacity: 0,
          duration: 0.5,
        });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative" ref={comp}>
      <div
        id="intro-slider"
        className="h-screen p-10 bg-white text-black text-center absolute top-0 left-0 z-10 w-full flex flex-col gap-10 tracking-tight"
      >
        <h1 className="text-9xl" id="title-1">
          Gokul's
        </h1>
        <h1 className="text-9xl" id="title-2">
          Project Stash
        </h1>
        <h1 className="text-9xl" id="title-3">
          is here...
        </h1>
      </div>

      <div className="h-screen flex bg-gray-950 justify-center place-items-center">
        <h1
          id="welcome"
          className="text-9xl mb-10 font-bold text-gray-100 font-spaceGrotesk"
        >
          Welcome.
          <p className="text-2xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            NOTE - Set your browser zoom level to 90%
          </p>
          <Link href="/mainproject">
            {" "}
            <div
              id="welcome"
              className="flex mt-10 items-center justify-center bg-zinc-950"
            >
              <div
                href="/"
                className="bg-[#4637B4] group relative inline-flex items-center overflow-hidden rounded-full px-8 py-3 transition"
              >
                <div className="absolute inset-0 flex items-center [container-type:inline-size]">
                  <div className="absolute h-[100cqw] w-[100cqw] animate-spin bg-[conic-gradient(from_0_at_50%_50%,rgba(255,255,255,0.5)_0deg,transparent_60deg,transparent_300deg,rgba(255,255,255,0.5)_360deg)] opacity-0 transition duration-300 group-hover:opacity-100"></div>
                </div>
                <div className="absolute inset-0.5 rounded-full bg-black/90"></div>
                <div className="absolute bottom-0 left-1/2 h-1/3 w-4/5 -translate-x-1/2 rounded-full bg-white/10 opacity-50 blur-md transition-all duration-500 group-hover:h-2/3 group-hover:opacity-100"></div>
                <div className="relative inline-flex items-center gap-2">
                  <span className="font-mona mt-px bg-gradient-to-b from-white/25 to-white bg-clip-text text-lg font-medium text-transparent transition-all duration-200">
                    Click here to begin
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </h1>
      </div>
    </div>
  );
}
