import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export const BigText = ({ scaling, setSelectedPage, setscaling }) => {
  const isAboveMeduimScreens = useMediaQuery("(min-width: 1060px)");
  const textReveal = {
    hidden: {
      y: "-200%",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
    },
  };

  const spanVariants = {
    regular: { y: 0, scaleY: 1 },
    hover: {
      y: [-1, -2, -2.8, 0.9, 0],
      scaleY: [1, 1.3, 0.8, 1, 1.2],
    },
  };

  const text = [
    "fullstack",
    "developer",
    '"QUALITY-IS ',
    "NOT-AN-ACT",
    'IT>IS<A-HABIT"',
  ];

  const shift = ["3vw", "10vw", "15vw", "7vw", "14vw"];

  return (
    <section className=" md:h-[100vh] h-[50vh] p-4 md:mt-10 mt-24 ">
      <div className=" flex flex-wrap m-[2vw] BigTextStyles ">
        {text.map((word, id) => {
          return (
            <div
              key={`word  ${id}`}
              style={{ marginLeft: shift[id] }}
              className="container uppercase p-[3.7vw] whitespace-nowrap overflow-hidden"
            >
              <motion.h1
                className="tracking-[1.3vw] text-[10.8vw] h-[1.4vw] leading-[1.6vw]"
                variants={textReveal}
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 1,
                  delay: id === text.length - 1 ? 2.6 : id * 0.5,
                }}
              >
                {word.split("").map((letter, id) => (
                  <motion.span
                    variants={spanVariants}
                    initial="regular"
                    whileHover="hover"
                    key={id}
                    className="relative inline-block cursor-default"
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.h1>
            </div>
          );
        })}
      </div>
    </section>
  );
};
