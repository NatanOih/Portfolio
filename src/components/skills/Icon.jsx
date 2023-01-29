import React from "react";

export const Icon = ({ src, className }) => {
  return (
    <img
      style={{ filter: "grayscale(20%)" }}
      className={` ${className}`}
      alt={src}
      src={`./img/${src}`}
    />
  );
};
