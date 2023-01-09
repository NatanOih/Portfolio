import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";
import { Link } from "./Link";
const sideBarVariants = {
  open: {
    x: "-120vw",
    transition: {
      duration: 0.7,
    },
  },
  closed: {
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const menuItemVariants = {
  closed: {
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
  open: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const Mobilenav = ({ nav, selectedPage, setSelectedPage, setNav }) => {
  return (
    <motion.div
      onClick={() => {
        setNav(false);
      }}
      className="overflow-y-hidden text-gray-100 absolute font-bold left-0 top-0 h-screen bg-black/90 w-full flex flex-column"
      variants={sideBarVariants}
      initial={false}
      animate={!nav ? "open" : "closed"}
    >
      <motion.div
        variants={menuItemVariants}
        initial={false}
        animate={!nav ? "open" : "closed"}
        className="flex flex-col m-4 h-full w-full text-center gap-14 text-4xl justify-center"
      >
        <span className=" font-bold">
          <Link
            page="Home"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </span>
        <span className="  font-bold">
          <Link
            page="Projects"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </span>
        <span className="  font-bold">
          <Link
            page="Tech Stack"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </span>
        <span className="  font-bold">
          <Link
            page="Contact"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </span>

        <span className="justify-center  text-2xl  flex ">
          {" "}
          <AiFillGithub size={50} className="mx-1" />{" "}
        </span>
        <span className="justify-center  text-2xl  flex ">
          {" "}
          <AiFillLinkedin size={50} className="mx-1" />
        </span>
      </motion.div>
    </motion.div>
  );
};
