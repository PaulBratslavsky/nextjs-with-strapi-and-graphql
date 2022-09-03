import React from "react";
import Image from "next/image";

export default function AuthorBio({ name, bio, avatar, postCount }) {
  console.log(avatar, "why", postCount);

  return (
    <div className="card w-auto bg-base-200">
      <figure>
        <div className="avatar">
          <div className="w-64 mask mask-hexagon m-6">
            <Image src={avatar} width={400} height={400} alt={name} />
          </div>
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name} | Articles
          <div className="badge badge-secondary">{postCount}</div>
        </h2>
        <p>{bio}</p>
      </div>
    </div>
  );
}
