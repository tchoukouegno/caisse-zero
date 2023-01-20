/**
 * composants qui permet de confirmer l email
 */
import { ImgLogos } from "../components/ImgLogos.js";
import { Footer } from "../components/Footer.js";
import { Button } from "../components/Button.js";
import "../css/confirmationemail.css";
import "../css/inscription.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../css/formulaire.css";
import "../css/enregistrementpassword.css";

export function EnregistrementPassword() {
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
  const navigate = useNavigate();

  const initValues = { password: "" };
  const [formValues, setFormValues] = useState(initValues);
  const [formErrors, setFormErrors] = useState({});
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validateForms(formValues));
  };

  const validateForms = (values) => {
    const errors = {};

    let passworD = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,36}$/;
    console.log(formValues.password);

    if (!values.password) {
      errors.password = "veuillez mettre un mot de passe";
    } else if (!passworD.test(values.password)) {
      errors.password = "mauvais format de mot de passe";
    }
    if (
      !values.password === false &&
      !passworD.test(values.password) === false
    ) {
      const idEmailPerdu = JSON.parse(localStorage.getItem("idEmailPerdu"));
      console.log(idEmailPerdu.id);
      axios
        .put(
          `https://caisse0.ubix-group.com/public/index.php/api/savePass/${idEmailPerdu.id}`,
          { password: formValues.password }
        )
        .then(function (response) {
          console.log(response);
          if (response.data.msg1 === "utilisateur update") {
            navigate("/compteZeroNouveau");
          } else {
            alert("erreur de connexion veuillez patienter");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    return errors;
  };

  return (
    <div className="contenair">
      <ImgLogos contenairimg={contenairimg} contenairlogo={contenairlogo} />
      <div className="confirmemail">
        <p className="confirmemailmessage">
          Veuillez entrer votre nouveau mot de passe dans la case vide
        </p>

        <div>
          <form onSubmit={handSubmit}>
            <div className="space">
              <label htmlFor="keyPassword">Mot de passe</label>
              <input
                type="text"
                name="password"
                id="keyPassword"
                className="password"
                placeholder="remplir le mot de passe"
                value={formValues.password}
                onChange={handleChanges}
              />
              <small className=".small">
                8 caractères minimum, 1 majuscule, 1 minuscule,1 chiffre, 1
                caractère spécial
              </small>
            </div>
            <span className="formErrors">{formErrors.password}</span>

            <Button enter="Envoyer" buttoninput={button} />
          </form>
        </div>
      </div>
      <Footer Footernav={footernav} />
    </div>
  );
}
