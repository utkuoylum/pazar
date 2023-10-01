import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { addToCart } from "../redux/pazarSlice";

export default function Product() {
    const dispatch = useDispatch()
  const [details, setDetails] = useState({});
  const [number, setNumber] = useState(1);
  const location = useLocation();

  useEffect(() => {
    setDetails(location.state.item);
  }, []);

  const handleClickDecrement = () => {
    number > 0 && setNumber(number - 1);
  };
  const handleClickIncrement = () => {
    setNumber(number + 1);
  };

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
              <p className="line-through text-gray-500">
                {details.isNew && `$${details.oldPrice}`}
              </p>
              <p className="font-semibold text-xl">${details.price}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-base">
            <div className="flex">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
            </div>
            <p className="text-xs text-gray-500">(1 customer review)</p>
          </div>
          <p className="text-base text-gray-500 -mt-3">{details.description}</p>
          <div className="flex gap-4">
            <div className="flex items-center w-56 justify-between border-black border-[1px] p-3 rounded-md">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
               {number > 0 && <button
                  className=" border-black border-[1px] px-3 hover:bg-gray-700 hover:text-white duration-300 active:bg-black"
                  onClick={handleClickDecrement}
                >
                  -
                </button>}
                <span>{number}</span>
                <button
                  className=" border-black border-[1px] px-3 hover:bg-gray-700 hover:text-white duration-300 active:bg-black"
                  onClick={handleClickIncrement}
                >
                  +
                </button>
              </div>
            </div>
            <button onClick={()=> dispatch( addToCart({
                _id: details._id,
                title: details.title,
                image: details.image,
                price: details.price,
                quantity: number,
                description: details.description,
            })) & toast.success(`${number} ${details.title}${number === 1 ? " is" : "s are"} added`)} className="bg-black text-white rounded-md py-2 px-5">
              add to cart
            </button>
          </div>
          <p className="text-base text-gray-600">
            Category:
            <span className="capitalize font-medium"> {details.category}</span>
          </p>
        </div>
      </div>
      <ToastContainer
      position="top-left"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      />
    </div>
  );
}
