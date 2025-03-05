import Logo from "../../../assets/logo.svg";
export default function AppLogo() {
  return (
    <a href="./index.html">
      <img className="h-9" src={Logo} alt="Weather App" />
    </a>
  );
}
