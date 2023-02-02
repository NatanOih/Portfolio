import React from "react";
import { motion } from "framer-motion";

export const MaskElement = ({ handleTransition }) => {
  return (
    <motion.div className="bg-[#111] h-[100%] w-full py-28 flex flex-col child2 ">
      <h3 className=" font-playfair font-semibold text-center text-8xl p-1 mb-5 text-slate-200 ">
        MY
        <span className="border-4 bg-slate-500 border-slate-900 hello2">
          SKILLS
        </span>
      </h3>

      <div className="z-100 ml-[10vw] mt-auto ">
        {" "}
        <h2
          onClick={handleTransition}
          className="text-4xl tracking-widest text-white "
        >
          {" "}
          !!!{" "}
        </h2>
      </div>
    </motion.div>
  );
};
