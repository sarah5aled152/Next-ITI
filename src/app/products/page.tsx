"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Products() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  interface Product {
    title: string;
    description: string;
    category: string;
    image: string;
    price: number;
    id: number;
  }

  const handleAddToCart = (product: Product) => {
    addToCart({ ...product, quantity: 1 });
    toast.success("Added to cart!", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetch("https://fakestoreapi.com/products");
        const result = await data.json();
        setProducts(result);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="w-64 bg-white rounded-2xl shadow-lg p-6 h-fit sticky top-28">
            <nav className="space-y-2">
              <Link
                href="/"
                className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 transition-colors text-gray-700 hover:text-gray-900"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span>Home</span>
              </Link>
              <Link
                href="/products/category"
                className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 transition-colors text-gray-700 hover:text-gray-900"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
                <span>Categories</span>
              </Link>
              <Link
                href="/"
                className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 transition-colors text-gray-700 hover:text-gray-900"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                <span>Logout</span>
              </Link>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Our Products
            </h1>
            {products.length === 0 ? (
              <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product: Product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="p-4 h-64 flex items-center justify-center bg-gray-50">
                      <img
                        className="h-full w-full object-contain"
                        src={product.image}
                        alt={product.title}
                      />
                    </div>
                    <div className="p-6">
                      <h2 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
                        {product.title}
                      </h2>
                      <p className="text-sm text-gray-600 mb-4">
                        Category:{" "}
                        <span className="font-medium">{product.category}</span>
                      </p>
                      <p className="text-2xl font-bold text-blue-600 mb-4">
                        ${product.price}
                      </p>
                      <div className="flex gap-3">
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                        >
                          Add to Cart
                        </button>
                        <Link
                          href={`/products/${product.id}`}
                          className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                        >
                          Details
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
