import { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import { Leaf } from "./components/Leaf";
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
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const [mouseBoundries, setMouseBoundries] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <Cursor scaling={scaling} mouseBoundries={mouseBoundries} />
      <NavBar
        isTopOfPage={isTopOfPage}
        setscaling={setscaling}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      {isAboveMeduimScreens && (
        <div className="w-5/6 mx-auto md:h-full">
          <Dotgroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </div>
      )}

      <BigText
        scaling={scaling}
        setscaling={setscaling}
        setSelectedPage={setSelectedPage}
      />

      <Skills setMouseBoundries={setMouseBoundries} />
      {/* <Projects /> */}
    </div>
  );
}

export default App;
