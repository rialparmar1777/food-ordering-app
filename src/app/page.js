import Image from "next/image";
import Link from "next/link";
import Hero from "../../src/components/layout/Hero";
import HomeMenu from "../../src/components/layout/HomeMenu";
import SectionHeaders from "../../src/components/layout/SectionHeaders";
import Header from "../../src/components/layout/Header";

export default function Home() {
  return (
    <>
    <Header />
      <Hero />
      <HomeMenu />
      
      <section className="text-center my-20 px-6">
        <SectionHeaders subHeader={"Our Story"} mainHeader={"About Us"} />
        <div className="text-gray-700 max-w-2xl mx-auto mt-6 flex flex-col gap-6 leading-relaxed text-lg">
          <p>
            We are dedicated to creating a welcoming community where faith, love, and fellowship thrive. Our mission is to bring people closer through worship, service, and compassion.
          </p>
          <p>
            With a rich history and a heart for outreach, we strive to make a meaningful impact in the lives of our members and the broader community.
          </p>
          <p>
            Join us on this journey of faith and togetherness, as we continue to grow and serve with purpose and passion.
          </p>
        </div>
      </section>

      <section className="text-center my-16 px-6">
        <SectionHeaders subHeader={"Don't hesitate"} mainHeader={"Contact Us"} />
        <div className="mt-6">
          <a 
            className="text-4xl font-semibold text-yellow-500 hover:text-yellow-600 transition-all duration-300 underline" 
            href="tel:+1 123 234 3456">
            +1 123 234 3456
          </a>
        </div>
        <footer className="border-t border-gray-300 p-8 text-center text-gray-600 mt-16 bg-gray-50">
            <p className="text-sm">&copy; 2025 All rights reserved</p>
            <p className="text-sm">
              Powered by <span className="font-semibold text-yellow-600">Rial</span>
            </p>
          </footer>
      </section>

      
    </>
  );
}
