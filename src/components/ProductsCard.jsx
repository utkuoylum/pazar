import { redirect, useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function ProductsCard({ product }) {
    const navigate = useNavigate()
    const _id = product.title.toLowerCase().split(" ").join("")

    

  return (
    <div className="group">
      <div className="w-full h-96 cursor-pointer overflow-hidden relative" onClick={()=> {
        navigate(`/product/${_id}`, {state: {
            item: product,
        }})}}>
        <img
          src={product.image}
          alt="product image"
          className="w-full h-full object-cover group-hover:scale-110 duration-500"
        />
         <div className="absolute top-4 right-0">
            {product.isNew && (
                <p className="bg-black text-white font-semibold font-titleFont px-6 py-1">sale</p>
            )}
        </div>
      </div>
      <div className="w-full border-[1px] px-2 py-4 h-[5rem] ">
        <div className="flex justify-between items-center h-full">
          <div className="">
            <h2 className="font-titleFont text-base font-bold ">
              {product.title}
            </h2>
            <p>{product.category}</p>
          </div>
          <div className="flex gap-2 h-full relative overflow-hidden ">
            <div className="text-sm w-28 flex justify-end gap-2 transform group-hover:translate-x-24 transition-transform duration-500">
              <p className="line-through text-gray-500">{product.isNew && `$${product.oldPrice}`}</p>
              <p className="font-semibold">${product.price}</p>
            </div>
            <p
              className="absolute z-20 w-[100px] text-gray-500 hover:text-gray-900 flex items-center justify-center gap-1 top-0 right-0
              transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500
    "
            >
              add to cart
            </p>
          </div>
        </div>
       
      </div>
    </div>
  );
}
