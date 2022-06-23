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
          return (
            <li
              key={post.id}
              className={current === post.attributes.slug ? "bordered" : ""}
            >
              <button onClick={() => {
                router.push(`/posts/${post.attributes.slug}`)
                setSidebarOpen(prevState => prevState === true && false)
              }}>
                <a className="rounded-r-md mb-2">{post.attributes.title}</a>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
