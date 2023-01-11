import React from "react";

export const Icon = ({ src, className }) => {
  return <img className={` ${className}`} alt={src} src={`./img/${src}`} />;
};
