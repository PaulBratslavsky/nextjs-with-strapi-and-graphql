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

export function flattenObj(data) {
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
}

export function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};