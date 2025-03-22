"use client";
import { useAuth } from "../context/AuthContext";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      redirect("/login");
    }
  }, [isAuthenticated]);

  return isAuthenticated ? children : null;
}
