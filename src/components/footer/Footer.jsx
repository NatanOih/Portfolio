import React, { useState } from "react";
import { motion } from "framer-motion";
import { react } from "@vitejs/plugin-react";

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
    <footer className="reletive flex justify-between h-full w-auto align-middle bg-slate-900 my-12 p-10">
      <span className=""> &copy; {new Date().getFullYear()}. Natan Oihman</span>
      <span>
        Reach me at
        <span className="" onClick={handleClick}>
          natanoih@gmail.com{" "}
        </span>
      </span>
      {clicked && <span animate={{ y: -25 }}> Copied </span>}{" "}
    </footer>
  );
};
