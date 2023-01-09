import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { Tech } from "./Tech";

export const Skills = ({ isAboveMediumScreens, setMouseBoundries }) => {
  const isAboveMeduimScreens = useMediaQuery("(min-width: 1060px)");
  const spotLight = useRef();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const mask = {
    clipPath: `circle(50px at ${mouse.x}px ${mouse.y}px)`,
    transition: "opacity 1s cubic-bezier(0.77, 0, 0.175, 1)",
    animation: "fadeIn 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards",
  };

  const handleMouseMove = (event) => {
    const localX = Math.round(event.clientX);
    const localY = Math.round(event.pageY);
    const { offsetTop } = spotLight.current;

    setMouseBoundries(offsetTop);
    setMouse({
      x: localX,
      y: localY - offsetTop,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const MaskElement = () => {
    return (
      <div className="bg-[#111] h-[100%] w-[100%] px-10 py-28 flex flex-col child2 ">
        <h3 className=" font-playfair font-semibold text-center text-8xl p-1 mb-5 text-slate-200 ">
          MY
          <span className="border-4 bg-slate-500 border-slate-900 hello2">
            SKILLS
          </span>
        </h3>

        <div className="z-100 mt-auto ">
          {" "}
          <h2 className="text-4xl tracking-widest text-white "> !!! </h2>
        </div>
      </div>
    );
  };

  return (
    <div className="parant cursor-none h-[100vh]" ref={spotLight}>
      <section
        // style={mask}
        id="skills"
        className={`bg-white  p-10 py-28 h-[100%] flex flex-col w-[100%] child1`}
      >
        {/* HEADER */}
        <h3 className=" font-playfair font-semibold  text-center text-8xl p-1  mb-5 bg-slate-200 border-black ">
          MY
          <span className="border-4 bg-slate-300 border-black hello">
            SKILLS
          </span>
        </h3>
        <div className="md:flex justify-between">
          <Tech />
          <Tech />
        </div>

        <motion.div className="z-100 mt-auto ">
          <h2 className="text-4xl tracking-widest text-black "> !!! </h2>
        </motion.div>
      </section>

      <MaskElement />
    </div>
  );
};
