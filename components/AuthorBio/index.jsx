import React from "react";

export default function AuthorBio({name, bio, avatar}) {
  return (
    <div className="card w-auto bg-base-100">
      <figure>
        <div className="avatar">
          <div className="w-64 mask mask-hexagon">
            <img src={avatar} /> 
          </div>
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">
         {name}
          <div className="badge badge-secondary">hi</div>
        </h2>
        <p>{bio}</p>
      </div>
    </div>
  );
}
