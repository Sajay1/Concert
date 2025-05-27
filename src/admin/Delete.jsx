import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function Delete() {
  const { id } = useParams();
  const navigate = useNavigate();
  

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/concert_delete/${id}`);
      console.log("Concert deleted successfully");
      navigate("/admin");
    } catch (error) {
      console.error("Error deleting concert:", error);
    }
  };

  return (
    <div className="flex flex-col items-center bg-white min-h-screen p-6">
      <h1 className="text-xl font-semibold mb-4">
        Are you sure you want to delete this concert?
      </h1>

      <div className="flex gap-4">
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Yes, Delete
        </button>
        <Link
          to="/admin"
          className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
        >
          No, Cancel
        </Link>
      </div>
    </div>
  );
}
