import React from "react";
import Image from "next/image";

export default function Photo({ data }) {

  const { title, description, alt, height = 500, width = 1000, image } = data;


  return (
    <div className="my-6">
      {title && <h2 className="text-xl">{title}</h2>}

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

      {description && (
        <div className="my-2">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
}
