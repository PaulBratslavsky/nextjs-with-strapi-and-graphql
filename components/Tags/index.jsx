import React from "react";

export default function Tags({ tags = [], selected = {} }) {
  return (
    <div className="card-actions">
      {tags.map((tag) => {
        const isSelected = tag.id === selected?.id;

        return (
          <div key={tag.id} className="mr-3">
            <div className={`badge badge-md ${isSelected ? "badge-secondary": "badge-outline"}`}>{tag.attributes.name}</div>
          </div>
        );
      })}
    </div>
  );
}
