import React from "react";
import Link from "next/link";
import client from "../../graphql-client";

import { gql, useQuery } from "@apollo/client";
import Image from "next/image";

const GET_RANDOM_POST = gql`
  query {
    getRandomPost {
      data {
        id
        attributes {
          title
          description
          slug
          featuredImage {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export default function RandomPost() {
  const { loading, error, data } = useQuery(GET_RANDOM_POST);

  async function handleGetRandomPost() {
    await client.refetchQueries({
      include: [GET_RANDOM_POST],
    });
  }

  console.log(data, "data");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (!data) return <h1>no data</h1>;

  const { title, description, featuredImage, slug } =
    data.getRandomPost.data.attributes;

  return (
    <div className="mx-6">
      <Link href={"/posts/" + slug}>
        <a className="card w-auto bg-base-100 shadow-xl image-full">
          <figure>
            <Image
              src={featuredImage.data.attributes.url}
              alt={title}
              className="rounded-xl"
              layout="fill"
            />
          </figure>
          <div className="card-body">
            <p>Feeling Lucky? Your Random Post.</p>
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
          </div>
        </a>
      </Link>
      <div className="card w-auto my-3">
        <button className="btn btn-primary" onClick={handleGetRandomPost}>
          Get Random Post
        </button>
      </div>
    </div>
  );
}
