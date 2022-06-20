import React from "react";
import { useRouter } from "next/router";

import { gql } from "@apollo/client";
import client from "../../graphql-client";

import Video from "../../components/Video";
import Code from "../../components/Code";
import Markdown from "../../components/Markdown";

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

export default function Posts({ post }) {
  const router = useRouter();

  const { title, Components } = post.data.attributes;
  const { slug } = router.query;

  return (
    <div className="card-body">
      <h1>{title}</h1>
      <span>{slug}</span>
      <h2 className="card-title">{"test"}</h2>

      <div>{selelctCoponent(Components)}</div>

      <div className="card-actions justify-end">
        <button className="btn btn-primary" onClick={() => router.push("/")}>
          Back
        </button>
      </div>
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
  const { data } = await client.query({
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

  return {
    props: {
      post: data.post,
    },
  };
}
