import React from "react";

export const Icon = ({ src, className }) => {
  return (
    <img
      className={`md:max-w-[60px] w-[50px] ${className}`}
      alt={src}
      src={`./img/${src}`}
    />
  );
};
