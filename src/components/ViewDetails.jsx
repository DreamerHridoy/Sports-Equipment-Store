import React from "react";
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const Equipment = useLoaderData();
  const {
    photo,
    name,
    category,
    description,
    price,
    rating,
    customization,
    processing,
    stock,
  } = Equipment;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6">Equipment Details</h1>
      <div className="flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={photo}
            alt={name}
            className="rounded-lg shadow-lg max-w-xs md:max-w-sm"
          />
        </div>
        {/* Details Section */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-10">
          <h2 className="text-2xl font-semibold mb-4">{name}</h2>
          <p className="text-gray-600 mb-2">
            <span className="font-bold">Category:</span> {category}
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-bold">Price:</span> ${price}
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-bold">Rating:</span> {rating} / 5
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-bold">Stock:</span> {stock} units available
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-bold">Processing:</span>{" "}
            {processing ? "Yes" : "No"}
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-bold">Customization:</span>{" "}
            {customization ? "Available" : "Not Available"}
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-bold">Description:</span> {description}
          </p>
        </div>
      </div>
      {/* Back Button */}
      <div className="text-center mt-6">
        <button
          className="btn btn-primary"
          onClick={() => window.history.back()}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ViewDetails;
