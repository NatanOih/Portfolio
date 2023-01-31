import React, { useEffect } from "react";
import { Icon } from "./Icon";
import { motion, useAnimationControls } from "framer-motion";

export const Tech = ({
  title,
  techList,
  className,
  isRevealed,
  ShowSkills,
}) => {
  const skillBoxControl = useAnimationControls();
  const skillsControls = useAnimationControls();

  useEffect(() => {
    skillBoxControl.start({ x: 0, opacity: 1 });
    skillsControls.start({ scale: 1, opacity: 1 });
  }, [title]);

  return (
    <motion.div
      initial={{ x: -150, opacity: 0 }}
      animate={skillBoxControl}
      transition={{
        duration: 1.2,
        type: "spring",
        stiffness: 100,
        ease: "easeInOut",
      }}
      className={` z-30 bg-red-300 rounded-xl w-[80%] m-12 mx-auto p-3 shadow `}
    >
      <motion.div
        initial={{ x: -250, opacity: 0 }}
        animate={skillBoxControl}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 100,
          delay: 0.3,
          ease: "easeInOut",
        }}
        className="max-w-[450px] m-auto max-h-[450px] border-8 bg-purple-300 border-black"
      >
        <motion.h3
          initial={{ x: -250, opacity: 0 }}
          animate={skillBoxControl}
          transition={{
            duration: 1.5,
            type: "spring",
            stiffness: 200,
            delay: 0.6,
            ease: "easeInOut",
          }}
          className=" m-auto text-center text-6xl "
        >
          {title}
        </motion.h3>
      </motion.div>

      <article className="flex justify-center flex-wrap gap-8 m-12 ">
        {techList.map((skill, id) => {
          return (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={skillsControls}
              transition={{
                duration: 1.5,
                type: "spring",
                stiffness: 500,
                delay: 0.3 + 0.12 * id,
              }}
              key={id}
              className="border-4 bg-white border-black shadow hover:scale-150 "
            >
              <Icon
                className="m-2 align-middle max-w-[100px] h-[60px]  "
                src={skill.path}
              />
            </motion.div>
          );
        })}
      </article>
    </motion.div>
  );
};
