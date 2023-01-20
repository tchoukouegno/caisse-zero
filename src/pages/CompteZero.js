/***
 *page qui gere l installation du compte de l entreprise avec son logos
 */
import "../css/acess.css";
import "../css/compteZero.css";
import "../css/formulaire.css";
import "../css/buttonnav.css";
import { Footer } from "../components/Footer.js";
import { EmailButton } from "../components/EmailButton";
import { ImgLogos } from "../components/ImgLogos.js";
import close from "../images/close.svg";
import up from "../images/up.svg";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/buttonnav.css";
import axios from "axios";
export function CompteZero() {
  const [showed, setShowed] = useState(false);
  const navigate = useNavigate();

  const initValues = {
    surname: "",
    email: "",
    phone: "",
    adresse: "",
    logos: "",
    raisonsociale: "",
    nif: "",
    rccm: "",
  };
  const [formValues, setFormValues] = useState(initValues);
  const [formErrors, setFormErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };
  window.localStorage.setItem(
    "raisonsociale",
    JSON.stringify({
      raison_social: formValues.raisonsociale,
    })
  );
  const handSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(formValues));
  };
  let loginid = JSON.parse(localStorage.getItem("firstinscription"));
  const validateForm = (values) => {
    const errors = {};
    let rejectEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!values.surname) {
      errors.surname = "veuillez remplir votre nom et prenom";
    }
    if (!values.email) {
      errors.email = "veuillez remplir de l email";
    } else if (!rejectEmail.test(values.email)) {
      errors.email = "mauvais format d email";
    }
    if (!values.phone) {
      errors.phone = "remplir votre numero";
    }
    if (!values.adresse) {
      errors.adresse = "veuillez mettre votrre adresse";
    }
    if (!values.logos) {
      errors.logos = "remplir le nom de votre logos";
    }
    if (!values.raisonsociale) {
      errors.raisonsociale = "veuillez remplir le nom de la structure";
    }
    if (!values.nif) {
      errors.nif = "veuillez remplir l 'immatriculation";
    }
    if (!values.rccm) {
      errors.rccm = "veuillez remplir votre rccm";
    }
    if (
      values.surname &&
      values.phone &&
      values.adresse &&
      values.logos &&
      values.raisonsociale &&
      values.nif &&
      values.rccm &&
      values.email &&
      !rejectEmail.test(values.email) === false
    ) {
      // console.log(loginid.token);
      const h = {
        nom_prenom: values.surname,
        telephone: values.phone,
        adresse: values.adresse,
        logo: values.logos,
        email: values.email,
        raison_social: values.raisonsociale,
        nif: values.nif,
        rccm: values.rccm,
        id: loginid.id,
        token: loginid.token,
      };
      console.log(h);
      axios
        .post("https://caisse0.ubix-group.com/public/index.php/api/caisse", {
          nom_prenom: values.surname,
          telephone: values.phone,
          adresse: values.adresse,
          logo: values.logos,
          email: values.email,
          raison_social: values.raisonsociale,
          nif: values.nif,
          rccm: values.rccm,
          id: loginid.id,
          token: loginid.token,
        })
        .then(function (response) {
          console.log(response);
          if (response.data.msg === "bien enregistrer") {
            window.localStorage.setItem(
              "firstinscription",
              JSON.stringify({
                raison_social: response.data.raison_social,
                email: response.data.email,
                id: loginid.id,
                token: loginid.token,
              })
            );
            return (
              alert(
                " felicitation vous etes actuellement administrateur de votre entreprise créee"
              ),
              navigate("/handleuser")
            );
          } else if (response.data.code === 405) {
            return (
              alert(" cette caisse existe deja"), navigate("/compteZeroNouveau")
            );
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      return navigate("/handleuser");
    }
    return errors;
  };
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
    transform: "translate3d(0,800px,0)",
    display: "block",
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
          <span>Telecharger le logo de votre Entreprise</span>
          <input type="file" className="fileinput" onChange={handleChanges} />
        </div>
        <EmailButton
          email={loginid.email}
          entreprise={formValues.raisonsociale}
        />
        <img src={file} alt="" className="file" />
        <div className="nameOfstructure">
          <span>veuillez cliquer sur ce bouton deroulant</span>
          <img
            src={up}
            alt=""
            className="infoentreprise"
            style={showed ? { display: "none" } : { display: "block" }}
            onClick={(e) => setShowed(true)}
          />

          <div
            className="connexioncreation"
            style={showed ? { display: "block" } : { display: "none" }}
          >
            <img
              src={close}
              alt=""
              className="close"
              style={showed ? { display: "block" } : { display: "none" }}
              onClick={(e) => setShowed(false)}
            />

            <form className="space" onSubmit={handSubmit}>
              <div className="space">
                <label htmlFor="email" className="label">
                  REPRESENTANT LEGAL
                </label>
                <input
                  type="text"
                  name="surname"
                  id="email"
                  placeholder="remplir le nom et prenom"
                  className="keyemail"
                  value={formValues.surname}
                  onChange={handleChange}
                />
              </div>
              <span className="formErrors">{formErrors.surname}</span>
              <div className="space">
                <label htmlFor="email" className="label">
                  EMAIL
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="remplir l'email"
                  className="keyemail"
                  value={formValues.email}
                  onChange={handleChange}
                />
              </div>
              <span className="formErrors">{formErrors.surname}</span>
              <div className="space">
                <label htmlFor="keyPassword" className="label">
                  TELEPHONE
                </label>
                <input
                  type="text"
                  name="phone"
                  id="keyPassword"
                  placeholder="remplir son numero"
                  className="password"
                  value={formValues.phone}
                  onChange={handleChange}
                />
              </div>
              <span className="formErrors">{formErrors.phone}</span>
              <div className="space">
                <label htmlFor="confirmkeyPassword" className="label">
                  ADRESSE
                </label>
                <input
                  type="text"
                  name="adresse"
                  id="confirmkeyPassword"
                  placeholder="remplir son adresse"
                  className="keyemail"
                  value={formValues.adresse}
                  onChange={handleChange}
                />
              </div>
              <span className="formErrors">{formErrors.adresse}</span>
              <div className="space">
                <label htmlFor="keyPassword" className="label">
                  SIGLE
                </label>
                <input
                  type="text"
                  name="logos"
                  id="keyPassword"
                  placeholder="remplir le nom du logos"
                  className="password"
                  value={formValues.logos}
                  onChange={handleChange}
                />
              </div>
              <span className="formErrors">{formErrors.logos}</span>
              <div className="space">
                <label htmlFor="keyPassword" className="label">
                  RAISON SOCIALE
                </label>
                <input
                  type="text"
                  name="raisonsociale"
                  id="keyPassword"
                  placeholder="nom officiel de l entreprise"
                  className="password"
                  value={formValues.raisonsociale}
                  onChange={handleChange}
                />
                <span className="formErrors">{formErrors.raisonsociale}</span>
              </div>
              <div className="space">
                <label htmlFor="keyPassword" className="label">
                  NIF
                </label>
                <input
                  type="text"
                  name="nif"
                  id="keyPassword"
                  placeholder="immatriculation"
                  className="password"
                  value={formValues.nif}
                  onChange={handleChange}
                />
              </div>
              <span className="formErrors">{formErrors.nif}</span>
              <div className="space">
                <label htmlFor="keyPassword" className="label">
                  RCCM
                </label>
                <input
                  type="text"
                  name="rccm"
                  id="keyPassword"
                  placeholder="remplir le rccm"
                  className="password"
                  value={formValues.rccm}
                  onChange={handleChange}
                />
              </div>
              <span className="formErrors">{formErrors.rccm}</span>

              <input
                type="submit"
                className="btn-submit"
                value="Valider la creation"
              />
            </form>
          </div>
        </div>
        <div className="containDateLine">
          <span className="dateLine">Date limite utilisation 31/12/2022</span>
        </div>
      </div>
      {/* <Footer Footernav={footernav} /> */}
    </div>
  );
}
{
}
