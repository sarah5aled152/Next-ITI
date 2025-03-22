import React from "react";

export default function About() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Our Store
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're dedicated to providing you with the best shopping experience
            and quality products.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Quality Products",
              description:
                "Carefully selected items that meet our high standards",
              icon: (
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ),
            },
            {
              title: "Fast Shipping",
              description:
                "Quick delivery to your doorstep anywhere in the world",
              icon: (
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              ),
            },
            {
              title: "24/7 Support",
              description:
                "Our team is here to help you whenever you need assistance",
              icon: (
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ),
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Active Users", value: "10K+" },
              { label: "Products", value: "5K+" },
              { label: "Countries", value: "50+" },
              { label: "Happy Customers", value: "99%" },
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl font-bold text-blue-600">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            To provide our customers with the highest quality products while
            maintaining exceptional service standards and fostering sustainable
            shopping practices.
          </p>
        </div>
      </div>
    </div>
  );
}
