import gsap from "gsap";
import React, { useLayoutEffect } from "react";
import "./Splash.css";

const Splash = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline()
        .from(
          ".logo h1",
          {
            x: 100,
            opacity: 0,
            duration: 0.5,
          },
          "start"
        )
        .from(
          ".logo .line",
          {
            x: -100,
            opacity: 0,
            duration: 0.5,
          },
          "start"
        )
        .to(
          ".logo h1",
          {
            x: -100,
            opacity: 0,
            delay: 3.5,
            duration: 0.5,
          },
          "end"
        )
        .to(
          ".logo .line",
          {
            x: 400,
            opacity: 0,
            delay: 3.4,
            duration: 0.5,
          },
          "end"
        )
        .to(
          ".container",
          {
            height: 0,
            opacity: 0,
            delay: 4,
          },
          "end"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="container">
      <div className="logo">
        <h1>AppointEase</h1>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Splash;
