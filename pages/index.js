import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";

import { useRouter } from "next/router";

import { gql } from "@apollo/client";
import client from "../graphql-client";
import Tags from "../components/Tags";
import Slider from "../components/Slider";
import Layout from "../components/Layout";
import Header from "../components/Header";

import MainPageSidebar from "../components/MainPageSidebar";

export default function Home({ posts, tags, bio }) {
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
        <div key={post.id} className="card w-auto bg-base-100 shadow-xl mb-6">
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

      <Layout
        header={(setSidebarOpen) => <Header setSidebarOpen={setSidebarOpen} />}
        sidebar={(setSidebarOpen) => (
          
          <MainPageSidebar
            posts={posts}
            tags={tags}
            bio={bio}
            filterPosts={filterPosts}
            selectedTag={selectedTag}
            setSidebarOpen={setSidebarOpen}
          />
        )}
      >
        <div className="my-6">
          <Slider data={posts} />
          <div className="grid mx-3 sm:grid-cols-2 sm:gap-2 md:grid-cols-1 md:gap-3 md:mx-0 lg:grid-cols-3 xl:grid-cols-4 lg:gap-4">
            {displayCardVertical(data)}
          </div>
        </div>
      </Layout>
    </div>
  );
}

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

  // TODO: Filter postCount to only show PUBLISHED posts
  const { data: authorsData } = await client.query({
    query: gql`
      query {
        authorsBio(id: 1) {
          data {
            id
            firstName
            lastName
            bio
            postCount

            avatar {
              id
              attributes {
                url
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
      bio: authorsData.authorsBio
    },
  };
}
