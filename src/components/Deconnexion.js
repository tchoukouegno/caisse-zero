/****
 * composant qui permet de se decomposer
 */

import flecheMain from "../images/flecheMain.svg";
import { useState, useEffect } from "react";
import "../css/deconnexion.css";
import { Navigate } from "react-router";
import { useNavigate } from "react-router-dom";
export function Deconnexion() {
  const [showed, setShowed] = useState(false);
  const navigate = useNavigate();
  let deconnect = document.querySelector(".paragrapheDeconnexion");
  //   function deconnect() {
  //     localStorage.clear();
  //     navigate("/");
  //   }
  //   useEffect(() => {
  //     deconnect();

  //     deconnect.addEvenListener("click", () => {
  //       localStorage.clear();
  //       navigate("/");
  //     });
  //);
  //   function deconnect() {
  //     let deconnect = document.querySelector(".paragrapheDeconnexion");
  //     console.log(true);
  //     localStorage.clear();
  //     // console.log(true);  navigate("/");
  //   }
  return (
    <div>
      <span
        className="clicked"
        style={showed ? { display: "none" } : { display: "block" }}
      >
        cliquer sur l 'icone
      </span>
      <img
        src={flecheMain}
        alt=""
        className="positionIcon"
        style={showed ? { display: "none" } : { display: "block" }}
        onClick={(e) => setShowed(true)}
      />
      <div
        className="blocDeconnexion"
        style={showed ? { display: "block" } : { display: "none" }}
      >
        <p className="paragrapheDeconnexion" onClick={deconnect}>
          Se deconnecter
        </p>
      </div>
    </div>
  );
}
