// now again

import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const EquipmentTable = () => {
  const loadedEquipments = useLoaderData();
  const [Equipments, setEquipments] = useState(loadedEquipments);
  const navigate = useNavigate();

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
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
              <td className="border border-gray-300 px-4 py-2">
                <button
                  className="btn btn-primary"
                  onClick={() => navigate(`/details/${Equipment._id}`)}
                >
                  View Details
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
