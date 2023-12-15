import { createBrowserRouter } from "react-router-dom";
import Login from "./Features/Identity/Components/Login/Login";
import IdentityLayout from "./layout/IdentityLayout";
import { RegisterSubmitAction } from "./actions/RegisterSubmitAction";
import Register from "./Features/Identity/Components/Register/Register";
import { LoginAction } from "./actions/LoginAction";
import MainLayout from "./layout/MainLayout/MainLayout";
import Courses from "./pages/Courses";
import { CoursesLoaderAction } from "./actions/CoursesLoaderAction";
import CoureseCategories from "./pages/CoureseCategories";

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
      {
        path: "/course-categories",
        element: <CoureseCategories />,
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
