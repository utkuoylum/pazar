import "boxicons";
import { useEffect } from "react";
import { useState } from "react";

export default function Banner() {
const [slide,setSlide] = useState(0)

  const data = [
    "/assets/slider/1.jpeg",
    "/assets/slider/2.jpeg",
    "/assets/slider/3.jpeg",
    "/assets/slider/4.jpeg",
  ];

  const handleSlideIncrement = () => {
    if (slide === data.length -1) {
      setSlide(0)
    } else {
      setSlide(curSlide => curSlide + 1)
    }
  }
const handleSlideDecrement = () => {
  if (slide === 0) {
    setSlide(data.length - 1)
  } else {
    setSlide(curSlide => curSlide - 1)
  }
 }

  useEffect(() => {
    const interval = setInterval(()=> {handleSlideIncrement()}, 8000)

    return () => {
      clearInterval(interval)
    }
  })




  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="w-screen h-sliderHeight relative">
        <div className="h-full w-[400vw] flex">
          {/* {data.map((item) => (
            <img
              src={item}
              alt="slider image"
              className="w-screen h-full object-cover"
              loading="priority"
              key={data.indexOf(item)}
            />
          ))} */}
          <img src={data[slide]} alt="" 
              className="w-screen h-full object-cover"
              loading="priority"
              key={slide}/>
        </div>
        <div className="">
          <div className="arrow-styles right-[30rem]" onClick={handleSlideIncrement}>
            {" "}
            <i className="bx bx-right-arrow-circle"></i>
          </div>
          <div className="arrow-styles left-[30rem]" onClick={handleSlideDecrement}>
            <i className="bx bx-left-arrow-circle"></i>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
