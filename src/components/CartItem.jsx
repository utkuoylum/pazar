import { useSelector } from "react-redux"


export default function CartItem() {
    const productData = useSelector((state)=> state.pazar.productData)
  return (
    <div className="w-2/3 pr-10">
        <div className="w-full">
            <h2 className="font-titleFont text-2xl">shopping cart</h2>
        </div>
        <div>
            {
                productData.map((item)=> (
                    <div key={item._id} className="flex items-center justify-between gap-6 mt-6" >
                        <div className="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300 flex items-center gap-2">
                        <i className='bx bx-x'></i>
                        <img src={item.image} alt="productimg" className="w-32 h-32 object-cover"/>
                        </div>
                        <h2 className="w-52">{item.title}</h2>
                        <p className="w-10">${item.price}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
