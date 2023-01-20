import React from "react";
import { Icon } from "./Icon";

export const Tech = ({ title, techList, className }) => {
  return (
    <div className={` z-30 gap-2 mt-2 border-8 p-3 ${className} `}>
      <div className="max-w-[450px] flex max-h-[450px] border-8 bg-purple-300 border-black">
        <h3 className=" my-auto text-start text-6xl "> {title} </h3>
        <Icon
          className="my-4 max-w-[100px] max-h-[100px]"
          src={`${title}.png`}
        />
      </div>

      {techList.map((skill, id) => (
        <article key={id} className="">
          <Icon
            className="my-auto mx-auto py-auto max-w-[100px]  h-[60px]"
            src={skill.path}
          />
          {/* <h4 className="my-auto text-left text-4xl"> {skill.name}</h4> */}
        </article>
      ))}
    </div>
  );
};
