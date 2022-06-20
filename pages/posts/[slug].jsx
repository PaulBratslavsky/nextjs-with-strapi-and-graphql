import React from "react";
import { useRouter } from "next/router";

import { gql } from "@apollo/client";
import client from "../../graphql-client";

import Video from "../../components/Video";
import Code from "../../components/Code";
import Markdown from "../../components/Markdown";
import PostsNav from "../../components/PostsNav";

function selelctCoponent(components) {
  return components.map((component) => {
    const type = component.__typename;

    switch (type) {
      case "ComponentMyComponentsVideo":
        return <Video data={component} />;

      case "ComponentMyComponentsCode":
        return <Code data={component} />;

      case "ComponentMyComponentsMarkdown":
        return <Markdown data={component} />;

      default:
        return null;
    }
  });
}

export default function Posts({ post, postItems }) {
  const router = useRouter();

  const { Components } = post.post.data.attributes;

  return (
    <div className="h-screen grid grid-cols-5 gap-3">
      <div className="height-with-menu overflow-scroll">
        <PostsNav
          current={router.query.slug}
          postItems={postItems.posts.data}
        />
      </div>

      <main className="height-with-menu col-span-4 overflow-scroll my-6">
        <div className="card-body p-0">
          <div>{selelctCoponent(Components)}</div>
        </div>
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query {
        posts {
          data {
            id
            attributes {
              title
              slug
            }
          }
        }
      }
    `,
  });

  const paths = data.posts.data.map((post) => ({
    params: { slug: post.attributes.slug },
  }));

  return {
    paths: paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { data: post } = await client.query({
    query: gql`
      query {
        post(slug: "${params.slug}") {
   	 data {
      id 
      attributes {
        title
        description

        seo {
          metaTitle
          metaDescription
          keywords
        }
        
        Components {
          ... on ComponentMyComponentsVideo {
            id
            title
            description
            link
            videoID
          }
          
          ... on ComponentMyComponentsCode {
            id
            name
            src
            type
            content
          }

          ... on ComponentMyComponentsMarkdown {
            id
            content
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
  }
      }
    `,
  });

  const { data: postItems } = await client.query({
    query: gql`
      query {
        posts {
          data {
            id
            attributes {
              title
              slug
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      post: post,
      postItems: postItems,
    },
  };
}
