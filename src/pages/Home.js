/****
 * page that manages the home page of the zero cash site */

import "../css/inscription.css";
import "../css/formulaire.css";
import "../css/home.css";
import { Inscription } from "../components/Inscription.js";
import { ImgLogos } from "../components/ImgLogos.js";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function Home() {
  const navigate = useNavigate();
  const firstinscription = JSON.parse(localStorage.getItem("firstinscription"));
  // useEffect(() => {
  //   if (firstinscription.token) {
  //     return navigate("/comfirmationEmail");
  //   } else {
  //     navigate("/");
  //   }
  // });

  const contenairimg = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "15px",
  };
  const contenairlogo = {
    position: "absolute",
    left: "20px",
    top: "20px",
    width: "300px",
    height: "300px",
    objectFit: "cover",
    boxShadow: " 1px 13px 24px -22px rgba(0,0,0,0.9)",
    borderRadius: "50%",
  };
  return (
    <div className="contenair">
      <ImgLogos contenairimg={contenairimg} contenairlogo={contenairlogo} />
      <Inscription />
    </div>
  );
}
