import usFlag from "../assets/images/us.png";
import faFlag from "../assets/images/fa.png";
import { useEffect, useRef, useState } from "react";
import { useAppContext } from "../context/AppContext";

const ChangeLanguage = () => {
  const { language, changeLanguage } = useAppContext();
  const [show, setShow] = useState(false);
  const ref = useRef();
  useEffect(() => {
    setShow(false);
  }, [language]);
  useEffect(() => {
    const checkOutSideClick = (e) => {
      if (show && ref.current && !ref.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", checkOutSideClick);

    return () => {
      document.removeEventListener("mousedown", checkOutSideClick);
    };
  }, [show]);

  return (
    <div>
      <div className="relative" onClick={() => setShow(true)}>
        <img
          src={language === "fa" ? faFlag : usFlag}
          alt="English"
          className="rounded-full w-8 h-8 cursor-pointer"
        />
        <div
          ref={ref}
          className={`absolute w-[140px] h-auto mt-2 bg-slate-600 rounded-lg p-1 ${
            show ? "lng_show" : "lng_hide"
          }`}
        >
          <a
            className="flex items-center justify-star cursor-pointer p-2 gap-2 lng_hover mb-2 text-right"
            onClick={() => changeLanguage("en")}
          >
            <img src={usFlag} alt="English" className="w-7 h-7 rounded-full" />
            <span>English</span>
          </a>
          <a
            className="flex items-center justify-start cursor-pointer gap-2 p-2 lng_hover  text-right"
            onClick={() => changeLanguage("fa")}
          >
            <img src={faFlag} alt="Farsi" className="w-7 h-7 rounded-full" />
            <span>فارسی</span>
          </a>
        </div>
      </div>
    </div>
  );
};
export default ChangeLanguage;
