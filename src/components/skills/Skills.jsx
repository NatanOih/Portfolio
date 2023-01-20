import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { Tech } from "./Tech";
import { MaskElement } from "./MaskElement";
import { Icon } from "./Icon";

export const Skills = ({ isAboveMediumScreens, setMouseBoundries }) => {
  const isAboveMeduimScreens = useMediaQuery("(min-width: 1060px)");
  const [isRevealed, setIsRevealed] = useState(false);
  const spotLight = useRef();
  const [ShowSkills, setShowSkills] = useState("opacity-0");
  const [skillCard, setSkillCard] = useState({
    title: "",
    whatToShow: [{ name: "", path: "" }],
  });

  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [transition, setTransition] = useState(
    "opacity 1s cubic-bezier(0.77, 0, 0.175, 1)"
  );

  const mask = {
    clipPath: `circle(50px at ${mouse.x}px ${mouse.y}px)`,
    transition,
    animation: "fadeIn 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards",
  };
  const mask2 = {
    clipPath: `circle(60% at 50% 50%)`,
    transition,
    animation: "fadeIn 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards",
  };

  const handleTransition = () => {
    isRevealed
      ? setTransition("clip-path 0.1s")
      : setTransition("clip-path 2.5s");
    window.removeEventListener("mousemove", () => {});
    setIsRevealed(!isRevealed);
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

  const frontEndImg = [
    { name: "HTML/CSS", path: "coding.png" },
    { name: "JavaScript", path: "js.png" },
    { name: "React", path: "react.png" },
    { name: "TailwindCSS", path: "tailwind-css-icon.png" },
    { name: "Redux", path: "redux-icon.png" },
  ];
  const backEndImg = [
    { name: "nodeJS", path: "node.png" },
    { name: "expressJs", path: "expressjs.png" },
    // { name: "API", path: "api-icon.png" },
    { name: "mongodb", path: "mongo.png" },
    { name: "Nextjs", path: "Nextjs-logo.png" },
    { name: "python", path: "python-programming-language-icon.png" },
  ];

  return (
    <div
      className={`parant ${!isRevealed && "cursor-none"} h-[100vh]`}
      ref={spotLight}
    >
      <section
        onTransitionEnd={() => {
          setTransition("opacity 1s cubic-bezier(0.77, 0, 0.175, 1)");
        }}
        style={!isRevealed ? mask : mask2}
        id="skills"
        className={`bg-white p-10 py-28 h-[100%] flex flex-col w-[100%] child1`}
      >
        {/* HEADER */}
        <h3 className=" font-playfair font-semibold  text-center text-8xl p-1  mb-5 bg-slate-200 border-black ">
          MY
          <span className="border-4 bg-slate-300 border-black hello">
            SKILLS
          </span>
        </h3>

        {/* TECHS */}
        <div className="md:flex gap-20 mt-12 p-1 justify-center">
          <div className="">
            <img
              onMouseEnter={() => {
                setSkillCard({
                  title: "frontend development",
                  whatToShow: frontEndImg,
                });
                setShowSkills("opacity-100");
              }}
              onMouseLeave={() => {
                setShowSkills("opacity-0");
              }}
              className="cursor-pointer w-[225px]"
              alt="ascasc"
              src="./img/frontend development.png"
            />
            <img
              onMouseEnter={() => {
                setSkillCard({
                  title: "backend development",
                  whatToShow: backEndImg,
                });
                setShowSkills("opacity-100");
              }}
              onMouseLeave={() => {
                setShowSkills("opacity-0");
              }}
              className="cursor-pointer w-[225px]"
              alt="ascasc"
              src="./img/backend development.png"
            />
          </div>

          <div>
            <Tech
              className={`${ShowSkills} `}
              title={skillCard.title}
              techList={skillCard.whatToShow}
            />
          </div>
        </div>

        {/* BUTTON  */}
        <motion.div className="z-100 ml-[10vw] mt-auto ">
          <h2
            onClick={handleTransition}
            className="text-4xl tracking-widest w-[50px]  text-black cursor-pointer "
          >
            !!!
          </h2>
        </motion.div>
      </section>

      <MaskElement handleTransition={handleTransition} />
    </div>
  );
};
