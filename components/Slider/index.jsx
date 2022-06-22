import React from "react";
import Image from "next/image";

export default function Slider({ data }) {
  console.log(data, "from slider");

  const [selected, setSelected] = React.useState(0);

  function nextSlide() {
    setSelected(data.length + 1);
  }

  function prevSlide() {
    setSelected(data.length - 1);
  }

  function renderSlider({ data }) {
    console.log(data, "from slider");

    return data.map((item, index) => {
      console.log(item, index);
      const { title, description, featuredImage, slug } = item.attributes;
      const { url } = featuredImage.data.attributes;
      return (
        <div key={index} id={item.id} className="carousel-item relative w-full">
          <div className="image-wrapper">
            <Image
              src={url}
              alt={title}
              layout="intrinsic"
                width={1920}
                height={500}
              className="w-full"
            />
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <button onClick={prevSlide} className="btn btn-circle">❮</button>
            <button onClick={nextSlide} className="btn btn-circle">❯</button>
          </div>
        </div>
      );
    });
  }
  return (
    <div className="carousel w-full mb-6 rounded-2xl">{renderSlider(data)}</div>
  );
}
