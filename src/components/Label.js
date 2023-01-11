/****
 *
 */
import { NavLink } from "react-router-dom";
import "../css/formulaire.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export function Label({ email, mdp, close }) {
  function closeModal() {
    let bouttonLeft = document.querySelector(".buttonInscriptionLeft");
    let connect = document.querySelector(".connexionnRight");
    let bouttonRight = document.querySelector(".buttonInscriptionRight");
    let newlogo = document.querySelector(".newlogocaissezero");
    let imagelogo = document.querySelector(".imagelogocaissezeroo");
    bouttonRight.style.display = "block";
    bouttonLeft.style.display = "block";
    connect.style.display = "none";
    imagelogo.style.opacity = 1;
    newlogo.style.opacity = 1;
  }
  const navigate = useNavigate();
  const initValues = { email: "", password: "" };

  const [formValues, setFormValues] = useState(initValues);
  const [formErrors, setFormErrors] = useState({});
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validateForms(formValues));
    console.log(formValues.email);
  };

  const validateForms = (values) => {
    const errors = {};

    let passworD = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,36}$/;
    let p = document.querySelector(".password");
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
    if (
      !values.email === false &&
      !rejectEmail.test(values.email) === false &&
      !values.password === false &&
      !passworD.test(values.password) === false
    ) {
      axios
        .post("https://caisse0.ubix-group.com/public/index.php/api/login", {
          email: values.email,
          password: values.password,
        })
        .then(function (response) {
          if (response.data.status_code === 200) {
            window.localStorage.setItem(
              "user",
              JSON.stringify({
                id: response.data.utilisateur,
                token: response.data.token,
              })
            );
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      return navigate("/compteZeroNouveau");
    } else {
      return errors;
    }
  };

  return (
    <div className="connexionnRight">
      <img src={close} alt="" className="close" onClick={closeModal} />
      <form method="post" className="space" onSubmit={handSubmit}>
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
            className="password"
            placeholder="remplir le mot de passe"
            value={formValues.password}
            onChange={handleChanges}
          />
          <small>
            8 caractères minimum, 1 majuscule, 1 minuscule,1 chiffre, 1
            caractère spécial
          </small>
        </div>
        <span className="formErrors">{formErrors.password}</span>

        <input className="btn-submit" type="submit" value="Entrez" />

        <NavLink to="/" className="forgetmdp">
          Mot de Passe Oublié?
        </NavLink>
      </form>
    </div>
  );
}
