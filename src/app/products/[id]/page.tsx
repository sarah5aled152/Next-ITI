"use client";

import { useCart } from "@/context/CartContext";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

interface Product {
  title: string;
  description: string;
  category: string;
  image: string;
  price: number;
  id: number;
}

export default function Details() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  // const [products, setProducts] = useState([]);
  const { addToCart } = useCart();
  useEffect(() => {
    if (!id) return;
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, quantity: 1 });
    }
    toast.success("Added to cart!", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  if (!product) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="bg-gray-50 rounded-xl p-8 flex items-center justify-center">
                <img
                  className="max-h-[400px] w-auto object-contain"
                  src={product.image}
                  alt={product.title}
                />
              </div>
            </div>
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                {product.title}
              </h2>
              <p className="text-gray-600">{product.description}</p>
              <div className="space-y-4">
                <p className="text-3xl font-bold text-blue-600">
                  ${product.price}
                </p>
                <p className="text-sm text-gray-600">
                  Category:{" "}
                  <span className="font-medium">{product.category}</span>
                </p>
              </div>
              <button
                onClick={handleAddToCart}
                className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
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
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
