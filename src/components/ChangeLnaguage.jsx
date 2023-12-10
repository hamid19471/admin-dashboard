import usFlag from "../assets/images/us.png";
import faFlag from "../assets/images/fa.png";
import { useEffect, useRef, useState } from "react";

const ChangeLanguage = () => {
  const [show, setShow] = useState(false);
  const ref = useRef();
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
          src={usFlag}
          alt="English"
          className="rounded-full w-8 h-8 cursor-pointer"
        />
        <div
          ref={ref}
          className={`absolute w-[140px] h-auto mt-2 bg-slate-600 rounded-lg p-1 ${
            show ? "lng_show" : "lng_hide"
          }`}
        >
          <div className="flex items-center justify-star p-2 gap-2 lng_hover cursor-pointer mb-2 text-right">
            <img src={usFlag} alt="English" className="w-7 h-7 rounded-full" />
            <span>English</span>
          </div>
          <a className="flex items-center justify-start gap-2 p-2 lng_hover cursor-pointer text-right">
            <img src={faFlag} alt="Farsi" className="w-7 h-7 rounded-full" />
            <span>فارسی</span>
          </a>
        </div>
      </div>
    </div>
  );
};
export default ChangeLanguage;
