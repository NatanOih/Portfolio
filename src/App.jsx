import { useEffect, useRef, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";

import Cursor from "./components/Cursor/Cursor";
import { useMediaQuery } from "./hooks/useMediaQuery";
import { Dotgroup } from "./components/DotGroup/Dotgroup";
import { Skills } from "./components/skills/Skills";
import { Projects } from "./components/Projects/Projects";
import { BigText } from "./components/Landing/BigText";
import { Footer } from "./components/footer/Footer";

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
    <main className="reletive">
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

      <section className="reletive min-h-[50vh] w-full border-black border-t-4 ">
        <h1 className="md:text-8xl text-4xl  p-20 text-center align-middle ">
          {" "}
          Hello everybody, my name is{" "}
          <span className="text-red-800 underline"> Natan oihman</span> and this
          is my Portfolio page, it is still a work in progress and i will add my
          projects soon, hope it leaves a good impression
        </h1>
      </section>

      <Footer />
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
