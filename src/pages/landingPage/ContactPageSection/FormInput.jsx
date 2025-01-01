import * as React from "react";

function FormInput({ id, placeholder, type }) {
  return (
    <div className="relative">
      <label htmlFor={id} className="sr-only">
        {placeholder}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="overflow-hidden gap-2.5 self-stretch px-3.5 py-2.5 mt-2.5 w-full text-right rounded-lg border border-emerald-700 border-solid min-w-[250px] max-md:max-w-full"
        aria-label={placeholder}
      />
    </div>
  );
}

export default FormInput;
