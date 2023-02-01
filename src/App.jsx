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

      <section className="reletive ">
        <h1 className="text-8xl h-[50vh] p-20 text-center align-middle ">
          {" "}
          Hello everybody, my name is{" "}
          <sapn className="text-red-800 underline"> Natan oihman</sapn> and this
          is my Portfolio page, it is still a work in progress and i will add my
          projects soon, hope it leaves a good impression
        </h1>
      </section>
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
