import HeadComponent from "./Head";
import ProjectsComponent from "./Projects";
import DecorationComponent from "./decorationComponent";
import TechnologiesOverview from "./technologiesOverview";
import Contact from "./contact";
import Nav from "./nav";

export default function Roots() {
  return (
    <>
      <Nav />
      <HeadComponent />
      <DecorationComponent />
      <ProjectsComponent />
      <TechnologiesOverview />
      <Contact />
    </>
  );
  /*  
      
  */
}
