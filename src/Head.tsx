import "./Head.scss";
import LogoIMG from "./assets/Logo.webp";
import AnimationComponent from "./animation";
import DeveloperIMG from "./assets/Developer-IMG.jpg";

export default function HeadComponent() {
  return (
    <section className="head-section">
      <div className="head-section__welcome-div">
        {" "}
        <img src={LogoIMG} alt="" className="head-section__logo" />
        <h1 className="head-section__headline">
          Herzlich Willkommen <wbr />
          auf der <wbr />
          Softwarewebseite
          <br />
          von
          <br />
          Richter-Websoftware
        </h1>{" "}
        <AnimationComponent />
      </div>

      <div className="head-section__developer-div">
        <div className="head-section__text-and-link-div">
          <p className="head-section__text">
            Diese Softwarewebseite wurde erstellt von
            <br />
            <span className="head-section__name">Sven Matthias Richter</span>
            <br />
            <span className="head-section__titel">Frontend Webdeveloper</span>
          </p>
          <a href="#projects" className="head-section__link link">
            <button className="head-section__button button">
              zu den Projekten{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="head-section__icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                />
              </svg>
            </button>
          </a>
        </div>

        <img src={DeveloperIMG} alt="" className="head-section__img" />
      </div>
    </section>
  );
  /*     
  
  */
}
