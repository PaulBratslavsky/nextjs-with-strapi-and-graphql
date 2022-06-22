import Image from "next/image";
import Tags from "../components/Tags";

export function displayCardHorizontal(data) {
    return data.map((post) => {
      const { url } = post.attributes.featuredImage.data.attributes;
      return (
        <div
          key={post.id}
          className="card lg:card-side bg-base-100 shadow-xl mb-6"
        >
          <figure>
            <Image
              src={url}
              alt={post.attributes.title}
              width={300}
              height={300}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{post.attributes.title}</h2>

            <Tags tags={post.attributes.tags.data} selected={selectedTag} />

            <p>{post.attributes.description}</p>

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