import React from "react";

export default function TagsSelect({
  tags = [],
  indicator = false,
  onClick,
  totalPosts = 0,
  selectedTag = null,
}) {
  return (
    <div className="px-6 py-6">
      {tags.map((tag) => {
        const isSelected = tag.id === selectedTag?.id;
        const hasCount = tag.attributes.hasOwnProperty("posts");
        return (
          <button
            onClick={() => onClick(tag)}
            key={tag.id}
            className="indicator mr-3 mb-3"
          >
            {indicator && hasCount && (
              <span className="indicator-item badge  badge-sm badge-secondary">
                {tag.attributes.posts.data.length}
              </span>
            )}
            <div className={`badge badge-lg ${isSelected ? "badge" : "badge-outline"}`}>
              {tag.attributes.name}
            </div>
          </button>
        );
      })}

      <button
        onClick={() => onClick(null)}
        key="all"
        className="indicator mr-3"
      >
        {indicator && (
          <span className="indicator-item badge  badge-sm badge-secondary">
            {totalPosts}
          </span>
        )}
        <div
          className={`badge badge-lg ${
            selectedTag === null ? "badge" : "badge-outline"
          }`}
        >
          All
        </div>
      </button>
    </div>
  );
}