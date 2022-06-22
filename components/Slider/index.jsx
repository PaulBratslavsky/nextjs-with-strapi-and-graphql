import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Slider({ data }) {
  const [selected, setSelected] = useState(0);

  function renderSlider(data, length) {
    const { title, featuredImage, slug } = data.attributes;
    const { url } = featuredImage.data.attributes;

    function moveBack(e) {
      e.stopPropagation();
      if (selected !== 0) setSelected((prevState) => prevState - 1);
      else setSelected(length - 1);
    }

    function moveForward(e) {
      e.stopPropagation();
      if (selected === length - 1) setSelected(0);
      else setSelected((prevState) => prevState + 1);
    }

    return (
      <Link href={`/posts/${slug}`}>
        <div
          id={data.id}
          className="carousel-item relative w-full hover:cursor-pointer"
        >
          <div className={"image-container"}>
            {/* <Image src={url} layout="fill" className={'image'} alt={title}/> */}
          </div>
          <div className="image-wrapper">
            <Image
              src={url}
              alt={title}
              layout="intrinsic"
              width={800}
              height={500}
            />
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <button
              className="btn btn-circle bg-stone-800 hover:bg-primary"
              onClick={moveBack}
            >
              ❮
            </button>

            <div className="flex justify-center items-center bg-primary px-6 rounded-md">
              <h2 className="text-2xl text-slate-100">{title}</h2>
            </div>

            <button
              className="btn btn-circle bg-stone-800 hover:bg-primary"
              onClick={moveForward}
            >
              ❯
            </button>
          </div>
        </div>
      </Link>
    );
  }
  return (
    <div className="relative">
      <div className="carousel w-full mb-6 rounded-2xl">
        {renderSlider(data.data[selected], data.data.length)}
      </div>
    </div>
  );
}
