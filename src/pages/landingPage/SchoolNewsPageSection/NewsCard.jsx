import * as React from "react";

export default function NewsCard({ date, title, imageUrl }) {
  return (
    <div className="flex overflow-hidden flex-col p-2.5 text-center bg-white rounded-2xl min-h-[276px] min-w-[240px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[345px]">
      <div
        className="flex w-full rounded-md bg-zinc-300 min-h-[179px]"
        role="img"
        aria-label={title}
      />
      <div className="flex flex-col items-end mt-2.5 w-full">
        <div className="gap-2.5 self-stretch text-3xl text-black">{title}</div>
        <div className="flex items-center mt-2.5 text-base min-h-[19px] text-zinc-500">
          <div className="self-stretch my-auto">{date}</div>
          <img
            loading="lazy"
            src={imageUrl}
            className="object-contain shrink-0 self-stretch my-auto aspect-[0.95] w-[18px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
