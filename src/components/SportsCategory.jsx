import React from "react";

const sportsCategories = [
  {
    id: 1,
    name: "Football",
    image: "https://i.ibb.co.com/7gGcVTV/football.jpg",
    description: "Gear up for the world’s most popular sport.",
  },
  {
    id: 2,
    name: "Basketball",
    image: "https://i.ibb.co.com/NsNygCG/basketball.jpg",
    description: "From hoops to dreams, elevate your game.",
  },
  {
    id: 3,
    name: "Cricket",
    image: "https://i.ibb.co.com/rxy6w6m/cricketwww.jpg",
    description: "Equip yourself for boundary-smashing fun.",
  },
  {
    id: 4,
    name: "Tennis",
    image: "https://i.ibb.co.com/CHyhqbd/tennis.jpg",
    description: "Ace the court with premium gear.",
  },
  {
    id: 5,
    name: "Swimming",
    image: "https://i.ibb.co.com/dt8yNzN/swimming.jpg",
    description: "Dive into excellence with the right equipment.",
  },
  {
    id: 6,
    name: "Running",
    image: "https://i.ibb.co.com/N6Pth4K/final-ertun.jpg",
    description: "Gear up for the ultimate race to the finish line.",
  },
];

const SportsCategory = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-50 p-6">
      <h2 className="text-4xl font-bold text-center mb-8 text-blue-600">
        Explore Sports Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sportsCategories.map((category) => (
          <div
            key={category.id}
            className="card bg-white shadow-xl rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <figure>
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-2xl font-semibold text-gray-800">
                {category.name}
              </h3>
              <p className="text-gray-600">{category.description}</p>
              <div className="card-actions justify-end mt-4">
                <button className="btn btn-primary btn-sm">Explore</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportsCategory;
