import React from "react";
import Image from "next/image";

export default function Photo({ data }) {
  console.log(data);
  const { description, alt, height = 500, width = 1000 } = data;

  const { url } = data.image.data.attributes;

  console.log(description, url, alt, height, width);

  return (
    <div className="my-6">
        <Image
        className="rounded-xl"
          src={url}
          alt={alt || "No alt text was provided"}
          layout="responsive"
          height={height}
          width={width}
        />
      <div className="my-2">
        <p>{description}</p>
      </div>
    </div>
  );
}
