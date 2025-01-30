import Link from "next/link";
import Image from "next/image";

export default function HomeMenu() {
  return (
    <section className="relative">
      <div className="flex justify-between items-center">
        <div className="h-48 w-48 relative">
          <Image src={'/sallad1.png'} layout={'fill'} objectFit={'contain'} alt={'sallad'} />
        </div>
        <div className="text-center">
          <h3 className="uppercase text-gray-700 font-semibold leading-4">Check Out</h3>
          <h2 className="text-primary font-bold text-4xl italic">Menu</h2>
        </div>
        <div className="h-48 w-48 relative">
          <Image src={'/sallad2.png'} layout={'fill'} objectFit={'contain'} alt={'sallad'} />
        </div>
      </div>
      
    </section>
  );
}