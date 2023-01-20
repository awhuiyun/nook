import React from "react";

export default function BaseTextArea({
  label,
  id,
  value,
  handleChange,
  required = false,
  disabled = false,
  placeholder,
}) {
  function handleInputChange(e) {
    handleChange(e.target.id, e.target.value);
  }

  return (
    <label className="flex flex-col my-2 p-2">
      {label}
      <textarea
        rows="5"
        id={id}
        value={value}
        onChange={handleInputChange}
        required={required}
        disabled={disabled}
        className="my-1 p-2 border border-zinc-700 rounded min-h-[120px]"
        placeholder={placeholder ?? ""}
      />
    </label>
  );
}
