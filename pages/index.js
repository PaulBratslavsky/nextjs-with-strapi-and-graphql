import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";

import { useRouter } from "next/router";

import { gql } from "@apollo/client";
import client from "../graphql-client";
import Tags from "../components/Tags";
import TagsSelect from "../components/TagsSelect";
import RandomPost from "../components/RandomPost";
import AuthorBio from "../components/AuthorBio";
import Slider from "../components/Slider";

export default function Home({ posts, tags }) {
  const router = useRouter();

  const [selectedTag, setSelectedTag] = useState(null);
  const [postsData, setPostsData] = useState(posts);

  const { data } = postsData;

  function filterPosts(tag) {
    setSelectedTag(tag);

    if (tag !== null) {
      const filtered = posts.data.filter((post) => {
        return post.attributes.tags.data.some((t) => t.id === tag?.id);
      });

      setPostsData({ data: filtered });
    } else setPostsData(posts);
  }

  function displayCardVertical(data) {
    return data.map((post) => {
      const { url } = post.attributes.featuredImage.data.attributes;
      return (
        <div key={post.id} className="card w-auto bg-base-100 shadow-xl">
          <figure>
            <Image
              src={url}
              alt={post.attributes.title}
              width={400}
              height={225}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{post.attributes.title}</h2>
            <p>{post.attributes.description}</p>

            <Tags tags={post.attributes.tags.data} selected={selectedTag} />

            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={() => router.push("/posts/" + post.attributes.slug)}
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-7 gap-3">
        <div className="flex flex-col justify-between height-with-menu col-span-2 overflow-scroll my-6">
          <div>
            <AuthorBio
              avatar={"https://api.lorem.space/image/face?hash=55350"}
              name={"Paul Brats"}
              bio={"I'm a software developer"}
            />
            <TagsSelect
              tags={tags.data}
              indicator
              onClick={filterPosts}
              totalPosts={posts.data.length}
              selectedTag={selectedTag}
            />
          </div>
          <RandomPost />
        </div>

        <main className="height-with-menu col-span-5 overflow-scroll my-6">

          <Slider data={posts} />
          
          <div className="grid grid-cols-3 gap-4">
            {displayCardVertical(data)}
          </div>
        </main>
      </div>
    </div>
  );
}

function flattenObj(data) {
  const isObject = (data) =>
      Object.prototype.toString.call(data) === "[object Object]";
  const isArray = (data) =>
      Object.prototype.toString.call(data) === "[object Array]";
  
  const flatten = (data) => {
      if (!data.attributes) return data;
  
      return {
      id: data.id,
      ...data.attributes,
      };
  };
  
  if (isArray(data)) {
      return data.map((item) => flattenObj(item));
  }
  
  if (isObject(data)) {
      if (isArray(data.data)) {
      data = [...data.data];
      } else if (isObject(data.data)) {
      data = flatten({ ...data.data });
      } else if (data.data === null) {
      data = null;
      } else {
      data = flatten(data);
      }
  
      for (const key in data) {
         data[key] = flattenObj(data[key]);
      }
  
      return data;
  }
  
  return data;
  };

export async function getStaticProps() {
  const { data: postsData } = await client.query({
    query: gql`
      query {
        posts {
          data {
            id
            attributes {
              title
              slug
              description

              tags {
                data {
                  id
                  attributes {
                    name
                  }
                }
              }

              featuredImage {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
          meta {
            pagination {
              total
            }
          }
        }
      }
    `,
  });

  const { data: tagsData } = await client.query({
    query: gql`
      query {
        tags {
          data {
            id
            attributes {
              name
              posts {
                data {
                  id
                }
              }
            }
          }
        }
      }
    `,
  });


  return {
    props: {
      posts: postsData.posts,
      tags: tagsData.tags,
    },
  };
}
