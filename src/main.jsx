import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddEquipment from "./components/AddEquipment.jsx";
import ViewDetails from "./components/ViewDetails.jsx";
import UpdateEquipment from "./components/UpdateEquipment.jsx";
import EquipmentList from "./components/EquipmentList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch("http://localhost:5000/Equipment"),
  },
  {
    path: "addEquipment",
    element: <AddEquipment></AddEquipment>,
  },
  {
    path: "EquipmentList",
    element: <EquipmentList></EquipmentList>,
    loader: () => fetch("http://localhost:5000/Equipment"),
  },
  {
    path: "/details/:id",
    element: <ViewDetails></ViewDetails>,
    loader: async ({ params }) =>
      fetch(`http://localhost:5000/Equipment/${params.id}`).then((res) =>
        res.json()
      ),
  },
  {
    path: "/updateEquipment/:id",
    element: <UpdateEquipment></UpdateEquipment>,
    loader: ({ params }) =>
      fetch(`http://localhost:5000/Equipment/${params.id}`).then((res) =>
        res.json()
      ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
