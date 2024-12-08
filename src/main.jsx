import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddEquipment from "./components/AddEquipment.jsx";
import ViewDetails from "./components/ViewDetails.jsx";
import UpdateEquipment from "./components/UpdateEquipment.jsx";
import EquipmentList from "./components/EquipmentList.jsx";
import HomeLayout from "./components/Layouts/HomeLayout.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import Users from "./components/Users.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <App></App>,
        loader: () => fetch("http://localhost:5000/Equipment"),
      },
    ],
  },
  { path: "/auth/login", element: <Login></Login> },
  { path: "/auth/register", element: <Register></Register> },
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
  {
    path: "users",
    element: <Users></Users>,
    loader: () => fetch("http://localhost:5000/users"),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
