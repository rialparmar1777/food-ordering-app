import Link from "next/link";
import Image from "next/image";

export default function MenuItem() {
    return(
        <div className="bg-gray-400 p-4 rounded-lg text-center">
          <img src="/pizza.png" alt="pizza"/>
          <h4 className="font-semibold text-xl my-3">Pepperoni</h4>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisction elit
          </p>
          <button className=" mt-4 bg-primary text-white rounded-full px-8 py-2">
            Add to Cart $12
          </button>
        </div>
    );
}