import "./footer.scss";

export default function Footer() {
  return (
    <section id="footer" className="footer-section">
      <div className="footer-section__impressum-div">
        <div className="footer-section__person-div">
          <p className="footer-section__person">Sven Richter</p>
          <p className="footer-section__address-part1">Wartislawstraße 10</p>
          <p className="footer-section__address-part2">18437 Stralsund</p>
          <p className="footer-section__country">Deutschland</p>
        </div>

        <div className="footer-section__contact-div">
          <p className="foooter-section__mail">
            E-Mail: richter-websoftware@web.de
          </p>
        </div>
        <p className="footer-section__copy-right">
          &copy; richter-websoftware.de
        </p>
      </div>

      <a href="#oben" className="footer-section__to-top link">
        nach oben
      </a>
    </section>
  );
}
