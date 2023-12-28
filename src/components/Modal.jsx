import { XMarkIcon } from "@heroicons/react/24/solid";
import { createPortal } from "react-dom";

const Modal = ({ isOpen, title, open, children, body }) => {
  return (
    <>
      {isOpen &&
        createPortal(
          <div
            className="w-full h-screen absolute bg-blue-500/10 top-0 z-10 flex flex-col items-center justify-center backdrop-blur-sm"
            onClick={() => open(false)}
          >
            <div
              className="w-[320px] md:w-[450px] flex flex-col items-center justify-center bg-violet-900 rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between w-full border-b-2 border-white/10 py-2 px-2 ">
                <h4 className="font-bold text-white text-lg">{title}</h4>
                <button
                  onClick={() => open(false)}
                  type="button"
                  className="p-1 rounded-md hover:p-1 hover:rounded-md hover:bg-gray-400 transition-all duration-300"
                >
                  <XMarkIcon className="w-6 h-6 text-white" />
                </button>
              </div>
              <div className="py-12 text-right w-full px-2 text-white font-semibold border-b-2 border-white/10">
                <h4>{body}</h4>
              </div>
              <div className="w-full px-2 py-4 flex items-center justify-end gap-2">
                {children}
              </div>
            </div>
          </div>,
          document.getElementById("modal")
        )}
    </>
  );
};
export default Modal;
