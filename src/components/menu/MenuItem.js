import Link from "next/link";
import Image from "next/image";

export default function MenuItem() {
    return(
        <div className="bg-white p-5 rounded-xl text-center group hover:shadow-xl hover:shadow-black/20 transition-all transform hover:-translate-y-2 border border-gray-200">
            <div className="overflow-hidden rounded-t-xl">
                <img src="/pizza.png" alt="pizza" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"/>
            </div>
            <h4 className="font-bold text-2xl my-4 text-primary group-hover:text-red-600 transition-colors">Pepperoni Pizza</h4>
            <p className="text-gray-600 text-base leading-relaxed">
                A classic favorite loaded with spicy pepperoni and gooey cheese, baked to perfection.
            </p>
            <button className="mt-5 bg-primary text-white rounded-full px-8 py-3 font-semibold hover:bg-red-600 transition-all shadow-md hover:shadow-lg">
                Add to Cart - $12
            </button>
        </div>
    );
}