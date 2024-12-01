import "./service.scss";
import PasswordGenerator from "./component/password-generator/password-generator";

export default function Service() {
  return (
    <div className="service-div">
      <h2 className="service-div__headline">
        Dienst
        <wbr />
        leistungen
      </h2>
      <PasswordGenerator />
    </div>
  );
}
