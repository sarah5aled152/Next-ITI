"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => {
    const price = Number(item.price) || 0;
    const quantity = Number(item.quantity) || 0;
    return sum + price * quantity;
  }, 0);

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    e.currentTarget.src = "/placeholder.png"; // Add a placeholder image to your public folder
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    // Implement the logic to update the quantity of the item in the cart
  };

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity > 0) {
      updateQuantity(id, newQuantity);
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Shopping Cart
          </h2>

          {cart.length === 0 ? (
            <div className="text-center py-12">
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
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <p className="text-xl text-gray-600">Your cart is empty</p>
            </div>
          ) : (
            <>
              <ul className="divide-y divide-gray-200">
                {cart.map((item) => (
                  <li
                    key={item.id}
                    className="flex flex-col md:flex-row justify-between py-4 md:items-center gap-4 hover:bg-gray-50 px-4 rounded-lg transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-white p-2 rounded-lg shadow-sm w-20 h-20 flex items-center justify-center">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-contain"
                          onError={handleImageError}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900 mb-1 line-clamp-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-500">
                          Quantity: {item.quantity}
                        </p>
                        <p className="text-sm text-gray-500">
                          Price: ${Number(item.price).toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity - 1)
                          }
                          className="p-1 text-gray-500 hover:text-gray-700"
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity + 1)
                          }
                          className="p-1 text-gray-500 hover:text-gray-700"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-lg font-semibold text-blue-600">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 transition-colors p-2"
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
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t pt-6">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg font-medium">Total:</span>
                  <span className="text-2xl font-bold text-blue-600">
                    ${total.toFixed(2)}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={clearCart}
                    className="px-6 py-3 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex-1 sm:flex-none"
                  >
                    Clear Cart
                  </button>
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex-1 sm:flex-none">
                    Checkout
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
