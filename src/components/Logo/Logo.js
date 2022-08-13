import "./Logo.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" title="На главную" className="logo">
      <img className="logo__img" src={logo} alt="Логотип" loading="lazy" />
    </Link>
  );
};

export default Logo;
