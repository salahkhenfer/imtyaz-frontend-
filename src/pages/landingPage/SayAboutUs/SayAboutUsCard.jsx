import { div } from "framer-motion/client";
import * as React from "react";

const SayAboutUsCard = ({ text, name, role }) => {
  return (
    <div className="relative flex flex-col items-center justify-center w-[345px] h-[345px] bg-white rounded-2xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
      <div className="flex  flex-col items-end pt-24 pr-7 pb-7 pl-20 bg-emerald-600">
        <div className="self-start">{text}</div>
        <div className="mt-4">{name}</div>
        <div className="text-base  text-yellow-500">{role}</div>
      </div>
      <div className="absolute top-0 left-0 w-10 h-10 border-8 border-emerald-600 border-solid border-t-8 border-l-8"></div>
    </div>
  );
};

export default SayAboutUsCard;
