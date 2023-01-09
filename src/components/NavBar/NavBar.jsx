import React, { useState } from "react";
import { Hamburger } from "./Hamburger";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { Mobilenav } from "./Mobilenav";
import { Link } from "./Link";

const NavBar = ({ isTopOfPage, setscaling, selectedPage, setSelectedPage }) => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const isAboveMeduimScreens = useMediaQuery("(min-width: 1060px)");

  const navBarBackground = isTopOfPage ? "" : "bg-[#1111] opacity-80";
  isAboveMeduimScreens && nav && setNav(false);
  return (
    <nav
      className={`${navBarBackground} z-40 w-full fixed top-0 py-2 ease-in-out duration-500`}
    >
      <div className="w-full min-h-[50px] flex justify-between items-center z-10 border-y-2 bg-gray-100 border-neutral-900">
        <h1
          onMouseEnter={() => setscaling(true)}
          onMouseLeave={() => setscaling(false)}
          className={`logo md:ml-[10%] ml-[20%] text-3xl font-bold underline px-6 pb-10 bg-neutral-900 ${
            !nav ? "" : "hello"
          }`}
        >
          Natan Oihman
        </h1>
        {isAboveMeduimScreens ? (
          <div
            onMouseEnter={() => setscaling(true)}
            onMouseLeave={() => setscaling(false)}
            className="justify-between px-7 text-2xl"
          >
            <span className="p-3 mr-2 font-bold">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </span>
            <span className="p-3 mr-2  font-bold">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </span>
            <span className="p-3 mr-2 font-bold">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </span>
            <span className="p-3 mr-2  font-bold">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </span>
          </div>
        ) : (
          <div onClick={handleNav}>
            {" "}
            <Hamburger
              setscaling={setscaling}
              isOpen={nav}
              isAboveMeduimScreens={isAboveMeduimScreens}
              setIsOpen={setNav}
            />
          </div>
        )}
        <Mobilenav
          setNav={setNav}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          nav={nav}
          isAboveMeduimScreens={isAboveMeduimScreens}
          handleNav={handleNav}
        />
      </div>
    </nav>
  );
};

export default NavBar;
