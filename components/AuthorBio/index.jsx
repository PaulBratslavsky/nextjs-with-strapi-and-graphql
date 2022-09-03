import React from "react";
import Image from "next/image";

export default function AuthorBio({ name, bio, avatar, postCount }) {
  return (
    <div className="card w-auto bg-base-200">
      <figure>
        <div className="avatar">
          <div className="w-48 mask mask-hexagon m-6">
            <Image src={avatar} width={400} height={400} alt={name} />
          </div>
          
        </div>
      </figure>
      <div className="card-body pt-0 pb-2">
      
        <h2 className="card-title">
          {name} | Articles
          <div className="badge badge-secondary">{postCount}</div>
        </h2>
        <div className="flex">
          <a
            href="https://twitter.com/codingthirty"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              className="fill-current text-info"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a
            href="https://www.youtube.com/c/codingafterthirty"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              className="fill-current text-red-600 ml-2"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/paulbratslavsky"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28px"
              height="28px"
              viewBox="0 0 22 22"
              className="fill-current mt-[3px] text-warning ml-3"
            >
              <path d="M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM6 13h-2v-7h2v7zM5 5c-0.553 0-1-0.447-1-1s0.447-1 1-1c0.553 0 1 0.447 1 1s-0.447 1-1 1zM13 13h-2v-4c0-0.553-0.447-1-1-1s-1 0.447-1 1v4h-2v-7h2v1.241c0.412-0.566 1.044-1.241 1.75-1.241 1.244 0 2.25 1.119 2.25 2.5v4.5z"></path>
            </svg>
          </a>
        </div>
        <p>{bio}</p>
      </div>
    </div>
  );
}
