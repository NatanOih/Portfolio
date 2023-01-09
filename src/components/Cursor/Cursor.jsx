import React, { useEffect, useRef, useState } from "react";
import "./cursor.css";
import { motion } from "framer-motion";
import { useMousePoistion } from "../../hooks/useMousePosition";

const Cursor = ({ scaling, mouseBoundries }) => {
  const [largeCircle, setLargeCircle] = useState({ x: 0, y: 0 });
  const { x, y } = useMousePoistion();
  const pageY = useRef();

  useEffect(() => {
    const mousemove = (e) => {
      pageY.current = e.pageY;

      setLargeCircle({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mousemove);
    return () => {
      window.removeEventListener("mousemove", mousemove);
    };
  }, []);

  return (
    <>
      {mouseBoundries > pageY.current && (
        <div>
          <motion.div
            animate={{
              x: x - 32,
              y: y - 32,
            }}
            transition={{
              type: "spring",
              mass: 3,
              ease: "easeInOut",
            }}
            className="large_circle"
            style={{ scale: scaling ? 0.4 : 1 }}
          />
          <motion.div
            animate={{
              x: largeCircle.x - 8,
              y: largeCircle.y - 8,
            }}
            transition={{
              type: "spring",
              mass: 2,
              ease: "easeInOut",
            }}
            style={{ scale: scaling ? 0.5 : 1 }}
            className="small_circle"
          ></motion.div>
        </div>
      )}
    </>
  );
};

export default Cursor;
