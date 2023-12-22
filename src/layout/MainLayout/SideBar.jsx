import {
  AcademicCapIcon,
  TagIcon,
  ReceiptPercentIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { useAppContext } from "../../context/AppContext";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

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
          <li className="flex items-center gap-1">
            <AcademicCapIcon className="h-4 w-4 text-white" />
            <Link to="/">
              <span className="text-sm hover:text-white transition-all duration-300">
                تمامی دوره ها
              </span>
            </Link>
          </li>
          <li className="flex items-center gap-1">
            <TagIcon className="h-4 w-4 text-white" />
            <Link to="/course-categories">
              <span className="text-sm hover:text-white transition-all duration-300">
                دسته بندی دوره ها
              </span>
            </Link>
          </li>
          <li className="flex items-center gap-1">
            <ReceiptPercentIcon className="h-4 w-4 text-white" />
            <Link to="/discounts">
              <span className="text-sm hover:text-white transition-all duration-300">
                تخفیف دوره ها
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full px-8 pt-8 ">
        <h3 className="font-semibold text-lg text-white">مدیریت کاربران</h3>
        <ul className="flex flex-col gap-3 mt-3 px-4">
          <li className="flex items-center gap-1">
            <UserGroupIcon className="h-4 w-4 text-white" />
            <Link to="/teachers">
              <span className="text-sm hover:text-white transition-all duration-300">
                مدیریت مدرسین
              </span>
            </Link>
          </li>
          <li className="flex items-center gap-1">
            <UserGroupIcon className="h-4 w-4 text-white" />
            <Link to="/users">
              <span className="text-sm hover:text-white transition-all duration-300">
                مدیریت کاربران
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default SideBar;
