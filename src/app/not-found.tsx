export default function NotFound() {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-red-500">404 - Page Not Found</h1>
        <p className="text-gray-600 mt-2">Sorry, this page doesn’t exist.</p>
      </div>
    );
  }