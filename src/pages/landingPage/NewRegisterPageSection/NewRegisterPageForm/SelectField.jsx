import React, { useState } from "react";
import { Field } from "formik";
import { FaChevronDown } from "react-icons/fa";

const SelectField = ({
  name,
  label,
  placeholder,
  options = [],
  error,
  touched,
  iconSrc,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

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
          onClick={handleToggle}
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
          <FaChevronDown
            className={`absolute left-3 top-1/2 transform w-3 h-3 pointer-events-none transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
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
