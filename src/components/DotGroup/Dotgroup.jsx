import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const Dotgroup = ({ selectedPage, setSelectedPage }) => {
  const selecetedStyles = `relative bg-black before:absolute before:w-6 before:h-6 before:rounded-full before:border-2 before:border-black before:left-[-50%] before:top-[-50%]`;
  return (
    <div className="flex flex-col gap-6 fixed top-[50%] right-7">
      <AnchorLink
        className={`${
          selectedPage === "home" ? selecetedStyles : "bg-white"
        } w-3 h-3 rounded-full`}
        href="#home"
      />
      <AnchorLink
        className={`${
          selectedPage === "projects" ? selecetedStyles : "bg-white"
        } w-3 h-3 rounded-full`}
        href="#projects"
      />
      <AnchorLink
        className={`${
          selectedPage === "skills" ? selecetedStyles : "bg-white"
        } w-3 h-3 rounded-full`}
        href="#skills"
      />
      <AnchorLink
        className={`${
          selectedPage === "contact" ? selecetedStyles : "bg-white"
        } w-3 h-3 rounded-full`}
        href="#contact"
      />
    </div>
  );
};
