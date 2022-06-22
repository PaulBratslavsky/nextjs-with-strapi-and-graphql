import React from "react";
import Image from "next/image";

export default function Photo({ data }) {

  const { title, showTitle = false, description, showDescription = false, alt, height = 500, width = 1000, image } = data;


  return (
    <div className="my-6">
      {title && showTitle && <h2 className="text-2xl mb-3">Title: {title}</h2>}

      {image.data !== null  && (
        <Image
          className="rounded-xl"
          src={data.image.data.attributes.url}
          alt={alt || "No alt text was provided"}
          layout="responsive"
          height={height}
          width={width}
        />
      )}

      {description  && showDescription && (
        <div className="my-2">
          <p className="text-2xl">Description: {description}</p>
        </div>
      )}
    </div>
  );
}
