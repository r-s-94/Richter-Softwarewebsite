import { HashLink } from "react-router-hash-link";
import "./web-aplication.scss";
import NotizApp_IMG from "../../assets/Web-Aplication Notiz-App.jpg";
import WitzeApp_IMG from "../../assets/Web-Apclication Witze-App.jpg";
import WetterApp_IMG from "../../assets/Web-Aplication Wetter-App.jpg";
import OnlineShop_IMG from "../../assets/Web-Aplication Online-Shop.jpg";
import CRM_Program_Employees_IMG from "../../assets/CRM-Progarmm Mitarbeiter.png";
import CRM_Program_Clients_IMG from "../../assets/CRM-Programm Auftraggeber.png";
import CRM_Program_Orders_IMG from "../../assets/CRM-Programm Aufträge.png";
import CRM_Program_Companyreport_IMG from "../../assets/CRM-Programm Bilanz.png";

export default function WebAplications() {
  return (
    <div className="web-aplications-div">
      <h2 className="web-aplications-div__headline">
        Web-
        <wbr />
        Anwendungen
      </h2>
      <HashLink to="/#projects" className="web-aplications-div__link link">
        {" "}
        <button className="web-aplications-div__back-button button">
          zurück{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="web-aplications-div__icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>{" "}
      </HashLink>

      <div className="web-aplications-div__web-aplications-overview-div">
        <div className="web-aplications-div__small-web-aplication-div">
          {" "}
          <div className="web-aplications-div__web-aplication-project">
            <p className="web-aplications-div__project-headline">Notiz-App</p>
            <img
              src={NotizApp_IMG}
              className="web-aplications-div__img"
              alt=""
            />
            <a
              href="https://r-s-94.github.io/Notiz-App"
              target="_blank"
              className="link"
            >
              <button className="web-aplications-div__note-button button">
                zur Notiz-App
              </button>
            </a>
          </div>
          <div className="web-aplications-div__web-aplication-project">
            <p className="web-aplications-div__project-headline">Witze-App</p>
            <img
              src={WitzeApp_IMG}
              className="web-aplications-div__img"
              alt=""
            />
            <a
              href="https://r-s-94.github.io/Witze-App"
              target="_blank"
              className="link"
            >
              <button className="web-aplications-div__joke-button button">
                zur Witze-App
              </button>
            </a>
          </div>
          <div className="web-aplications-div__web-aplication-project">
            <p className="web-aplications-div__project-headline">Wetter App</p>
            <img
              src={WetterApp_IMG}
              className="web-aplications-div__img"
              alt=""
            />
            <a
              href="https://r-s-94.github.io/Wetter-App"
              target="_blank"
              className="link"
            >
              <button className="web-aplications-div__weather-button button">
                zur Wetter App
              </button>
            </a>
          </div>
          <div className="web-aplications-div__web-aplication-project">
            <p className="web-aplications-div__project-headline">Online-Shop</p>
            <img
              src={OnlineShop_IMG}
              className="web-aplications-div__img"
              alt=""
            />
            <a
              href="https://r-s-94.github.io/Online-Shop"
              target="_blank"
              className="link"
            >
              <button className="web-aplications-div__online-shop-button button">
                zur Online-Shop
              </button>
            </a>
          </div>
        </div>

        <div className="web-aplications-div__big-web-aplication-div">
          <div className="web-aplications-div__web-aplication-project">
            <p className="web-aplications-div__project-headline">
              CRM-Programm
            </p>
            <div className="web-aplications-div__img-div">
              {" "}
              <img
                src={CRM_Program_Employees_IMG}
                className="web-aplications-div__crm-img"
                alt=""
              />
              <img
                src={CRM_Program_Clients_IMG}
                className="web-aplications-div__crm-img"
                alt=""
              />
              <img
                src={CRM_Program_Orders_IMG}
                className="web-aplications-div__crm-img"
                alt=""
              />
              <img
                src={CRM_Program_Companyreport_IMG}
                className="web-aplications-div__crm-img"
                alt=""
              />
            </div>

            <a
              href="https://r-s-94.github.io/CRM-Verwaltungsprogramm"
              target="_blank"
              className="link"
            >
              <button className="web-aplications-div__crm-program-button button">
                zum CRM-Programm
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  /* 
  
  */
}
