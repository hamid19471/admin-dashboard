import { Outlet } from "react-router-dom";
import MainLayoutNavbar from "./MainLayoutNavbar";
import MainLayoutFooter from "./MainLayoutFooter";
import SideBar from "./SideBar";

const MainLayout = () => {
  return (
    <div className="flex w-full">
      <SideBar />
      <main className="w-full mx-4 my-2 flex flex-col justify-between gap-[1px]">
        <MainLayoutNavbar />
        <main className="bg-slate-700 h-full p-8 overflow-scroll">
          <Outlet />
        </main>
        <MainLayoutFooter />
      </main>
    </div>
  );
};
export default MainLayout;
