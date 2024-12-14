import { HashLink } from "react-router-hash-link";
import HTML_LOGO from "../../assets/html-Logo.png";
import CSS_LOGO from "../../assets/css-Logo.png";
import SCSS_LOGO from "../../assets/scss-Logo sass-Logo.png";
import JavaScript_LOGO from "../../assets/javascript-Logo.png";
import TypeScript_LOGO from "../../assets/typescript-Logo.png";
import React_LOGO from "../../assets/react-Logo.png";
import Vite_LOGO from "../../assets/vite-Logo.svg";
import Git_LOGO from "../../assets/git-Logo.svg";
import GitHub_LOGO from "../../assets/github-Logo.svg";
import SupaBase_LOGO from "../../assets/supabase-logo.png";
import "./technologies.scss";

export default function Technologies() {
  return (
    <div className="technology-div">
      <h3 className="technology-div__headline">Technologien</h3>
      <HashLink to="/#technologies" className=" link">
        {" "}
        <button className="technology-div__back-button button">
          zurück{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="technology-div__icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>{" "}
      </HashLink>

      <div className="technology-div__technology-overview-div">
        <div className="technology-div__markup-language-div">
          <h3 className="technology-div__technology-headline">
            Markup-Sprachen
          </h3>
          <div className="technology-div__subdivision-div">
            <div className="technology-div__html-div">
              <span className="technology-div__text">HTML</span>
              <img src={HTML_LOGO} className="technology-div__img" alt="" />
            </div>

            <div className="technology-div__css-div">
              <span className="technology-div__text">CSS</span>
              <img src={CSS_LOGO} className="technology-div__img" alt="" />
            </div>

            <div className="technology-div__scss-div">
              <span className="technology-div__text">SCSS</span>
              <img src={SCSS_LOGO} className="technology-div__img" alt="" />
            </div>
          </div>
        </div>

        <div className="technology-div__programming-language-div">
          <h3 className="technology-div__technology-headline">
            Programmier
            <wbr />
            sprache
          </h3>
          <div className="technology-div__subdivision-div">
            <div className="technology-div__javascript-div">
              <span className="technology-div__text">Javascript</span>
              <img
                src={JavaScript_LOGO}
                className="technology-div__img"
                alt=""
              />
            </div>
            <div className="technology-div__typescript-div">
              <span className="technology-div__text">Typescript</span>
              <img
                src={TypeScript_LOGO}
                className="technology-div__img"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="technology-div__framework-div">
          <h3 className="technology-div__technology-headline">Framework</h3>
          <div className="technology-div__react-div">
            <span className="technology-div__text">React + Vite</span>
            <div className="technology-div__img-div">
              <img src={React_LOGO} className="technology-div__img" alt="" />

              <img src={Vite_LOGO} className="technology-div__img" alt="" />
            </div>
          </div>
        </div>

        <div className="technology-div__version-control-div">
          <h3 className="technology-div__technology-headline">
            Versions
            <wbr />
            kontrolle
          </h3>
          <div className="technology-div__git-div">
            <span className="technology-div__text">Git + Github</span>
            <div className="technology-div__img-div">
              <img src={Git_LOGO} className="technology-div__img" alt="" />

              <img src={GitHub_LOGO} className="technology-div__img" alt="" />
            </div>
          </div>
        </div>

        <div className="technology-div__backend-service-div">
          <h3 className="technology-div__technology-headline">
            Backend-
            <wbr />
            Service
          </h3>
          <div className="technology-div__supabase-div">
            <span className="technology-div__text">SupaBase</span>
            <div className="technology-div__img-div">
              <img src={SupaBase_LOGO} alt="" className="technology-div__img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
