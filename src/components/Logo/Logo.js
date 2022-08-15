import "./Logo.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

const Logo = ({className}) => {

  return (
    <Link to="/" title="На главную" className={`logo ${className}`}>
      <img className="logo__img" src={logo} alt="Логотип" loading="lazy" />
    </Link>
  );
};

export default Logo;
