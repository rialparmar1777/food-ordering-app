import Image from "next/image";

export default function HomeMenu() {
  return (
    <section className="">
      <div className="absolute left-0 right-0 w-full justify-start">
        <div className="absolute left-0 -top-[70px] text-left -z-10">
          <Image src={'/sallad1.png'} width={109} height={189}  alt={'sallad'} />
        </div>
        <div className="absolute -top-[100px] right-0 -z-10">
          <Image src={'/sallad2.png'} width={107} height={195} alt={'sallad'} />
        </div>
      </div>

      <div className="text-center">
        <h3 className="uppercase text-gray-600 font-semibold left-4">
          Check Out
        </h3>
        <h2 className="text-primary font-bold text-4xl italic">
          Menu
        </h2>
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-400 p-4 rounded-lg text-center">
          <img src="/pizza.png" alt="pizza"/>
          <h4 className="font-semibold text-xl my-3">Pepperoni</h4>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisction elit
          </p>
          <button className=" mt-4 bg-primary text-white rounded-full px-4 py-2">
            Add to Cart $12
          </button>
        </div>

      </div>
      
    </section>
  );
}