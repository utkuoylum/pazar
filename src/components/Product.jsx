import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Product() {
  const [details, setDetails] = useState({});
  const location = useLocation();

  useEffect(() => {
    setDetails(location.state.item);
  }, []);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-10 flex gap-10">
        <div className="w-2/5 relative ">
          <img
            src={details.image}
            alt="product image"
            className="w-full h-[550px] object-cover rounded-xl"
          />
          <div className="absolute top-4 right-0">
            {details.isNew && (
              <p className="bg-black text-white font-semibold font-titleFont px-8 py-2">
                sale
              </p>
            )}
          </div>
        </div>
                <div className="w-3/5 flex flex-col justify-center gap-12">
                    <div>
                        <h2 className="text-4xl font-semibold">{details.title}</h2>
                        <div className="flex items-center gap-4 mt-3">
                        <p className="line-through text-gray-500">{details.isNew && `$${details.oldPrice}`}</p>
              <p className="font-semibold text-xl">${details.price}</p>
                        </div>
                    </div>
                    <div>
                    <i className='bx bxs-star'></i>
                    </div>
                </div>
      </div>
    </div>
  );
}
