import "./contact.scss";

export default function Contact() {
  return (
    <section className="contact-section">
      <h2 className="contact-section__headline">Kontakt</h2>
      <div className="contact-section__contact-div">
        <h3 className="contact-section__contact-div-headline">Noch Fragen?</h3>
        <p className="contact-section__text">
          Haben Sie noch Fragen, dann schreiben Sie mir einfach per Mail.
        </p>
        <p className="contact-section__mail-address">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="contact-section__icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>

          <a
            href="mailto:richter-websoftware@web.de"
            target="_blank"
            className="contact-section__link"
          >
            richter-websoftware
            <wbr />
            @web.de
          </a>
        </p>
      </div>

      <p>&copy; richter-websoftware.de</p>

      <a href="#oben" className="contact-section__to-top link">
        nach oben
      </a>
    </section>
  );
}
