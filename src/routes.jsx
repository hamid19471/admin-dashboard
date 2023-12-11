import { createBrowserRouter } from "react-router-dom";
import Login from "./Features/Identity/Components/Login/Login";
import IdentityLayout from "./layout/IdentityLayout";
import { RegisterSubmitAction } from "./Features/Identity/Components/Register/RegisterSubmitAction";
import Register from "./Features/Identity/Components/Register/Register";

export const route = createBrowserRouter([
  {
    element: <IdentityLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
        action: RegisterSubmitAction,
        errorElement: <Register />,
      },
    ],
  },
]);
