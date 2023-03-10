import React from "react";

export default function BaseInput({
  label,
  type,
  id,
  value,
  min,
  max,
  handleChange,
  required = false,
  disabled = false,
  placeholder,
  className,
}) {
  function handleInputChange(e) {
    handleChange(e.target.id, e.target.value);
  }

  return (
    <label className="flex flex-col my-2 p-2">
      {label}
      <input
        type={type}
        id={id}
        value={value}
        min={min ?? ""}
        max={max ?? ""}
        onChange={handleInputChange}
        required={required}
        disabled={disabled}
        className={`my-1 p-2 border border-zinc-700 rounded-md ${
          className ?? ""
        }`}
        placeholder={placeholder ?? ""}
      />
    </label>
  );
}
