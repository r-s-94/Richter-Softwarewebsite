import { Link } from "react-router-dom";
import "./web-aplicationsOverview.scss";
import NotizApp_IMG from "./assets/Web-Aplication Notiz-App.jpg";
import WetterApp_IMG from "./assets/Web-Aplication Wetter-App.jpg";
import OnlineShop_IMG from "./assets/Web-Aplication Online-Shop.jpg";

export default function WebAplicationsOverviewComponent() {
  return (
    <div className="web-aplications-overview-div">
      <h3 className="web-aplications-overview-div__headline">
        Web-
        <wbr />
        Anwendungen
      </h3>
      <div className="web-aplications-overview-div__web-aplications-overview-div">
        <img
          src={NotizApp_IMG}
          className="web-aplications-overview-div__img"
          alt=""
        />
        <img
          src={WetterApp_IMG}
          className="web-aplications-overview-div__img"
          alt=""
        />
        <img
          src={OnlineShop_IMG}
          className="web-aplications-overview-div__img"
          alt=""
        />
      </div>
      <Link
        to="web-aplications"
        className="web-aplications-overview-div__link link"
      >
        {" "}
        <button className="web-aplications-overview-div__button button">
          zu den Web-Anwendungen
        </button>{" "}
      </Link>
    </div>
  );
}
