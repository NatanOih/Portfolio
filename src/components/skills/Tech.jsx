import React from "react";
import { Icon } from "./Icon";

export const Tech = () => {
  const frontEndImg = [
    { name: "HTML/CSS", path: "coding.png" },
    { name: "JavaScript", path: "js.png" },
    { name: "React", path: "react.png" },
    { name: "TailwindCSS", path: "tailwind-css-icon.png" },
    { name: "Redux", path: "redux-icon.png" },
  ];
  return (
    <div className="flex flex-col gap-6 mt-4 border-2 p-6 ">
      <div className="flex justify-center">
        <h3 className="text-center m-2"> Frontend Development </h3>
        <Icon src="website-design-icon.png" />
      </div>

      {frontEndImg.map((skill, id) => (
        <article key={id} className="flex   p-4">
          <h4 className="my-auto text-left mr-8 text-2xl"> {skill.name}</h4>
          <Icon className="my-auto ml-auto  p-1" src={skill.path} />
        </article>
      ))}
    </div>
  );
};
