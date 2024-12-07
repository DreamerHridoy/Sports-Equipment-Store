import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
// { Equipments, setEquipments }

const EquipmentList = () => {
  const loadedEquipments = useLoaderData();
  const [Equipments, setEquipments] = useState(loadedEquipments);
  const handleDeleteEquipment = (_id) => {
    // Perform delete operation
    fetch(`http://localhost:5000/Equipment/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Deleted successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });

          // Update state to remove the deleted item
          setEquipments((prevEquipments) =>
            prevEquipments.filter((item) => item._id !== _id)
          );
        }
      })
      .catch((error) => {
        console.error("Error deleting equipment:", error);
        Swal.fire({
          title: "Error!",
          text: "Failed to delete equipment",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Equipment List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Equipments.map((Equipment) => (
          <div
            key={Equipment._id}
            className="p-4 border border-gray-300 rounded-lg shadow-sm"
          >
            <h3 className="text-lg font-semibold">{Equipment.name}</h3>
            <p className="text-sm text-gray-600">
              <strong>Category:</strong> {Equipment.category}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Price:</strong> ${Equipment.price}
            </p>
            <div className="flex justify-between mt-4">
              <Link
                to={`/details/${Equipment._id}`}
                className="btn btn-sm btn-primary"
              >
                View Details
              </Link>
              <Link
                to={`/updateEquipment/${Equipment._id}`}
                className="btn btn-sm btn-secondary"
              >
                Update
              </Link>
              <button
                onClick={() => handleDeleteEquipment(Equipment._id)}
                className="btn btn-sm btn-error"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EquipmentList;
