/****
 *composant qui gere le footer de caisse zero
 */
import "../css/buttonnav.css";
import star from "../images/star.svg";
import { NavLink } from "react-router-dom";
export function Footer({ Footernav }) {
  return (
    <div style={Footernav} className="Footernav">
      <div className="footernav">
        <div className="navfooter">
          <img src={star} alt="" />
          <NavLink to="/compteZero" className="navlink">
            Qui sommes-nous
          </NavLink>
        </div>
        <div className="navfooter">
          <img src={star} alt="" />
          <NavLink to="/compteZero" className="navlink">
            Nous contacter
          </NavLink>
        </div>
        <div className="navfooter">
          <img src={star} alt="" />
          <NavLink to="/compteZero" className="navlink">
            Ce que l on dit de nous
          </NavLink>
        </div>
      </div>
      <p className="footerpnav">© 2020 CAISSE-ZERO. All rights reserved</p>
    </div>
  );
}
