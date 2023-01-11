/****
 *composant qui s occupe du formulaire d inscription
 */
import "../css/formulaire.css";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

export function Formulaire({ email, mdp, confirmMdp, enter, close }) {
  const navigate = useNavigate();

  function closeModale() {
    let connect = document.querySelector(".connexionn");
    let bouttonLeft = document.querySelector(".buttonInscriptionLeft");
    let newlogo = document.querySelector(".newlogocaissezero");
    let imagelogo = document.querySelector(".imagelogocaissezeroo");
    let bouttonRight = document.querySelector(".buttonInscriptionRight");
    bouttonRight.style.display = "block";
    bouttonLeft.style.display = "block";
    connect.style.display = "none";
    imagelogo.style.opacity = 1;
    newlogo.style.opacity = 1;
  }
  const initValues = { email: "", password: "", confirmpassword: "" };
  const [formValues, setFormValues] = useState(initValues);
  const [formErrors, setFormErrors] = useState({});
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    setFormErrors(validateForms(formValues));
  };

  const validateForms = (values) => {
    const errors = {};

    let passworD = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,36}$/;
    let rejectEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!values.email) {
      errors.email = "veuillez remplir de l email";
    } else if (!rejectEmail.test(values.email)) {
      errors.email = "mauvais format d email";
    }
    if (!values.password) {
      errors.password = "veuillez mettre un mot de passe";
    } else if (!passworD.test(values.password)) {
      errors.password = "mauvais format de mot de passe";
    }
    if (!values.confirmpassword) {
      errors.confirmpassword = "veuillez confirmer le mot de passe";
    } else if (values.password !== values.confirmpassword) {
      errors.confirmpassword = "veuillez reecrire le meme mot de passe";
    }
    if (
      !values.email === false &&
      !rejectEmail.test(values.email) === false &&
      !values.password === false &&
      !passworD.test(values.password) === false &&
      !values.confirmpassword === false &&
      values.password === values.confirmpassword
    ) {
      const recuperationFormulaire = {
        email: values.email,
        password: values.password,
        confirmpassword: values.confirmpassword,
      };
      console.log(recuperationFormulaire);
      console.log(JSON.stringify(recuperationFormulaire));
      fetch("https://caisse0.ubix-group.com/public/index.php/api/register", {
        method: "POST",
        headers: {
          Accept: "application/json",

          "Content-Type": "application/json",
        },
        body: JSON.stringify(recuperationFormulaire),
      })
        .then((response) => {
          return response.json();
        })

        .then((result) => {
          return console.log(result), result;
        });
      return navigate("/compteZeroNouveau");
    } else {
      return errors;
    }
  };

  return (
    <div className="connexionn">
      <img src={close} alt="" className="close" onClick={closeModale} />
      <form className="space" onSubmit={handSubmit}>
        <div className="space">
          <label htmlFor="email">{email}</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="remplir l'email"
            className="keyemail"
            value={formValues.email}
            onChange={handleChanges}
          />
        </div>
        <span className="formErrors">{formErrors.email}</span>
        <div className="space">
          <label htmlFor="keyPassword">{mdp}</label>
          <input
            type="password"
            name="password"
            id="keyPassword"
            placeholder="remplir le mot de passe"
            className="password"
            value={formValues.password}
            onChange={handleChanges}
          />
          <small>
            8 caractères minimum, 1 majuscule, 1 minuscule,1 chiffre, 1
            caractère spécial
          </small>
        </div>
        <span className="formErrors">{formErrors.password}</span>
        <div className="space">
          <label htmlFor="confirmkeyPassword">{confirmMdp}</label>
          <input
            type="password"
            name="confirmpassword"
            id="confirmkeyPassword"
            placeholder="confirmation du mot de passe"
            className="keyemail"
            value={formValues.confirmpassword}
            onChange={handleChanges}
          />
        </div>
        <span className="formErrors">{formErrors.confirmpassword}</span>

        <input
          type="submit"
          className="btn-submit"
          value="Compte Utilisateur"
        />
      </form>
    </div>
  );
}
