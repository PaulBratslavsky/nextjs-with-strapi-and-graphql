import React from "react";

export default function TagsSelect({
  tags = [],
  indicator = false,
  filterPosts,
  setSidebarOpen,
  totalPosts = 0,
  selectedTag = null,
}) {

  function handleTagSelect(data) {
    { setSidebarOpen && setSidebarOpen(false) }
    filterPosts(data);
  }

  return (
    <div className="px-6 py-6">
      {tags.map((tag) => {
        const isSelected = tag.id === selectedTag?.id;
        const hasCount = tag.attributes.hasOwnProperty("posts");

        return (
          <button
            onClick={() => handleTagSelect(tag)}
            key={tag.id}
            className="indicator mr-5 mb-5"
          >
            {indicator && hasCount && (
              <span className="indicator-item badge  badge-sm badge-secondary">
                {tag.attributes.posts.data.length}
              </span>
            )}
            <span
              className={`badge badge-lg ${
                isSelected ? "badge bg-secondary text-neutral" : "badge-outline"
              }`}
            >
              {tag.attributes.name}
            </span>
          </button>
        );
      })}

      <button
        onClick={() => handleTagSelect(null)}
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
            selectedTag === null ? "badge bg-primary text-neutral" : "badge-outline"
          }`}
        >
          All
        </div>
      </button>
    </div>
  );
}
