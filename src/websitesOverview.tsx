import { Link } from "react-router-dom";
import "./websitesOverview.scss";
import SoldiBank_IMG from "./assets/Soldi Bank.png";
import Italiner_IMG from "./assets/Website Italiner.jpg";

export default function WebsitesOverviewComponent() {
  return (
    <div className="websites-overview-div">
      <h3 className="websites-overview-div__headline">Webseiten</h3>
      <div className="websites-overview-div__websites-overview-div">
        <img
          src={SoldiBank_IMG}
          className="websites-overview-div__img--half-screen"
          alt=""
        />
        <img src={Italiner_IMG} className="websites-overview-div__img" alt="" />
      </div>
      <Link to="websites" className="websites-overview-div__link link">
        <button className="websites-overview-div__button button">
          zu den Webseiten
        </button>
      </Link>
    </div>
  );
}
