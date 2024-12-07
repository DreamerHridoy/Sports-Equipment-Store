import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const EquipmentTable = ({ Equipments, setEquipments }) => {
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
            title: "success!",
            text: "Deleted successFully",
            icon: "success",
            confirmButtonText: "Cool",
          });

          // Update state to remove the deleted item
          setEquipments((prevEquipments) =>
            prevEquipments.filter((item) => item._id !== _id)
          );
        }
      });
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Equipment List</h2>
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Category</th>
            <th className="border border-gray-300 px-4 py-2">Price</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {Equipments.map((Equipment) => (
            <tr key={Equipment._id}>
              <td className="border border-gray-300 px-4 py-2">
                {Equipment.name}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {Equipment.category}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                ${Equipment.price}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <Link
                  to={`/details/${Equipment._id}`}
                  className="btn btn-sm btn-primary mx-2"
                >
                  View Details
                </Link>

                <Link
                  to={`updateEquipment/${Equipment._id}`}
                  className="btn btn-sm btn-secondary mx-2"
                >
                  Update
                </Link>

                <button
                  onClick={() => handleDeleteEquipment(Equipment._id)}
                  className="btn btn-sm btn-error"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EquipmentTable;
