import React from "react";
import { useNavigate } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="mt-4 text-lg text-gray-600">
        The page you’re looking for doesn’t exist.
      </p>

      <button
        onClick={() => navigate("/")}
        className="mt-6 flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
      >
        <Home size={18} />
        Back to Home
      </button>
    </div>
  );
};

export default NotFound;
