import React from "react";
import CheckBoxGroup from "../CheckBoxGroup";

export default function CheckBoxGroups({ groups = [] }) {
  return (
    <div className="flex gap-2">
      {groups.map((group) => {
        return (
          <CheckBoxGroup
            key={group.id}
            name={group.group}
            options={group.options}
          />
        );
      })}
    </div>
  );
}
