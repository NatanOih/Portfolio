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

  const PopLetters = {
    qwe: { opacity: 0 },
    asd: {
      opacity: 1,
      y: [-1, -1.9, -2.7, 1],
      scaleY: [0.3, 1.3, 0.8, 1],
    },
  };

  const text = [
    "fullstack",
    "developer",
    '"QUALITY-IS ',
    "NOT-AN-ACT",
    'IT>IS<A-HABIT"',
  ];

  const shiftWide = ["3vw", "10vw", "15vw", "7vw", "3vw"];
  const shiftNerrow = ["1.5vw", "5vw", "6vw", "4vw", "1.5vw"];

  const wideScreenText =
    "tracking-[2.2vw] text-[9.8vw] h-[0.4vw] m-2.5 leading-[1.1vw] ";
  const nerrowScreenText =
    "text-[13vw] tracking-[1.1vw] h-[5vw] leading-[4.3vw]";
  return (
    <section className="  h-[100%] p-2 md:mt-10 mt-24">
      <div className="z-200 flex flex-wrap m-[2vw] my-12 font-extrabold BigTextStyles">
        {text.map((word, id) => {
          return (
            <div
              key={`word  ${id}`}
              style={{
                marginLeft: isAboveMeduimScreens
                  ? shiftWide[id]
                  : shiftNerrow[id],
              }}
              className="container uppercase p-[3.5vw] whitespace-nowrap"
            >
              <motion.h1
                className={`${
                  isAboveMeduimScreens ? wideScreenText : nerrowScreenText
                }`}
                key={id * 2.2}
                variants={textReveal}
                initial="hidden"
                animate="visible"
                style={id === text.length - 1 && { color: "#FF0032" }}
                transition={{
                  duration: 1,
                  delay: id === text.length - 1 ? 2.6 : id * 0.4,
                }}
              >
                {word.split("").map((letter, id) => (
                  <motion.span
                    key={id * 1.3}
                    variants={PopLetters}
                    initial="qwe"
                    animate="asd"
                    transition={{
                      duration: 0.4,
                      delay: id === text.length - 1 ? 2.5 : id * 0.3,
                    }}
                  >
                    <motion.span
                      variants={spanVariants}
                      initial="regular"
                      whileHover="hover"
                      key={id}
                      className="relative inline-block cursor-default"
                    >
                      {letter}
                    </motion.span>
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
