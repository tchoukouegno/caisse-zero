/*****
 * component that manages the navbar of the pages
 */

import flecheMain from "../images/flecheMain.svg";
import up from "../images/up.svg";
import logoCaisse from "../images/logoCaisse.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export function NavBar() {
  // const [showed, setShowed] = useState(false);

  // const contenairimg ={

  //   width: '100%',
  //   height: '100%',
  //   objectFit: 'cover',
  //   borderRadius: '15px'

  // }
  // const contenairlogo ={
  //   position: 'absolute',
  //   left: '20px',
  //   top: '20px',
  //   width: '300px',
  //   height: '300px',
  //   objectFit: 'cover',
  //   boxShadow:' 1px 13px 24px -22px rgba(0,0,0,0.9)',
  //   borderRadius: '50%',

  // }
  return (
    <div className="contenair">
      {/* <ImgLogos contenairimg={contenairimg} contenairlogo={contenairlogo} /> */}
      {/* <img src={logoCaisse} alt="" /> */}
      {/* <div className="navlink">
        <NavLink to="/" className="accueil">
          ACCUEIL
        </NavLink>
        <NavLink to="/controls" className="accueil">
          Qui sommes-nous
        </NavLink>
        <NavLink to="/contactCaisse" className="accueil">
          Nous contacter
        </NavLink>
        <NavLink to="/commentaire" className="accueil">
          Ce qu 'ils disent de nous
        </NavLink>
        <NavLink className="accueil">Pricing...</NavLink>
        <img
          src={flecheMain}
          alt=""
          className="flecheMain"
          style={showed ? { display: "none" } : { display: "block" }}
          onClick={(e) => setShowed(true)}
        />
        <img
          src={up}
          alt=""
          className="flecheUp"
          style={showed ? { display: "block" } : { display: "none" }}
          onClick={(e) => setShowed(false)}
        />
        <div
          className="blocFlecheMain"
          style={showed ? { display: "block" } : { display: "none" }}
        >
          <NavLink to="/Inscription" className="connexion">
            <p className="brown">Se connecter</p>
          </NavLink>
          <NavLink to="/" className="deconnexion">
            <p className="brown">Se deconnecter</p>
          </NavLink>
        </div>
      </div> */}
    </div>
  );
}
