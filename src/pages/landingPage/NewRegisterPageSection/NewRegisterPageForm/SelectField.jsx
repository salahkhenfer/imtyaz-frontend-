import React from "react";
import { Field } from "formik";

const SelectField = ({
  name,
  label,
  placeholder,
  options = [],
  error,
  touched,
  iconSrc,
}) => {
  return (
    <div className="flex flex-col mt-2.5">
      <label htmlFor={name} className="text-right text-sm">
        {label}
      </label>
      <div className="relative">
        <Field
          as="select"
          id={name}
          name={name}
          className={`overflow-hidden appearance-none gap-2.5 self-stretch px-3.5 py-2.5 mt-2.5 w-full text-xs whitespace-nowrap rounded-lg border border-solid ${
            error && touched ? "border-red-500" : "border-zinc-300"
          } min-h-[35px]`}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Field>
        {iconSrc && (
          <img
            src={iconSrc}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none"
            alt="select arrow"
          />
        )}
      </div>
      {error && touched && (
        <div className="text-right text-red-500 text-xs mt-1">{error}</div>
      )}
    </div>
  );
};

export default SelectField;
