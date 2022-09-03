import React, { useEffect } from "react";
import CheckBox from "../CheckBox";

const optionGroups = [
  {
    id: 1,
    group: "group1",
    options: [
      { id: 1, label: "Option 1", value: false },
      { id: 2, label: "Option 2", value: false },
      { id: 3, label: "Option 3", value: false },
      { id: 4, label: "Option 4", value: false },
    ],
  },
  {
    id: 2,
    group: "group2",
    options: [
      { id: 5, label: "Option 5", value: false },
      { id: 6, label: "Option 6", value: false },
      { id: 7, label: "Option 7", value: false },
      { id: 8, label: "Option 8", value: false },
    ],
  },
  {
    id: 3,
    group: "group3",
    options: [
      { id: 9, label: "Option 9", value: false },
      { id: 10, label: "Option 10", value: false },
      { id: 11, label: "Option 11", value: false },
      { id: 12, label: "Option 13", value: false },
    ],
  },
];

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
