import { Bars4Icon } from "@heroicons/react/24/solid";
import { useAppContext } from "../../context/AppContext";
import ChangeLanguage from "../../components/ChangeLnaguage";
import Button from "../../components/Button";

const MainLayoutNavbar = () => {
  const { toggleSideBar } = useAppContext();
  return (
    <nav className=" flex items-center justify-between bg-slate-700 py-3 px-3 w-full rounded-t-xl ">
      <div className="flex items-center gap-3 cursor-pointer">
        <div className="bg-blue-500 p-2 rounded-full" onClick={toggleSideBar}>
          <Bars4Icon className="w-6 h-6 text-white" />
        </div>
        <ChangeLanguage />
      </div>
      <Button name="خروج" className="btn-outline btn-error px-8" />
    </nav>
  );
};
export default MainLayoutNavbar;
