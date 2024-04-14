import React, { useEffect, useState } from "react";
import "./style.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import head from "../heroBanner/assets/head.jpg";

gsap.registerPlugin(ScrollTrigger);

const HeroBanner = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".img",
        scrub: true,
      },
    });

    tl.to(".img", {
      stagger: 0.2,
      y: -600,
      scrub: true,
    });
  }, []); // empty dependency array means this effect runs once after initial render

  return (
    <>
      <div className="max-w-8xl m-auto p-8 text-center">
        <div className="hero">
          <section>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </section>
          <section>
            <div className="img"></div>
            <div className="img"></div>
            <div className="img"></div>
            <div className="img"></div>
            <div className="img"></div>
            <div className="img"></div>
          </section>
          <section></section>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
