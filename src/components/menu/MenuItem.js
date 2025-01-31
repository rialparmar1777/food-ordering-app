import Link from "next/link";
import Image from "next/image";

export default function MenuItem() {
    return(
        <div className="bg-gray-300 p-4 rounded-lg text-center group hover:bg-white hover:shadow-lg hover:shadow-black-50 transition-all transform hover:-translate-y-2">
            <div className="text-center">
                <img src="/pizza.png" alt="pizza" className="w-full h-48 object-cover rounded-t-lg"/>
            </div>
            <h4 className="font-semibold text-2xl my-3 text-primary group-hover:text-secondary transition-colors">Pepperoni</h4>
            <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <button className="mt-4 bg-primary text-white rounded-full px-8 py-2 hover:bg-secondary transition-colors">
                Add to Cart $12
            </button>
        </div>
    );
}