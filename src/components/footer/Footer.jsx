import React, { useState } from "react";
import { motion } from "framer-motion";

export const Footer = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText("natanoih@gmail.com");
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 300);
  };

  return (
    <footer className="absolute flex justify-between  h-100% w-full align-middle text-white bg-slate-900  p-8">
      <span> &copy; {new Date().getFullYear()}. Natan Oihman</span>
      <span className="whitespace-pre-line">
        <p className="cursor-pointer" onClick={handleClick}>
          natanoih@gmail.com{" "}
        </p>
      </span>
      {clicked && (
        <motion.span
          className="absolute  right-4 bottom-8"
          animate={{ y: -35 }}
        >
          {" "}
          Copied{" "}
        </motion.span>
      )}{" "}
    </footer>
  );
};
