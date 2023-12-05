import { useNavigate, Link } from "react-router-dom";
// CSS
import "./footer.scss";
const Footer = () => {
  return (
    <footer role="contentinfo" className="debug2 footer">
      <p>2024 - ArtWork by C:kam</p>
      <div className="d-flex flex-column">
        <p className="text-lead margin-reset">Référenciels</p>
        <ul className="list-style-none">
          <li>WCAG</li>
          <li>RGAA</li>
          <li>RGESN</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
