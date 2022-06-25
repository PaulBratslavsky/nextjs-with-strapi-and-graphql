import React, { useState } from "react";
import { useRouter } from "next/router";
import TagsSelect from "../TagsSelect";

export default function PostsNav({ current, postItems, setSidebarOpen, tags }) {
  const router = useRouter();

  const [selectedTag, setSelectedTag] = useState(null);
  const [postsData, setPostsData] = useState(postItems);


  function filterPosts(tag) {
    // TODO: Refactor this into a function that takes in a tag and returns a filtered list of posts that can be reused
    setSelectedTag(tag);

    if (tag !== null) {
      setPostsData([])
     
      const filtered = postItems.filter((post) => {
        return post.attributes.tags.data.some((t) => t.id === tag?.id);
      });

      setPostsData(filtered);
    } else setPostsData(postItems);
  }

  return (
    <div className="my-6 mx-3">
      <div>
        <button
          className="btn btn-primary w-full mb-3"
          onClick={() => router.push("/")}
        >
          Go Back
        </button>
      </div>

      <TagsSelect
        tags={tags.data}
        indicator
        filterPosts={filterPosts}
        totalPosts={postItems.length}
        selectedTag={selectedTag}
      />
      
      <ul className="menu bg-base-100">
        {postsData.map((post) => {
          const selected = current === post.attributes.slug;

          return (
            <li key={post.id} className={selected ? "bordered" : ""}>
              <button
                onClick={() => {
                  router.push(`/posts/${post.attributes.slug}`);
                  setSidebarOpen((prevState) => prevState === true && false);
                }}
                className={
                  selected
                    ? "rounded-r-md mb-2 text-primary font-bold"
                    : "rounded-md mb-2"
                }
              >
                <a className="text-left	">{post.attributes.title}</a>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
