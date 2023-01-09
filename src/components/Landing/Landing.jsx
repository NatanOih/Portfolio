import React from "react";
import { useMediaQuery } from "./../../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import CustomCursor from "../Cursor/Cursor";
import { BigText } from "./BigText";

export const Landing = ({ scaling, setSelectedPage, setscaling }) => {
  return (
    <section className=" md:h-[100vh] h-[50vh] p-4 md:mt-10 mt-24 ">
      <BigText />
    </section>
  );
};
