import Image from "next/image";
import React from "react";
import Link from "next/link";
import FacebookLoginButton from "./Components/FacebookLoginButton";

export default function Home() {
  return (
    <main className="min-h-screen relative pt-20">
      {/* Hero section with overlay */}
      <div className="relative h-screen">
        {/* <Image
          src="/clothes.jpg"
          alt="Fashion collection"
          fill
          className="object-cover"
          priority
        /> */}
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4 text-center">
            Discover Your Style
          </h1>
          <p className="text-xl mb-8 max-w-2xl text-center">
            Explore our latest collection of trendsetting fashion pieces
          </p>
          <Link href="/products">
            <button
              className="bg-white text-black px-8 py-3 rounded-full 
              hover:bg-gray-100 transition-colors"
            >
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
