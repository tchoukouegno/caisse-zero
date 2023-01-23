/**
 * page d'accueil des entreprise entrainnées
 */
import { ImgLogos } from "../components/ImgLogos.js";
import { Footer } from "../components/Footer.js";
import { Button } from "../components/Button.js";
import "../css/confirmationemail.css";
import "../css/entrepriseAccueil.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export function EntrepriseAccueil() {
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
    transform: "translate3d(0,150px,0)",
  };
  const button = {
    outline: "none",
    textTransform: "capitalize",
    fontSize: "1.3rem",
    padding: "15px 23px",
    display: "flex",
    borderRadius: "15px",
    cursor: "pointer",
    color: "orange",
  };
  let loginid = JSON.parse(localStorage.getItem("firstinscription"));
  console.log(loginid);

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

  return (
    <div className="contenair">
      <ImgLogos contenairimg={contenairimg} contenairlogo={contenairlogo} />
      <h1 className="entrepriseh1">
        bienvenue veuillez consulter vos différentes entreprises crées
      </h1>
      <NavLink to="/compteZeroExistant">
        <button className="buttonEntrepriseh1">cliquez moi</button>
      </NavLink>
      <Footer Footernav={footernav} />
    </div>
  );
}
