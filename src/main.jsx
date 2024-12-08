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
import NotFound from "./components/NotFound.jsx";
import EquipmentTable from "./components/EquipmentTable.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Home from "./components/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "EquipmentTable",
        element: <EquipmentTable></EquipmentTable>,
        loader: () =>
          fetch("https://sports-equipment-server-navy.vercel.app/Equipment"),
      },

      { path: "/auth/login", element: <Login></Login> },
      { path: "/auth/register", element: <Register></Register> },
      {
        path: "addEquipment",
        element: (
          <PrivateRoute>
            <AddEquipment></AddEquipment>
          </PrivateRoute>
        ),
      },

      {
        path: "EquipmentList",
        element: (
          <PrivateRoute>
            <EquipmentList></EquipmentList>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://sports-equipment-server-navy.vercel.app/Equipment"),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: async ({ params }) =>
          fetch(
            `https://sports-equipment-server-navy.vercel.app/Equipment/${params.id}`
          ).then((res) => res.json()),
      },
      {
        path: "/updateEquipment/:id",
        element: <UpdateEquipment></UpdateEquipment>,
        loader: ({ params }) =>
          fetch(
            `https://sports-equipment-server-navy.vercel.app/Equipment/${params.id}`
          ).then((res) => res.json()),
      },
      { path: "*", element: <NotFound></NotFound> },
      {
        path: "users",
        element: (
          <PrivateRoute>
            <Users></Users>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://sports-equipment-server-navy.vercel.app/users"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
