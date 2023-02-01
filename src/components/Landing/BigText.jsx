import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export const BigText = ({ scrollY, mouseBoundries, setSelectedPage }) => {
  const isAboveMeduimScreens = useMediaQuery("(min-width: 1060px)");
  const [Finished, setFinished] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFinished(true);
    }, 2500);
  }, []);

  const textReveal = {
    hidden: {
      y: "-100%",
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
    "tracking-[2.5vw] text-[9.5vw] h-[0.5vw] m-2.5 leading-[1.1vw] ";
  const nerrowScreenText =
    "text-[13vw] tracking-[1.1vw] h-[5vw] leading-[4.3vw]";

  return (
    <section className=" h-full w-full mt-24">
      <div className="z-10 flex flex-wrap m-[1vw] md:py-6 md:mt-[5vw] font-extrabold BigTextStyles">
        {text.map((word, id) => {
          return (
            <div
              key={`word  ${id}`}
              style={{
                marginLeft: isAboveMeduimScreens
                  ? shiftWide[id]
                  : shiftNerrow[id],
              }}
              className="container uppercase md:p-[3.5vw] p-[4.5vw] whitespace-nowrap"
            >
              <motion.h1
                className={`${
                  isAboveMeduimScreens ? wideScreenText : nerrowScreenText
                }`}
                key={id}
                variants={textReveal}
                initial="hidden"
                animate="visible"
                // style={id === text.length - 1 && { color: "#FF0032" }}
                style={
                  id === text.length - 1
                    ? { color: "#D61355" }
                    : scrollY < 1100 &&
                      Finished && {
                        translateY: `${scrollY * 1.2 * (id * 0.3 + 1)}px`,
                        transition: "all 1s ease-out",
                      }
                }
                transition={{
                  duration: 1,
                  delay: id === text.length - 1 ? 1.6 : id * 0.2,
                }}
              >
                {word.split("").map((letter, idd) => (
                  <motion.span
                    key={idd * 1.3}
                    variants={PopLetters}
                    initial="qwe"
                    animate="asd"
                    transition={{
                      duration: 0.4,
                      delay: id === text.length - 1 ? 1.5 : id * 0.1,
                    }}
                  >
                    <motion.span
                      style={
                        id !== text.length - 1 && {
                          translateY: `${scrollY * 0.03 * idd}px`,
                        }
                      }
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
