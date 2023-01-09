import { useEffect, useState } from "react";

export const useMousePoistion = () => {
  const [mousePoistion, setMousePoistion] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const mousemove = (e) => {
      setMousePoistion({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mousemove);
    return () => {
      window.removeEventListener("mousemove", mousemove);
    };
  }, []);

  return { ...mousePoistion };
};
