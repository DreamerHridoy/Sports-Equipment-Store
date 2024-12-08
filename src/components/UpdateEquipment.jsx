import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateEquipment = () => {
  const Equipment = useLoaderData();
  const {
    _id,
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
  const handleUpdateEquipment = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const photo = form.photo.value;
    const name = form.name.value;
    const category = form.category.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processing = form.processing.value;
    const stock = form.stock.value;

    const updatedEquipment = {
      photo,
      name,
      category,
      description,
      price,
      rating,
      customization,
      processing,
      stock,
    };

    form.reset();
    fetch(`http://localhost:5000/Equipment/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedEquipment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "success!",
            text: "successFully Updated",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Update Item</h2>
      <form onSubmit={handleUpdateEquipment} className="grid gap-4">
        {/* Image */}
        <div>
          <label className="block font-medium mb-2">Image URL</label>
          <input
            type="url"
            name="photo"
            defaultValue={photo}
            placeholder="Enter image URL"
            className="input input-bordered w-full"
          />
        </div>

        {/* Item Name */}
        <div>
          <label className="block font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            placeholder="Enter item name"
            className="input input-bordered w-full"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block font-medium mb-2">Category</label>
          <input
            type="text"
            name="category"
            defaultValue={category}
            placeholder="Enter category name"
            className="input input-bordered w-full"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium mb-2">Description</label>
          <textarea
            name="description"
            defaultValue={description}
            placeholder="Enter description"
            className="textarea textarea-bordered w-full"
          ></textarea>
        </div>

        {/* Price */}
        <div>
          <label className="block font-medium mb-2">Price</label>
          <input
            type="number"
            name="price"
            defaultValue={price}
            placeholder="Enter price"
            className="input input-bordered w-full"
          />
        </div>

        {/* Rating */}
        <div>
          <label className="block font-medium mb-2">Rating</label>
          <input
            type="number"
            step="0.1"
            name="rating"
            defaultValue={rating}
            placeholder="Enter rating (0-5)"
            className="input input-bordered w-full"
          />
        </div>

        {/* Customization */}
        <div>
          <label className="block font-medium mb-2">Customization</label>
          <input
            type="text"
            name="customization"
            defaultValue={customization}
            placeholder="Enter customization options"
            className="input input-bordered w-full"
          />
        </div>

        {/* Processing Time */}
        <div>
          <label className="block font-medium mb-2">Processing Time</label>
          <input
            type="text"
            name="processing"
            defaultValue={processing}
            placeholder="Enter delivery time"
            className="input input-bordered w-full"
          />
        </div>

        {/* Stock */}
        <div>
          <label className="block font-medium mb-2">Stock</label>
          <input
            type="number"
            name="stock"
            defaultValue={stock}
            placeholder="Enter available product quantity"
            className="input input-bordered w-full"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button type="submit" className="btn btn-primary w-full">
            Update Item
          </button>
        </div>
      </form>
      <div className="text-center mt-6">
        <button className="btn btn-info" onClick={() => window.history.back()}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default UpdateEquipment;
