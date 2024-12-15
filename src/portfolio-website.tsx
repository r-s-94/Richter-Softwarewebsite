import "./portfolio-website.scss";
import PortfoliowebsiteIMG from "./assets/Portfoliowebsite-Screenshot.png";

export default function PortfolioWebsiteOverviewComponent() {
  return (
    <div className="portfolio-website-div">
      <h3 className="portfolio-website-div__headline">
        Portfolio-
        <wbr />
        Webseite
      </h3>
      <img
        src={PortfoliowebsiteIMG}
        className="portfolio-website-div__img"
        alt=""
      />
      <a
        href="https://r-s-94.github.io/Richter-Websoftware/"
        target="_blank"
        className="portfolio-website-div__link link"
      >
        <button className="portfolio-website-div__button button">
          zur Portfoliowebseite
        </button>
      </a>
    </div>
  );
}
