import BackgroundImage from "./BackgroundImage";

export default function Header() {
  return (
    <header>
      <BackgroundImage />
      <h1 className="first-heading">
        <span className="first-heading--thin">Word</span> Analytics
      </h1>
    </header>
  );
}
