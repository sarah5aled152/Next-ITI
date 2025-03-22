import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="logo">
            <Image
              src="/next.svg"
              alt="forkify logo"
              width="120"
              height="40"
              className="hover:opacity-80 transition-opacity"
            />
          </div>
          <nav>
            <ul className="flex space-x-8">
              {[
                ["Home", "/"],
                ["Products", "/products"],
                ["About", "/about"],
                ["Cart", "/cart"],
                ["Login", "/login"],
              ].map(([title, url]) => (
                <li key={title}>
                  <Link
                    href={url}
                    className="text-gray-600 hover:text-black transition-colors duration-200 font-medium text-sm"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
