import React, { useState } from "react";

export const Hamburger = ({ isOpen, setIsOpen, setscaling }) => {
  return (
    <div
      onMouseEnter={() => setscaling(true)}
      onMouseLeave={() => setscaling(false)}
      className={isOpen ? "menu-btn open" : "menu-btn"}
    >
      <div className="menu-btn__burger"> </div>
    </div>
  );
};
