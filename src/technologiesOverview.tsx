import { Link } from "react-router-dom";
import "./technologiesOverview.scss";
import HTML_LOGO from "./assets/html-Logo.png";
import JavaScript_LOGO from "./assets/javascript-Logo.png";
import React_LOGO from "./assets/react-Logo.png";
import Vite_LOGO from "./assets/vite-Logo.svg";
import GitHub_LOGO from "./assets/github-Logo.svg";
import SupaBase_LOGO from "./assets/supabase-logo.png";

export default function TechnologiesOverview() {
  return (
    <section id="technologies" className="technology-section">
      <h2 className="technology-section__headline">Technologien</h2>

      <div className="technology-section__technology-div">
        <div className="technology-section__markup-div">
          <p className="technology-section__text">HTML</p>
          <img src={HTML_LOGO} alt="" className="technology-section__img" />
        </div>

        <div className="technology-section__javascript-div">
          <p className="technology-section__text">JavaScript</p>
          <img
            src={JavaScript_LOGO}
            alt=""
            className="technology-section__img"
          />
        </div>

        <div className="technology-section__framework-div">
          <p className="technology-section__text">React Vite</p>
          <div className="technology-section__subdivision-div">
            <img src={React_LOGO} alt="" className="technology-section__img" />
            <img src={Vite_LOGO} alt="" className="technology-section__img" />
          </div>
        </div>

        <div className="technology-section__github-div">
          <p className="technology-section__text">GitHub</p>
          <img src={GitHub_LOGO} alt="" className="technology-section__img" />
        </div>

        <div className="technology-section__supabase-div">
          <p className="technology-section__text">SupaBase</p>
          <img src={SupaBase_LOGO} alt="" className="technology-section__img" />
        </div>
      </div>

      <Link to="/technologies" className="technology-section__link link">
        {" "}
        <button className="technology-section__button button">
          zu den Technologien
        </button>{" "}
      </Link>
    </section>
  );
}
