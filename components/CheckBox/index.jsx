import React from "react";

export default function CheckBox({
  id,
  label = "Checkbox",
  value = false,
  onChange = () => {},
  radio = false,
}) {
  const outerStyles = `${
    radio ? "rounded-full" : ""
  } transition duration-500 border h-[18px] w-[18px] p-[2px] ${
    value ? "boarder-purple-800" : "border-gray-500"
  }`;

  const innerStyles = `${radio ? "rounded-full" : ""} transition duration-300 ${
    value ? "bg-purple-800" : "bg-transparent"
  } w-full h-full`;

  return (
    <div>
      <input
        type={radio ? "radio" : "checkbox"}
        className="hidden"
        value={value}
      />

      <div className="flex gap-2 items-center">
        <div
          className={outerStyles}
          onClick={() => onChange(value, id)}
        >
          <div className={innerStyles}></div>
        </div>
        {label && <div onClick={() => onChange(value, id)}>{label}</div>}
      </div>
    </div>
  );
}
