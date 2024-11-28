import "./animation.scss";

export default function AnimationComponent() {
  return (
    <div className="box">
      <div id="div-animation" className="front">
        Vorne
      </div>
      <div id="div-animation" className="back">
        Hinten
      </div>
      <div id="div-animation" className="left">
        Links
      </div>
      <div id="div-animation" className="right">
        Rechts
      </div>
      <div id="div-animation" className="top">
        Oben
      </div>
      <div id="div-animation" className="bottom">
        Unten
      </div>
    </div>
  );
}
