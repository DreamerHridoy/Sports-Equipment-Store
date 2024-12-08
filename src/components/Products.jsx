import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/limitedEquipment?limit=6")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={product.photo}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">
                {product.description.slice(0, 50)}...
              </p>
              <p className="font-bold text-lg text-blue-600 mb-4">
                ${product.price}
              </p>
              <button
                onClick={() => handleViewDetails(product)}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for viewing details */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">{selectedProduct.name}</h3>
            <img
              src={selectedProduct.photo}
              alt={selectedProduct.name}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <p className="text-gray-700 mb-4">{selectedProduct.description}</p>
            <p className="font-bold text-lg text-blue-600 mb-4">
              Price: ${selectedProduct.price}
            </p>
            <button
              onClick={closeModal}
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
