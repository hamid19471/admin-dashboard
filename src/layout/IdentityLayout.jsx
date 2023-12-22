import { Outlet } from "react-router-dom";
import ChangeLanguage from "../components/ChangeLnaguage";

const IdentityLayout = () => {
  return (
    <div className="md:w-full h-screen flex flex-col items-center justify-between">
      <header className="p-6 bg-slate-800/30 backdrop-blur-lg shadow-xl flex w-full items-center justify-between">
        <nav>
          <ChangeLanguage />
        </nav>
      </header>
      <main className="w-full md:px-12 flex items-center justify-center h-full">
        <Outlet />
      </main>
    </div>
  );
};
export default IdentityLayout;
