/****
 * page qui permet d acceder directement a son entreprise deja creer
 */

import "../css/acess.css";
import axios from "axios";
import "../css/compteZero.css";
import "../css/compteZeroExistant.css";
import "../css/home.css";
import flecheMain from "../images/flecheMain.svg";
import { Footer } from "../components/Footer.js";
import { NavLink } from "react-router-dom";
import { ImgLogos } from "../components/ImgLogos.js";

export function CompteZeroExistant() {
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
    transform: "translate3d(0,130px,0)",
  };

  let loginid = JSON.parse(localStorage.getItem("firstinscription"));

  axios
    .get(
      `https://caisse0.ubix-group.com/public/index.php/api/caisse/${loginid.id}`,
      {}
    )
    .then(function (response) {
      console.log(response.data);
      window.localStorage.setItem(
        "Response",
        JSON.stringify({
          response: response.data,
        })
      );
    });

  let responseData = JSON.parse(localStorage.getItem("Response"));

  return (
    <div className="contenair">
      <ImgLogos contenairimg={contenairimg} contenairlogo={contenairlogo} />
      <div className="compteZeroExistant">
        <div className="compteZeroExistantstructure">
          <span className="titlecompteZeroExistantstructure">
            Sélectionnez parmi vos applications
          </span>
          <div className="logosImg">
            <input className="nameOfstructurebutton" value={loginid.email} />
            {/* <img src={flecheMain} alt="" className="nameOfstructurebuttonimg" /> */}

            {responseData.response.map((card) => {
              console.log(card);
              return (
                <div className="containerEntreprise" key={card.id}>
                  <span>{card.raison_social}</span>
                </div>
              );
            })}
          </div>
        </div>
        <NavLink to="/handleuserr">
          <button className="buttoncompteZeroExistant">Accedez</button>
        </NavLink>
        <button className="buttoncompteZeroExistant">
          Ajouter un autre utilisateur
        </button>
      </div>
      <Footer Footernav={footernav} />
    </div>
  );
}
