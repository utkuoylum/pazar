import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


export default function Header() {
  const productData = useSelector((state) => state.pazar.productData);
  console.log(productData);
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div className="logo flex place-items-center gap-2">
            <img src="/assets/logo2.png" alt="logo" className="w-[2.4rem]" />
            <p className="text-3xl font-bold tracking-wider">PAZAR</p>
          </div>
        </Link>
        <div className="flex gap-8">
          <ul className="flex items-center gap-8">
            <li className="menuItems">Home</li>
            <li className="menuItems">Pages</li>
            <li className="menuItems">Shop</li>
            <li className="menuItems">Element</li>
            <li className="menuItems">Blog</li>
          </ul>
          <div className="relative">
            <img src="/assets/shopping-cart.png" alt="" className="w-10" />
            <span className="absolute w-6 top-4 left-2 text-sm flex items-center justify-center font-semibold text-white">
              {productData.reduce((a, b) => a + b.quantity, 0)}
            </span>
          </div>
          <img
            src="/assets/avatar.png"
            alt="avatar user"
            className="w-11 rounded-full"
          />
        </div>
      </div>
      
    </div>
  );
}
