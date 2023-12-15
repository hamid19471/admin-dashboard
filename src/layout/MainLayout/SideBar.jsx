import { useAppContext } from "../../context/AppContext";
import logo from "../../assets/images/logo.svg";

const SideBar = () => {
  const { sideBar } = useAppContext();
  return (
    <nav
      className={`${
        sideBar ? "aj-sidebar-hide" : "aj-sidebar-show"
      } h-screen flex flex-col items-center gap-3 bg-slate-700 pt-8`}
    >
      <img src={logo} alt="webdream-studio" className="w-[320px] p-3" />
      <h1 className="font-semibold text-sm">پلتفرم آموزشی</h1>
      <div className="w-full px-8 pt-8">
        <h3 className="font-semibold text-lg text-white">مدیریت دوره‌ها</h3>
        <ul className="flex flex-col gap-3 mt-3 px-4">
          <li>hamid</li>
          <li>hamid</li>
          <li>hamid</li>
          <li>hamid</li>
          <li>hamid</li>
        </ul>
      </div>
      <div className="w-full px-8 pt-8 ">
        <h3 className="font-semibold text-lg text-white">مدیریت دوره‌ها</h3>
        <ul className="flex flex-col gap-3 mt-3 px-4">
          <li>hamid</li>
          <li>hamid</li>
          <li>hamid</li>
          <li>hamid</li>
          <li>hamid</li>
        </ul>
      </div>
    </nav>
  );
};
export default SideBar;
