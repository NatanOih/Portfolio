import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { Tech } from "./Tech";
import { MaskElement } from "./MaskElement";

export const Skills = ({ isAboveMediumScreens, setMouseBoundries }) => {
  const isAboveMeduimScreens = useMediaQuery("(min-width: 1060px)");
  const [isRevealed, setIsRevealed] = useState(false);
  const spotLight = useRef();
  const [ShowSkills, setShowSkills] = useState(false);
  const [skillCard, setSkillCard] = useState({
    title: "",
    whatToShow: [{ name: "", path: "" }],
  });

  const controls = useAnimationControls();

  useEffect(() => {
    if (isRevealed === true) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 100,
          duration: 0.7,
          delay: 0.6,
          ease: "easeInOut",
        },
      });
    } else {
      controls.start({
        y: -100,
        opacity: 0,
        transition: { duration: 0.01 },
      });
    }
  }, [isRevealed]);

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
      : setTransition("clip-path 1s");
    window.removeEventListener("mousemove", () => {});
    setIsRevealed(!isRevealed);
    setShowSkills(false);
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
    { name: "TypeScript", path: "ts.png" },
    { name: "React", path: "react.png" },
    { name: "Redux", path: "redux-icon.png" },
    { name: "TailwindCSS", path: "tailwind-css-icon.png" },
    { name: "Bootstrap", path: "bootstrap.png" },
    { name: "matirialui", path: "matirialui.png" },
    { name: "styled-components", path: "styled-components.png" },
    { name: "gsap", path: "gsap.png" },
    { name: "motion", path: "motion.png" },
  ];
  const backEndImg = [
    { name: "nodeJS", path: "node.png" },
    { name: "expressJs", path: "expressjs.png" },
    { name: "Nextjs", path: "Nextjs-logo.png" },
    { name: "API", path: "api-icon.png" },
    { name: "mongodb", path: "mongo.png" },
    { name: "SQL", path: "sql.png" },
    { name: "npm", path: "npm.png" },
    { name: "git", path: "git.png" },
    { name: "python", path: "python.png" },
  ];

  const experitesFields = [
    { title: "frontend development", whatToShow: frontEndImg },
    { title: "backend development", whatToShow: backEndImg },
  ];

  return (
    <div
      className={`parant relative  ${
        !isRevealed && "cursor-none"
      } min-h-[110vh]`}
      ref={spotLight}
    >
      <section
        onTransitionEnd={() => {
          setTransition("opacity 1s cubic-bezier(0.77, 0, 0.175, 1)");
        }}
        style={!isRevealed ? mask : mask2}
        id="skills"
        className={`bg-white py-28 h-[100%] flex flex-col w-[100%] child1`}
      >
        {/* HEADER */}
        <h3 className=" font-playfair font-semibold  text-center text-8xl p-1  mb-5 bg-slate-200 border-black ">
          MY
          <span className="border-4 bg-slate-300 border-black hello">
            SKILLS
          </span>
        </h3>

        {/* TECHS */}
        <div className=" mt-12 p-1 ">
          <div className={`flex flex-row md:gap-40 gap-20 justify-center`}>
            {experitesFields.map((field, index) => {
              return (
                <motion.img
                  key={index}
                  initial={{ y: -100, opacity: 0 }}
                  animate={controls}
                  onMouseEnter={() => {
                    setSkillCard(field);

                    setShowSkills(false);
                    setTimeout(() => {
                      setShowSkills(true);
                    }, 200);
                  }}
                  // onMouseLeave={() => {
                  //   setShowSkills(false);
                  // }}
                  className={`${
                    !isRevealed ? "cursor-none" : "cursor-pointer"
                  } md:w-[200px]  w-[150px]`}
                  alt="ascasc"
                  src={`./img/${field.title}.png`}
                />
              );
            })}
          </div>

          {ShowSkills && isRevealed && (
            <Tech
              isRevealed={isRevealed}
              controls={controls}
              className={""}
              ShowSkills={ShowSkills}
              title={skillCard.title}
              techList={skillCard.whatToShow}
            />
          )}
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

{
  /* <motion.img
              initial={{ y: -100, opacity: 0 }}
              animate={controls}
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
              className={`${
                !isRevealed ? "cursor-none" : "cursor-pointer"
              } w-[200px]`}
              alt="ascasc"
              src="./img/frontend development.png"
            />
            <motion.img
              initial={{ y: -100, opacity: 0 }}
              animate={controls}
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
              className={`${
                !isRevealed ? "cursor-none" : "cursor-pointer"
              } w-[200px]`}
              alt="ascasc"
              src="./img/backend development.png"
            /> */
}
