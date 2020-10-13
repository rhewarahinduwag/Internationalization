import React from "react";
//import logo from "./logo.svg";
import "./App.css";

/*
 * Translate the content using the 'HOC'
 */
import { withTranslation } from "react-i18next";
import i18n from "./i18n";

function App({ t }) {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="container">
      <h1 className="font">Internationalization</h1>
      <button onClick={() => changeLanguage("en")} className="button">
        English
      </button>
      <button onClick={() => changeLanguage("de")} className="button2">
        German
      </button>
      <button onClick={() => changeLanguage("it")} className="button3">
        Italian
      </button>
      <button onClick={() => changeLanguage("cn")} className="button4">
        Chineese
      </button>
      <button onClick={() => changeLanguage("id")} className="button5">
        Indonesian
      </button>
      <h1 className="font1">{t("title")}</h1>
      <h2 className="font2">{t("description.para1")}</h2>
      <h2 className="font2">{t("description.para2")}</h2>
    </div>
  );
}

export default withTranslation()(App);
