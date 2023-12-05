import { Link } from "react-router-dom";

import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar" role="navigation">
      <ul className="d-flex list-style-none">
        <li>
          <Link className="navbar_item" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="navbar_item" to="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link className="navbar_item" to="/reactCounter">
            Ex React counter
          </Link>
        </li>
        <li>
          <Link className="navbar_item" to="/wcag">
            Wcag
          </Link>
        </li>
        <li>
          <Link className="navbar_item" to="/Rgaa">
            Rgaa
          </Link>
        </li>
        <li>
          <Link className="navbar_item" to="/Rgesn">
            Rgesn
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
