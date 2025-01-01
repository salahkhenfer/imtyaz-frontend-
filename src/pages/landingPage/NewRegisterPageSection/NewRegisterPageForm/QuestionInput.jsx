import * as React from "react";

function QuestionInput({ label, placeholder }) {
  return (
    <div className="flex flex-col mt-2.5 w-full text-right max-w-[338px]">
      <label className="self-end text-sm text-stone-700">{label}</label>
      <div className="flex overflow-hidden z-10 gap-10 justify-between items-center px-3.5 py-1.5 mt-2 text-xs rounded-lg border border-solid border-zinc-300 min-h-[36px] text-zinc-300">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/70599b477f399fcc477390af3384c63649171501f88088a93d8085f83a9da9a9?placeholderIfAbsent=true&apiKey=ce15f09aba8c461ea95db36c370d18d3"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
        <div className="flex shrink-0 self-stretch my-auto w-6 h-6" />
        <div className="self-stretch my-auto">{placeholder}</div>
      </div>
    </div>
  );
}

export default QuestionInput;
