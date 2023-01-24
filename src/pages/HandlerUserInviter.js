import "../css/acess.css";
import "../css/handleuser.css";
import "../css/compteZero.css";
import { Footer } from "../components/Footer.js";
import { EmailButton } from "../components/EmailButton";
import { ImgLogos } from "../components/ImgLogos.js";
import { NavLink } from "react-router-dom";
import "../css/home.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export function HandlerUserInviter() {
  let loginid = JSON.parse(localStorage.getItem("firstinscription"));
  let raisonsocial = JSON.parse(localStorage.getItem("raisonsociale"));
  let emailInviter = JSON.parse(localStorage.getItem("Email"));
  console.log(emailInviter);
  //   let roleInvite = JSON.parse(localStorage.getItem("roleInvite"));
  //   console.log(roleInvite);
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

  return (
    <div className="contenair">
      <ImgLogos contenairimg={contenairimg} contenairlogo={contenairlogo} />
      <div className="handleuser">
        <div className="sous-handleuser">
          {/* <h1 className="sous-handleuserh1">AJOUTER UN AUTRE UTILISATEUR</h1> */}
          <EmailButton
            email={emailInviter.email}
            entreprise={raisonsocial.raison_social}
          />
        </div>
        <h2>Détails des autorisations données de l inviter</h2>
        <h2>
          les données ci dessous sont les acces de l'invite sur la dite
          entreprise
        </h2>
        <table>
          <thead>
            <tr>
              <th>CZ</th>
              <th>Mail</th>
              <th>Admin</th>
              <th>Compta</th>
              <th>Stock </th>
              <th>Com</th>
              <th>Paie</th>
              <th>Immos</th>
              <th>Budget</th>
              <th>Rap</th>
            </tr>
          </thead>
          <tr>
            <td data-label="CZ">{raisonsocial.raison_social}</td>
            <td className="tdemail" data-label="Mail">
              {loginid.email}
            </td>
            <td className="td" data-label="Admin">
              oui/non
            </td>
            <td data-label="Compta">Non/Visual/M odif</td>
            <td data-label="Stock">Non/Vi sual/M odif</td>
            <td data-label="Com">Non/Vi sual/M odif</td>
            <td data-label="Paie">Non/Vi sual/M odif</td>
            <td data-label="Immos">Non/Vi sual/M odif</td>
            <td data-label="Budget">Non/Vi sual/M odif</td>
            <td data-label="Rap">Non/Vi sual/M odif</td>
          </tr>

          <tr>
            <td data-label="CZ">{raisonsocial.raison_social}</td>
            <td className="tdemail" data-label="Mail">
              {emailInviter.email}
            </td>
            <td data-label="Admin">{emailInviter.admin}</td>
            <td data-label="Compta">{emailInviter.compta}</td>
            <td data-label="Stock">{emailInviter.stock}</td>
            <td data-label="Com">{emailInviter.com}</td>
            <td data-label="Paie">{emailInviter.paie}</td>
            <td data-label="Immos">{emailInviter.immos}</td>
            <td data-label="Budget">{emailInviter.budget}</td>
            <td data-label="Rap">{emailInviter.rap}</td>
          </tr>
        </table>
        <NavLink to="/MenuAplication" className="buttontable">
          suivant
        </NavLink>
      </div>
      <Footer Footernav={footernav} />
    </div>
  );
}
