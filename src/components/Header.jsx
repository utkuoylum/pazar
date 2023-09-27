

export default function Header() {
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <div className="logo flex place-items-center gap-2">
          <img src="/assets/logo2.png" alt="logo" className="w-[4rem]"/>
          <p className="text-3xl font-bold tracking-wider">
            PAZAR
          </p>
        </div>
        <div className="flex gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">Pages</li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">Home</li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">Shop</li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">Element</li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">Blog</li>
          </ul>
          <div className="relative">
            <img src="/assets/shopping-cart.png" alt="" className="w-10"/>
            <span className="absolute w-6 top-4 left-2 text-sm flex items-center justify-center font-semibold text-white">0</span>
          </div>
          <img src="/assets/avatar.png" alt="avatar user" className="w-11 rounded-full"/>
        </div>

      </div>
    </div>
  );
}
