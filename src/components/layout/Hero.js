import Link from "next/link";
import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
  return (
    <section className="hero flex flex-col lg:flex-row items-center justify-between mt-4 px-6 lg:px-20 py-16 bg-gradient-to-r from-yellow-100 to-orange-100">
      <div className="max-w-lg text-center lg:text-left">
        <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
          Everything<br /> is better<br /> with a <span className="text-primary">Pizza</span>
        </h1>
        <p className="my-6 text-gray-700 text-lg">
          Pizza is the missing piece that makes every day complete, a simple yet delicious joy in life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 text-lg mt-6">
          <button className="bg-primary hover:bg-red-700 transition-all uppercase flex items-center gap-3 text-white px-8 py-3 rounded-full shadow-lg font-semibold">
            Order Now
            <Right />
          </button>
          <button className="flex items-center gap-3 py-3 px-6 text-gray-700 border-2 border-gray-700 rounded-full font-semibold hover:bg-gray-700 hover:text-white transition-all">
            Learn More
            <Right />
          </button>
        </div>
      </div>
      <div className="relative w-full max-w-lg mt-10 lg:mt-0">
        <Image
          src="/pizza.png"
          width={500}
          height={500}
          objectFit="contain"
          alt="pizza"
          className="drop-shadow-lg"
        />
      </div>
    </section>
  );
}
