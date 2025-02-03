import * as React from "react";

export function FooterLinkSection({ title, links }) {
  return (
    <div className="flex flex-col flex-1 shrink justify-center text-right basis-0 min-w-[240px]">
      <div className="text-3xl text-center text-teal-500">{title}</div>
      <div className="flex flex-col text-center  mt-7 w-full text-sm text-zinc-300">
        {links.map((link, index) => (
          <a
            href={link.link}
            key={index}
            className={`${
              index > 0 ? "mt-3.5" : ""
            }  text-center cursor-pointer`}
            tabIndex="0"
          >
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
}
