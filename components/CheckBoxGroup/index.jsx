import React, { useEffect } from "react";
import CheckBox from "../CheckBox";
export default function CheckBoxGroup({
  name = "No group name provided",
  options = [],
  callback = undefined,
}) {
  const [values, setValues] = React.useState(options);

  useEffect(() => {
    if (callback) {
      callback(values);
    }
  }, [values, callback]);

  function handleChange(value, id) {
    const newValues = values.map((item) =>
      item.id === id ? { ...item, value: !value } : item
    );
    setValues(newValues);
  }

  function selectedOptions() {
    return values.filter((item) => item.value);
  }

  return (
    <div>
      <h2>{name}</h2>

      {selectedOptions().map((item) => (
        <span key={item.id}>{item.label}</span>
      ))}

      {values.map((value, index) => (
        <CheckBox
          key={index}
          id={value.id}
          label={value.label}
          value={value.value}
          onChange={handleChange}
        />
      ))}
    </div>
  );
}
