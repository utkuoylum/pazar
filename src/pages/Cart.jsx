import { useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import CartItem from "../components/CartItem"


export default function Cart() {
    const userInfo = useSelector(state=>state.pazar.userInfo)
    const productData = useSelector((state)=> state.pazar.productData)
    const [payNow, setPayNow] = useState(false)
    const navigate = useNavigate()


function handleCheckout() {
    if(userInfo) {
        setPayNow(true)
    } else {
        toast.error("Please sign in to checkout")
        setTimeout(()=> {
            navigate("/login")
        },2000)
    }
    
}


  return (
    <div>
        <img src="/assets/cartbanner.jpg" alt="sun glasses" className="w-full h-60 object-cover" />
       <div className="max-w-screen-xl mx-auto py-20 flex">
        <CartItem />
    
        <div className="w-1/3 bg-[#fafafa] py-6 px-4">
            <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
                <h2 className="text-2xl font-medium">cart totals</h2>
                <p className="flex items-center gap-4 text-base">
                    Subtotal:{" "}
                    <span className="font-titleFont font-bold text-lg">
                    ${productData.reduce((a,b)=>a+(b.price * b.quantity),0).toFixed(2)}
                    </span>
                </p>
                <p className="flex items-start gap-4 text-base">
                    Shipping:{" "}
                    <span >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </span>
                </p>
            </div>
            <p className="flex justify-between font-titleFont font-semibold mt-6">Total <span className="text-xl font-bold">${productData.reduce((a,b)=>a+(b.price * b.quantity),0).toFixed(2)}</span></p>
            <button onClick={handleCheckout} className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300 active:bg-black rounded-md">proceed to checkout</button>
        </div>
       </div>
    </div>
  )
}
