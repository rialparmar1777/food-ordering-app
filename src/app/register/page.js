import Image from "next/image";
import Link from "next/link";

export default function RegisterPage() {
    return (
        <section className="mt-8 flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-2xl">
                <h1 className="text-center text-black text-4xl font-bold mb-6">
                    Register
                </h1>
                <form className="space-y-4">
                    <input 
                        type="email" 
                        placeholder="Email" 
                        className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button 
                        type="submit"
                        className="w-full bg-black text-white font-semibold py-3 px-4 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-gray-700 hover:shadow-lg active:bg-white-800 active:scale-95"
                    >
                        Register
                    </button>

                    <div className="text-center text-gray-500 my-4">
                        or login with a provider
                    </div>

                    <button 
                        type="button"
                        className="flex items-center justify-center w-full border border-gray-300 py-3 px-4 rounded-lg shadow-sm hover:bg-gray-100 transition duration-300 ease-in-out"
                    >
                        <Image 
                            src="/google.png" 
                            alt="Google" 
                            width={20} 
                            height={20} 
                            className="mr-3" 
                        />
                        <span className="text-gray-700 font-medium">Login with Google</span>
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-600">
                    Already have an account?{' '}
                    <Link href="/login">
                        <span className="text-blue-600 font-semibold hover:underline">Login here</span>
                    </Link>
                </p>
            </div>
        </section>
    );
}
