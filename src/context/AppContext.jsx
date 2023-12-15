import { useTranslation } from "react-i18next";
import { appReducer } from "./AppReducer";
import { useContext, useReducer, createContext, useEffect } from "react";

const AppContext = createContext();
const initialState = {
  language: localStorage.getItem("language") || "fa",
  sideBar: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const { i18n } = useTranslation();
  const toggleSideBar = () => {
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };
  const changeLanguage = (language) => {
    dispatch({ type: "CHANGE_LANGUAGE", payload: language });
  };
  useEffect(() => {
    i18n.changeLanguage(state.language);
    localStorage.setItem("language", state.language);
    document.documentElement.dir = state.language === "fa" ? "rtl" : "ltr";
  }, [state.language]);
  return (
    <AppContext.Provider value={{ ...state, changeLanguage, toggleSideBar }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };

