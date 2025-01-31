import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <HomeMenu />
    <section className="text-center my-16">
      <SectionHeaders
      subHeader={'Our Story'}
      mainHeader={'About Us'}
      />
      <div className="text-gray-500 max-w-md mx-auto mt-5 flex-col gap-4">
      <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni minima odit recusandae. Illum ipsa non repudiandae? Eum ipsam iste quos suscipit tempora? Aperiam esse fugiat inventore laboriosam officiis quam rem!
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni minima odit recusandae. Illum ipsa non repudiandae? Eum ipsam iste quos suscipit tempora? Aperiam esse fugiat inventore laboriosam officiis quam rem!
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni minima odit recusandae. Illum ipsa non repudiandae? Eum ipsam iste quos suscipit tempora? Aperiam esse fugiat inventore laboriosam officiis quam rem!
      </p>
      </div>
      
    </section>

    <section className="text-center my-8">
      <SectionHeaders 
        subHeader={'Don\'t hesitate'} 
        mainHeader={'Contact Us'}
      />

      <div className="mt-8">
      <a className="text-4xl underline text-gray-600" 
      href="tel:+1 123 234 3456 ">+1 123 234 3456 </a>
      </div>
    </section>
    </>
  )
}
