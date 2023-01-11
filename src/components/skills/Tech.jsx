import React from "react";
import { Icon } from "./Icon";

export const Tech = ({ title, techList }) => {
  return (
    <div className="flex z-30 flex-col gap-2 w-[28%] mt-2 border-2 p-3 ">
      <div className="flex justify-center border-8 bg-purple-300 border-black">
        <h3 className="text-center text-6xl m-1"> {title} </h3>
        <Icon
          className="my-auto ml-auto mr-10 w-[125px]"
          src={`${title}.png`}
        />
      </div>

      {techList.map((skill, id) => (
        <article key={id} className="flex ">
          {/* <h4 className="my-auto text-left text-4xl"> {skill.name}</h4> */}
          <Icon className="my-auto mx-auto p-1 w-[60px]" src={skill.path} />
        </article>
      ))}
    </div>
  );
};
