import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-blue-900" : " "
      } hover:text-blue-900 transition duration-500 `}
      href={`#${lowerCasePage}`}
    >
      {page}
    </AnchorLink>
  );
};
