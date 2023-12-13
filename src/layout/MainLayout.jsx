import logo from "../assets/images/logo.svg";
import ChangeLanguage from "../components/ChangeLnaguage";
import Button from "../components/Button";

const MainLayout = () => {
  return (
    <div className="flex">
      <nav className=" h-screen flex flex-col items-center gap-3 bg-slate-700 w-[330px] pt-8">
        <img src={logo} alt="webdream-studio" className="w-2/3" />
        <h1 className="font-semibold text-sm">پلتفرم آموزشی</h1>
        <div className="w-full px-12 pt-8">
          <h3 className="font-semibold text-lg text-white">مدیریت دوره‌ها</h3>
          <ul className="flex flex-col gap-3 mt-3 px-4">
            <li>hamid</li>
            <li>hamid</li>
            <li>hamid</li>
            <li>hamid</li>
            <li>hamid</li>
          </ul>
        </div>
        <div className="w-full px-12 pt-8 ">
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
      <main className="w-full mx-4 my-6 flex flex-col justify-between gap-3">
        <nav className="container flex items-center justify-between bg-slate-700 py-3 px-3 w-full rounded-xl ">
          <ChangeLanguage />
          <Button name="خروج" className="btn-outline btn-error px-8" />
        </nav>
        <main className="bg-slate-700 h-full rounded-xl container">asaadi</main>
        <footer className="container flex items-center justify-between bg-slate-700 py-3 px-4 rounded-xl text-sm">
          <h3>تمامی حقوق مادی و معنوی سایت محفوظ است.</h3>
          <p>طراحی و توسعه: حمیدرضا اسدی</p>
        </footer>
      </main>
    </div>
  );
};
export default MainLayout;
