import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <>
      <section className="section">
        <h1 className="section-title">Welcome to my website</h1>
        <p className="section-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          euismod, urna eu tincidunt consectetur, nisl nunc consequat
          <br />
        </p>
      </section>
    </>
  );
}
