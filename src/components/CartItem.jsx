import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { decrementQuantity, deleteItem, incrementQuantity } from "../redux/pazarSlice";

export default function CartItem() {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.pazar.productData);
  return (
    <div className="w-2/3 pr-10">
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
                className="w-32 h-32 object-cover"
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
                  >
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
