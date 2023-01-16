/****
 *composant qui s occupe du formulaire d inscription
 */
import "../css/formulaire.css";

import { useState } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useRef } from "react";

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
  const inputEmail = useRef(null);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validateForms(formValues));
    setIsSubmit(true);
    const inputactuelemail = inputEmail.current.value;
    console.log(inputactuelemail);
    window.localStorage.setItem(
      "email",
      JSON.stringify({
        email: inputactuelemail,
      })
    );
  };

  const validateForms = (values) => {
    const errors = {};
    const emailexist = document.querySelector(".formErrors");

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
          console.log(result);

          // console.log(result.email[0]);
          // window.localStorage.setItem(
          //   "first",
          //   JSON.stringify({
          //     response: result.email[0],
          //   })
          // );

          if (result.status_code === 201) {
            console.log(true);
            window.localStorage.setItem(
              "firstinscription",
              JSON.stringify({
                id: result.id,
                token: result.token,
              })
            );
          } else if (result.email[0]) {
            alert(
              "cet email existe deja veuillez rentrer sur la page d'accueil choisir un autre email merci"
            );
          }
        });

      // let y = JSON.parse(localStorage.getItem("firstinscription"));
      // console.log(y.response);
      // if (y.response === "The email has already been taken") {
      //   console.log(true);
      //   return alert("rrrtr");
      // }
      if (
        !values.email === false &&
        !rejectEmail.test(values.email) === false &&
        !values.password === false &&
        !passworD.test(values.password) === false &&
        !values.confirmpassword === false &&
        values.password === values.confirmpassword
      ) {
        return navigate("/comfirmationEmail");
      }
      // return navigate("/comfirmationEmail");
    }
    return errors;
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
            ref={inputEmail}
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
