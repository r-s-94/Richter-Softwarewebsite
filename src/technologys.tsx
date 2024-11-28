import "./technologys.scss";
import HTML_LOGO from "./assets/html-Logo.png";
import CSS_LOGO from "./assets/css-Logo.png";
import SCSS_LOGO from "./assets/scss-Logo sass-Logo.png";
import JavaScript_LOGO from "./assets/javascript-Logo.png";
import TypeScript_LOGO from "./assets/typescript-Logo.png";
import React_LOGO from "./assets/react-Logo.png";
import Vite_LOGO from "./assets/vite-Logo.svg";
import Git_LOGO from "./assets/git-Logo.svg";
import GitHub_LOGO from "./assets/github-Logo.svg";

export default function Technologys() {
  return (
    <section className="technology-section">
      <h2 className="technology-section__headline">Technologien</h2>

      <div className="technology-section__technology-div">
        <div className="technology-section__markup-language-div">
          <h3 className="technology-section__technology-headline">
            Markup-Sprachen
          </h3>
          <div className="technology-section__subdivision-div">
            <div className="technology-section__html-div">
              <span className="technology-section__text">HTML</span>
              <img src={HTML_LOGO} className="technology-section__img" alt="" />
            </div>

            <div className="technology-section__css-div">
              <span className="technology-section__text">CSS</span>
              <img src={CSS_LOGO} className="technology-section__img" alt="" />
            </div>

            <div className="technology-section__scss-div">
              <span className="technology-section__text">SCSS</span>
              <img src={SCSS_LOGO} className="technology-section__img" alt="" />
            </div>
          </div>
        </div>

        <div className="technology-section__programming-language-div">
          <h3 className="technology-section__technology-headline">
            Programmier
            <wbr />
            sprache
          </h3>
          <div className="technology-section__subdivision-div">
            <div className="technology-section__javascript-div">
              <span className="technology-section__text">Javascript</span>
              <img
                src={JavaScript_LOGO}
                className="technology-section__img"
                alt=""
              />
            </div>
            <div className="technology-section__typescript-div">
              <span className="technology-section__text">Typescript</span>
              <img
                src={TypeScript_LOGO}
                className="technology-section__img"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="technology-section__framework-div">
          <h3 className="technology-section__technology-headline">Framework</h3>
          <div className="technology-section__react-div">
            <span className="technology-section__text">React + Vite</span>
            <div className="technology-section__img-div">
              <img
                src={React_LOGO}
                className="technology-section__img"
                alt=""
              />

              <img src={Vite_LOGO} className="technology-section__img" alt="" />
            </div>
          </div>
        </div>

        <div className="technology-section__extra-div">
          <h3 className="technology-section__technology-headline">Extras</h3>
          <div className="technology-section__git-div">
            <span className="technology-section__text">Git + Github</span>
            <div className="technology-section__img-div">
              <img src={Git_LOGO} className="technology-section__img" alt="" />

              <img
                src={GitHub_LOGO}
                className="technology-section__img"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
