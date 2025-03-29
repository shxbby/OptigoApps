import React from "react";

export function Checkbox({ id, ...props }) {
  return (
    <input
      type="checkbox"
      id={id}
      className="form-checkbox h-4 w-4 text-primary-600 transition duration-150 ease-in-out"
      {...props}
    />
  );
}