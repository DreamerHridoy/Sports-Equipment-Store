import { useState } from "react";
import { useLoaderData } from "react-router-dom";

function App() {
  const loadedEquipments = useLoaderData();
  const [Equipments, setEquipments] = useState(loadedEquipments);
  return (
    <div className="App">
      <h1 className="text-center text-3xl font-bold my-6">
        Equipment Store: {Equipments.length} Items
      </h1>
    </div>
  );
}

export default App;
