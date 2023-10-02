import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { decrementQuantity, deleteItem, incrementQuantity, resetCart } from "../redux/pazarSlice";
import {Link} from "react-router-dom"

export default function CartItem() {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.pazar.productData);
  return (
    <div className="w-2/3 pr-10 text-center">
      <div className="w-full">
        <h2 className="font-titleFont text-2xl">shopping cart</h2>
      </div>

      <div>
        {productData.map((item) => (
          <div
            key={item._id}
            className="flex items-center justify-between gap-6 mt-6"
          >
            <div className="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300 flex items-center gap-2">
              <i
                className="bx bx-x"
                onClick={() =>
                  dispatch(deleteItem(item._id)) &
                  toast.error(`${item.title} is removed`)
                }
              ></i>
              <img
                src={item.image}
                alt="productimg"
                className="w-32 h-32 object-cover rounded-md"
              />
            </div>
            <h2 className="w-52">{item.title}</h2>
            <p className="w-10">${item.price}</p>
            <div className="flex items-center w-56 justify-between border-black border-[1px] p-3 rounded-md">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                {item.quantity > 0 && (
                  <button
                    className=" border-black border-[1px] px-3 hover:bg-gray-700 hover:text-white duration-300 active:bg-black"
                    onClick={() =>
                      dispatch(
                        decrementQuantity({
                          _id: item._id,
                          title: item.title,
                          image: item.image,
                          price: item.price,
                          quantity: item.quantity,
                          description: item.description,
                        })
                      )&toast.error(`1 ${item.title} is removed`)
                    }
                  disabled={item.quantity === 1}>
                    -
                  </button>
                )}
                <span>{item.quantity}</span>
                <button  onClick={() =>
                      dispatch(
                        incrementQuantity({
                          _id: item._id,
                          title: item.title,
                          image: item.image,
                          price: item.price,
                          quantity: item.quantity,
                          description: item.description,
                        })
                      )& toast.success(`1 ${item.title} is added`)
                    } className=" border-black border-[1px] px-3 hover:bg-gray-700 hover:text-white duration-300 active:bg-black">
                  +
                </button>
              </div>
            </div>
            <p className="w-14">${item.quantity * item.price}</p>
          </div>
        ))}
      </div>
     {productData.length > 0 ? <button onClick={()=> dispatch(
        resetCart()
      )&toast.error("Cart is now empty")} className="bg-red-500 py-2 px-4 mt-4 rounded-md text-white hover:bg-red-700 active:bg-red-500">Reset Cart</button> : <div><p className="my-4 text-red-400 font-semibold">Your cart is empty. Add some products to the cart</p><Link className="font-semibold cursor-pointer" to="/">Go back home</Link></div>}
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
