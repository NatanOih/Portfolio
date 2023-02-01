import { useEffect, useRef, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import Cursor from "./components/Cursor/Cursor";
import { useMediaQuery } from "./hooks/useMediaQuery";
import { Dotgroup } from "./components/DotGroup/Dotgroup";
import { Skills } from "./components/skills/Skills";
import { Projects } from "./components/Projects/Projects";
import { BigText } from "./components/Landing/BigText";

function App() {
  const [scaling, setscaling] = useState(false);
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMeduimScreens = useMediaQuery("(min-width: 1060px)");
  const [mouseBoundries, setMouseBoundries] = useState(null);

  const [scrollY, setScrollY] = useState("0");

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="app">
      <Cursor scaling={scaling} mouseBoundries={mouseBoundries} />
      <NavBar
        scrollY={scrollY}
        setscaling={setscaling}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <BigText
        mouseBoundrie={mouseBoundries}
        scrollY={scrollY}
        setSelectedPage={setSelectedPage}
      />

      <Skills setMouseBoundries={setMouseBoundries} />

      <Projects />
    </main>
  );
}

export default App;

{
  /* {isAboveMeduimScreens && (
        <div className="w-5/6 mx-auto md:h-full">
          <Dotgroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </div>
      )} */
}
