import "boxicons";
import { useEffect } from "react";
import { useState } from "react";

export default function Banner() {
  const [slide, setSlide] = useState(0);

  const data = [
    "/assets/slider/1.jpeg",
    "/assets/slider/2.jpeg",
    "/assets/slider/3.jpeg",
    "/assets/slider/4.jpeg",
    "/assets/slider/5.jpeg"
  ];

  const handleSlideIncrement = () => {
    setSlide(slide === data.length - 1 ? 0 : (curSlide) => curSlide + 1);
  };
  const handleSlideDecrement = () => {
    setSlide(slide === 0 ? data.length - 1 : (curSlide) => curSlide - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleSlideIncrement();
    }, 9000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="w-screen h-sliderHeight relative">
        <div
          className="h-full w-[500vw] flex transition-transform duration-1000"
          style={{ transform: `translateX(-${slide * 100}vw` }}
        >
          {data.map((item) => (
            <img
              src={item}
              alt="slider image"
              className="w-screen h-full object-cover"
              loading="priority"
              key={data.indexOf(item)}
            />
          ))}
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-12 bottom-20 text-[4rem] text-white">
          <div className="arrows" onClick={handleSlideDecrement}>
            <i className="bx bx-left-arrow-circle"></i>
          </div>
          <div className="arrows" onClick={handleSlideIncrement}>
            <i className="bx bx-right-arrow-circle"></i>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
