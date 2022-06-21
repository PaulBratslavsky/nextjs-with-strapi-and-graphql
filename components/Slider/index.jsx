import React from 'react'

export default function Slider({ data }) {
  return (
    <div className="carousel w-full mb-6 rounded-2xl">
    <div id="slide1" className="carousel-item relative w-full">
      <img
        src="https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2"
        className="w-full"
      />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide4" className="btn btn-circle">
          ❮
        </a>
        <a href="#slide2" className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  </div>
  )
}
