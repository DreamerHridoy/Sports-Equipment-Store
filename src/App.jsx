import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import EquipmentTable from "./components/EquipmentTable";
import EquipmentList from "./components/EquipmentList";

function App() {
  const loadedEquipments = useLoaderData();
  const [Equipments, setEquipments] = useState(loadedEquipments);
  return (
    <div className="App">
      <h1 className="text-center text-3xl font-bold my-6">
        Equipment Store: {Equipments.length} Items
      </h1>
      <EquipmentTable Equipments={Equipments} setEquipments={setEquipments} />
      {/* <EquipmentList Equipments={Equipments} setEquipments={setEquipments} /> */}
    </div>
  );
}

export default App;
