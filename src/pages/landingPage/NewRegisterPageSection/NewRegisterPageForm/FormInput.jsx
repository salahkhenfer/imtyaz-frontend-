import * as React from "react";

export function FormInput({ label, value, type = "text" }) {
  return (
    <div className="flex flex-col mt-2.5 w-full text-right max-w-[338px]">
      <label
        className="self-end text-sm text-stone-700"
        htmlFor={`input-${label}`}
      >
        {label}
      </label>
      <input
        type={type}
        id={`input-${label}`}
        value={value}
        className="overflow-hidden gap-2.5 self-stretch px-3.5 py-2.5 mt-2 text-xs rounded-lg border border-solid border-zinc-300 text-zinc-300"
        aria-label={label}
      />
    </div>
  );
}
