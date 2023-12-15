import { createBrowserRouter } from "react-router-dom";
import Login from "./Features/Identity/Components/Login/Login";
import IdentityLayout from "./layout/IdentityLayout";
import { RegisterSubmitAction } from "./Features/Identity/Components/Register/RegisterSubmitAction";
import Register from "./Features/Identity/Components/Register/Register";
import { LoginAction } from "./Features/Identity/Components/Login/LoginAction";
import MainLayout from "./layout/MainLayout/MainLayout";
import Courses from "./pages/Courses";
import { CoursesLoaderAction } from "./pages/CoursesLoaderAction";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        element: <Courses />,
        index: true,
        loader: CoursesLoaderAction,
      },
    ],
  },
  {
    element: <IdentityLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
        action: LoginAction,
        errorElement: <Login />,
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
