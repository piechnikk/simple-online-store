import { cloneElement } from "react";

const FormField = ({ children, name, label, ...props }) => {
  return (
    <div {...props}>
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
      )}
      {children && (
        <div className="mt-2">
          {cloneElement(children, { id: name, autoComplete: name, name })}
        </div>
      )}
    </div>
  );
};

export default FormField;
