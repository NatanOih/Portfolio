import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LineGradient } from "../LineGradient/LineGradient";

const container = {
  hidden: {},
  visible: {
    transition: {
      duration: 0.3,
      staggerChildren: 0.3,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  transition: { duration: 0.5 },
};

const Project = ({ title }) => {
  const overlayStyles = ` max-w-xl h-[250px] w-[250px] opacity-0 hover:opacity-90 transition duration-500
    bg-slate-900 z-30 flex flex-col justify-center items-center text-center p-16 text-blue-200`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.6 }}
      className="flex"
    >
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
          porttitor accumsan tincidunt.
        </p>
      </div>
      <motion.img
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className=" max-w-xl w-[250px] h-[250px] absolute contrast-150"
        src={`./img/${projectTitle}.png`}
        alt={projectTitle}
      />
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="pt-28 pb-48 bg-pink-700">
      {/* HEADING */}

      <motion.div
        className="md:w-2/5 mx-auto text-center my-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.4 }}
        variants={{
          hidden: { opacity: 0, y: -60 },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
      >
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0, rotate: 360 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0 }}
            className={`h-[0.5rem] w-1/3 rounded-sm bg-black mb-2`}
          />
        </AnimatePresence>
        <p className="font-playfair font-semibold text-8xl ">
          <span className="text-red-500"> PRO</span>JECTS{" "}
        </p>
        <div className="flex justify-end ">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, x: 0 }}
              whileInView={{ opacity: 1, x: 0, rotate: 360 }}
              transition={{ duration: 0.6 }}
              exit={{ opacity: 0 }}
              className={`h-[0.5rem] rounded-sm w-1/3 bg-black`}
            />
          </AnimatePresence>
        </div>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center my-32 mx-2">
        <motion.div
          className=" sm:grid sm:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* ROW 1 */}
          {/* <div
            className="flex justify-center text-center items-center p-10 bg-red-400
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div> */}
          <Project title="3" />
          <Project title="3" />

          {/* ROW 2 */}
          <Project title="3" />
          <Project title="3" />
          <Project title="3" />

          {/* ROW 3 */}
          <Project title="3" />

          {/* <div
            className="flex justify-center text-center items-center p-10 bg-blue-400
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};
