import React from "react";
import { Icon } from "./Icon";

export const Tech = ({ title, techList, className }) => {
  return (
    <div
      className={` z-30 bg-red-300 rounded-2xl w-[80%] m-12 mx-auto p-3 ${className} `}
    >
      <div className="max-w-[450px] m-auto max-h-[450px] border-8 bg-purple-300 border-black">
        <h3 className=" m-auto text-center text-6xl "> {title} </h3>
        {/* <Icon className="my-4 max-w-[80px] max-h-[80px]" src={`${title}.png`} /> */}
      </div>

      <article className="flex justify-center flex-wrap gap-8 m-12 ">
        {techList.map((skill, id) => {
          return (
            <div key={id} className="border-4 bg-white border-black icon ">
              <Icon
                className="m-2 align-middle max-w-[100px] h-[60px]"
                src={skill.path}
              />
              {/* <h4 className="m-auto text-center text-4xl"> {skill.name}</h4> */}
            </div>
          );
        })}
      </article>
    </div>
  );
};
