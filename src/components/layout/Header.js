import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 lg:px-20 py-4 bg-white shadow-md fixed top-0 left-0 w-full z-50">
      
      <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium text-lg">
      <Link className="text-primary font-extrabold text-3xl tracking-wide" href={'/'}>
        ST PIZZA
      </Link>
        <Link href={'/ '} className="hover:text-primary transition-colors">Home</Link>
        <Link href={""} className="hover:text-primary transition-colors">Menu</Link>
        <Link href={""} className="hover:text-primary transition-colors">About</Link>
        <Link href={""} className="hover:text-primary transition-colors">Contact</Link>
        
      </nav>

      <nav className="flex items-center gap-4 text-gray-600 font-semibold">
        <Link href={'/login'}>Login</Link>
      <Link
          href={'/register'}
          className="bg-primary text-white rounded-full px-6 py-2 font-semibold shadow-lg hover:bg-red-600 transition-all"
        >
          Register
        </Link>
      </nav>
      <div className="md:hidden">
        {/* Mobile menu icon placeholder */}
        <button className="text-gray-700 focus:outline-none">
          ☰
        </button>
      </div>
    </header>
  );
}