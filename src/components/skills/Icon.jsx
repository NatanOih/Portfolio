import React from "react";

export const Icon = ({ src }) => {
  return (
    <img
      className="md:max-w-[60px] max-w-[50px]"
      alt={src}
      src={`./img/${src}`}
    />
  );
};
