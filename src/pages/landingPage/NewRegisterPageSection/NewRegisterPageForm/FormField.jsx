import React from "react";
import { Field } from "formik";

const FormField = ({
  name,
  label,
  placeholder,
  error,
  touched,
  fullWidth,
  type = "text",
  ...props
}) => {
  return (
    <div className={`flex flex-col ${fullWidth ? "w-full" : "flex-1"}`}>
      <label htmlFor={name} className="text-right text-sm">
        {label}
      </label>
      <Field
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className={`overflow-hidden gap-2.5 self-stretch px-3.5 py-2.5 mt-2.5 w-full text-xs whitespace-nowrap rounded-lg border border-solid ${
          error && touched ? "border-red-500" : "border-zinc-300"
        } min-h-[35px]`}
        {...props}
      />
      {error && touched && (
        <div className="text-right text-red-500 text-xs mt-1">{error}</div>
      )}
    </div>
  );
};

export default FormField;
