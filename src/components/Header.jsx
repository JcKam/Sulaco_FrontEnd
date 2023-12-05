import { useNavigate, Link } from "react-router-dom";
// CSS
import "./header.scss";
const Header = () => {
  return (
    <header role="banner" className="debug header">
      <h1>Sulaco Project</h1>

      <Link to="/signup" className="button button-secondary">
        S'inscrire
      </Link>
    </header>
  );
};

export default Header;
