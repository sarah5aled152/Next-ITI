"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

export default function CategoriesPage() {
  const [categories, setCategories] = useState<string[]>([]);
  interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
  }

  const [products, setProducts] = useState<Product[]>([]);
  const searchParams = useSearchParams();
  const router = useRouter();
  const selectedCategory = searchParams.get("category") || "";

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  // Fetch products based on selected category
  useEffect(() => {
    if (selectedCategory) {
      fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
        .then((res) => res.json())
        .then((data: Product[]) => setProducts(data));
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full md:w-64 bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Categories
            </h2>
            <nav className="space-y-2">
              {categories.map((cat) => (
                <Link
                  key={cat}
                  href={`/products/category?category=${cat}`}
                  className={`block p-3 rounded-lg transition-colors ${
                    selectedCategory === cat
                      ? "bg-blue-600 text-white"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <span className="capitalize">{cat}</span>
                </Link>
              ))}
            </nav>
          </aside>

          {/* Products Grid */}
          <main className="flex-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 capitalize">
              {selectedCategory
                ? `${selectedCategory} Products`
                : "Select a category"}
            </h2>
            {products.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                <svg
                  className="w-16 h-16 mx-auto text-gray-400 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                  />
                </svg>
                <p className="text-gray-600">
                  Select a category to view products
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    <div className="p-4 bg-gray-50 aspect-square flex items-center justify-center">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="h-48 w-48 object-contain"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
                        {product.title}
                      </h3>
                      <p className="text-2xl font-bold text-blue-600 mb-4">
                        ${product.price.toFixed(2)}
                      </p>
                      <Link
                        href={`/products/${product.id}`}
                        className="w-full inline-block text-center py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
