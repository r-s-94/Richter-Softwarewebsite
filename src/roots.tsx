import HeadComponent from "./Head";
import ProjectsComponent from "./Projects";
import DecorationComponent from "./decorationComponent";
import TechnologiesOverview from "./technologiesOverview";
import Contact from "./contact";
import Nav from "./nav";
import Footer from "./footer";

export default function Roots() {
  return (
    <>
      <Nav />
      <HeadComponent />
      <DecorationComponent />
      <ProjectsComponent />
      <TechnologiesOverview />
      <Contact />
      <Footer />
    </>
  );
  /*  
      
  */
}
