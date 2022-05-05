import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact";
  }, []);

  return (
    <>
      <section className="section">
        <h1 className="section-title">Contact Me</h1>
        <p className="section-description">Here's my contact list:</p>
        <ul>
          <li>Whatsapp: 085162746***</li>
          <li>Email: muhammadfarhan2880@gmail.com</li>
          <li>
            <a href="https://www.facebook.com/Farhan.Zixvy/">Facebook</a>
          </li>
          <li>
            <a href="https://www.instagram.com/zixvy46/">Instagram</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/farhan-adib-a0a9b5a9/">
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
