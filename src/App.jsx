import { RouterProvider } from "react-router-dom";
import { route } from "./routes";
import { Toaster } from "react-hot-toast";
import "./core/i18n";
const App = () => {
  return (
    <>
      <RouterProvider router={route} />;
      <Toaster position="bottom-center" />
    </>
  );
};

export default App;
