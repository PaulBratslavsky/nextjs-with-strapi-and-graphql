import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function PostsNav({ current, postItems, setSidebarOpen }) {
  const router = useRouter();
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
      <ul className="menu bg-base-100">
        {postItems.map((post) => {
          
          const selected = current === post.attributes.slug;

          return (
            <li
              key={post.id}
              className={selected ? "bordered" : ""}
            >
              <button onClick={() => {
                router.push(`/posts/${post.attributes.slug}`)
                setSidebarOpen(prevState => prevState === true && false)
              }}
              className={selected ? "rounded-r-md mb-2 text-primary font-bold" : "rounded-md mb-2"}>
                <a className="text-left	">{post.attributes.title}</a>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
