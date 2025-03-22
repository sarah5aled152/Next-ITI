"use client";
import { useState } from "react";
import FacebookLogin, { SuccessResponse } from "@greatsumini/react-facebook-login";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";

const FacebookLoginButton = () => {
  const [message, setMessage] = useState<{
    text: string;
    severity: "error" | "success";
  }>();
  const { login } = useAuth();
  const router = useRouter();

  const onSuccessHandler = async (response: SuccessResponse) => {
    try {
      const apiResponse = await fetch("/api/facebook-login", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: response.userID,
          accessToken: response.accessToken,
        }),
      });

      const data = await apiResponse.json();
      
      if (data.success) {
        setMessage({ text: "Login Successful.", severity: "success" });
        login({
          email: data.email,
          picture: data.picture.data.url,
          userId: response.userID
        });
        localStorage.setItem("facebookEmail", data.email);
        localStorage.setItem("image", data.picture.data.url);
        router.push('/dashboard'); // Redirect to dashboard or protected route
      } else {
        setMessage({ text: "Login failed.", severity: "error" });
      }
    } catch (error) {
      setMessage({ text: "An error occurred during login.", severity: "error" });
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="p-8 rounded-xl shadow-2xl bg-white/80 backdrop-blur-sm w-96">
        <FacebookLogin
          appId="1183864926673449"
          onSuccess={onSuccessHandler}
          onFail={(error) => {
            setMessage({ text: "Error occurred", severity: "error" });
          }}
          render={({ onClick }) => (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800 text-center">
                Welcome Back
              </h2>
              <p className="text-gray-600 text-center">
                Continue with Facebook
              </p>
              <button
                onClick={onClick}
                className="w-full py-3 px-4 rounded-lg bg-[#1877f2] hover:bg-[#166fe5] transition-colors duration-200 flex items-center justify-center space-x-2 text-white font-semibold shadow-lg hover:shadow-xl"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Continue with Facebook</span>
              </button>
            </div>
          )}
        />
        {message && (
          <div
            className={`mt-4 p-3 rounded-lg ${
              message.severity === "error"
                ? "bg-red-100 text-red-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {message.text}
          </div>
        )}
      </div>
    </div>
  );
};

export default FacebookLoginButton;
