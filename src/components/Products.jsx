import ProductsCard from "./ProductsCard";

export default function Products({products}) {


  return (
    <div className="py-10">
      <div className="flex flex-col gap-4 items-center h-[10rem]">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
          Let's shop all day
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="max-w-[700px] text-gray-600 text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Reprehenderit, dicta! Numquam, quam dolorem et ea iusto aliquid, ipsa
          modi rerum quas repudiandae sapiente ad non quidem sed molestias quo
          ipsum!
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
        {products.map(item=> (
            <ProductsCard product={item} key={item._id}/>
        ))}
      </div>
    </div>
  );
}
