import { useEffect } from "react";

export default function Profile() {
  useEffect(() => {
    document.title = "Profile";
  }, []);

  return (
    <>
      <section className="section">
        <h1 className="section-title">Profile</h1>
        <p className="section-description">
          My name is Farhan Adib, im a newbie at programming
        </p>
      </section>
    </>
  );
}
