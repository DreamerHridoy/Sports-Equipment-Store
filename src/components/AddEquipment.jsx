import Swal from "sweetalert2";

const AddEquipment = () => {
  const handleAddEquipment = (event) => {
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

    const newEquipment = {
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

    console.log(newEquipment);
    form.reset();
    fetch("http://localhost:5000/Equipment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newEquipment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "successFully inserted",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Add New Item</h2>
        <form onSubmit={handleAddEquipment} className="grid gap-4">
          {/* Image */}
          <div>
            <label className="block font-medium mb-2">Image URL</label>
            <input
              type="url"
              name="photo"
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
              placeholder="Enter category name"
              className="input input-bordered w-full"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium mb-2">Description</label>
            <textarea
              name="description"
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
              placeholder="Enter available product quantity"
              className="input input-bordered w-full"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button type="submit" className="btn btn-primary w-full">
              Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEquipment;
