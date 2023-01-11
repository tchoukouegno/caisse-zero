/***
 *page qui gere l installation du compte de l entreprise avec son logos
 */
import "../css/acess.css";
import "../css/compteZero.css";
import { Footer } from "../components/Footer.js";
import { ImgLogos } from "../components/ImgLogos.js";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
export function CompteZero() {
  const contenairimg = {
    width: "100%",
    height: "250px",
    objectFit: "cover",
  };
  const contenairlogo = {
    position: "absolute",
    right: "20px",
    top: "55px",
    width: "150px",
    height: "150px",
    objectFit: "cover",
    boxShadow: " 1px 13px 24px -22px rgba(0,0,0,0.9)",
    borderRadius: "50%",
  };
  const footernav = {
    display: "flex",
    flexDirection: "column",
    gap: "50px",
    background: "orange",
    height: "150px",
    padding: "50px",
    transform: "translate3d(0,190px,0)",
  };
  const [file, setFile] = useState();

  const handleChanges = (e) => {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <div className="contenair">
      <ImgLogos contenairimg={contenairimg} contenairlogo={contenairlogo} />
      <div className="createcompteZero">
        <div className="createcompteZeroLogos">
          <label>telecharger le logo de votre Entreprise</label>
          <input type="file" className="fileinput" onChange={handleChanges} />
        </div>
        <img src={file} alt="" className="file" />
        <div className="nameOfstructure">
          <span>Nom de l’entreprise</span>
          <input className="nameOfstructurebutton" />
        </div>
        <div className="containDateLine">
          <span className="dateLine">Date limite utilisation 31/12/2022</span>
          <NavLink to="/handleuser">
            <button className="buttonlogos">validez creation</button>
          </NavLink>
        </div>
      </div>
      <Footer Footernav={footernav} />
    </div>
  );
}
