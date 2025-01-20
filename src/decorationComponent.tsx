import "./decorationComponent.scss";
import DecorationIMG1 from "./assets/Programmierbild 2.jpg";
import DecorationIMG2 from "./assets/technology-7111804_640.jpg";
import DecorationIMG3 from "./assets/file-KG3paS7JjpkgXfh2EsMiYM.webp";

export default function DecorationComponent() {
  return (
    <section className="decoration-section">
      <img src={DecorationIMG1} className="decoration-section__img" alt="" />
      <img src={DecorationIMG2} className="decoration-section__img" alt="" />
      <img src={DecorationIMG3} className="decoration-section__img" alt="" />
    </section>
  );
}
