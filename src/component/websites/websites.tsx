import { HashLink } from "react-router-hash-link";
import "./websites.scss";
import SoldiBank_IMG from "../../assets/Soldi Bank.png";
import Italiner_IMG from "../../assets/Website Italiner.jpg";

export default function Websites() {
  return (
    <div className="websites-div">
      <h2 className="websites-div__headline">Webseiten</h2>

      <HashLink to="/#projects" className="websites-div__link link">
        {" "}
        <button className="websites-div__back-button button">
          zurück{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="websites-div__icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>{" "}
      </HashLink>
      <div className="websites-div__websites-overview-div">
        <div className="websites-div__website-project">
          <p className="websites-div__project-headline">Solid Bank</p>
          <img src={SoldiBank_IMG} className="websites-div__img-half" alt="" />
          <a href="" className="link">
            <button className="websites-div__soldi-bank-button button">
              zu Solid Bank
            </button>
          </a>
        </div>

        <div className="websites-div__website-project">
          <p className="websites-div__project-headline">Italiner</p>
          <img src={Italiner_IMG} className="websites-div__img" alt="" />
          <a
            href="https://r-s-94.github.io/Italiener"
            className="link"
            target="_blank"
          >
            <button className="websites-div__italiener-button button">
              zum Italiener
            </button>
          </a>
        </div>
      </div>
    </div>
  );

  /*
   
  */
}
