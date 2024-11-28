import "./Projects.scss";
import WebsitesOverviewComponent from "./websitesOverview";
import WebAplicationsOverviewComponent from "./web-aplicationsOverview";
import PortfolioWebsiteOverviewComponent from "./portfolio-website";
//import Service from "./service";

export default function ProjectsComponent() {
  return (
    <section id="projects" className="project-section">
      <h2 className="project-section__headline">Projekte</h2>
      <div className="project-section__project-overview">
        {" "}
        <WebsitesOverviewComponent />
        <WebAplicationsOverviewComponent />
      </div>
      <PortfolioWebsiteOverviewComponent />
    </section>
  );

  /*
  <Service />
  
  */
}
