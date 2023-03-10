/**
 * composants qui permet de confirmer l email
 */
import { ImgLogos } from "../components/ImgLogos.js";
import { Footer } from "../components/Footer.js";
import { Button } from "../components/Button.js";
import { Deconnexion } from "../components/Deconnexion";
import "../css/confirmationemail.css";
import "../css/inscription.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../css/deconnexion.css";
import axios from "axios";

export function ConfirmationEmail() {
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (!firstinscription.token) {
  //     return navigate("/");
  //   }
  // });

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

  const initValues = { emailconfirm: "" };
  const [formValues, setFormValues] = useState(initValues);
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handSubmit = (e) => {
    e.preventDefault();

    console.log(formValues.emailconfirm);
    let firstinscription = JSON.parse(localStorage.getItem("firstinscription"));

    axios
      .put(
        `https://caisse0.ubix-group.com/public/index.php/api/up/${firstinscription.id}`,
        { code: formValues.emailconfirm }
      )
      .then(function (response) {
        console.log(response);
        if (response.data.msg1 === "bien verifier") {
          navigate("/compteZeroNouveau");
        } else {
          alert("veuillez remplir le code inscrit dans votre email");
        }
      })
      .catch(function (error) {
        if (error.response.statusText === "") {
          alert("vous n avez pas mit le code de verification");
        }
        console.log(error);
      });
  };
  const renvoyerCode = (e) => {
    e.preventDefault();
    const firstinscription = JSON.parse(
      localStorage.getItem("firstinscription")
    );
    console.log(firstinscription.id);
    console.log(firstinscription.email);
    axios
      .put(
        `https://caisse0.ubix-group.com/public/index.php/api/resend/${firstinscription.id}`,
        { email: firstinscription.email }
      )
      .then(function (response) {
        console.log(response);
        if (response.data.msg === "code a ??t?? r??envoy??") {
          alert(
            "vous pouvez consulter votre adresse email pour un nouveau code"
          );
        }

        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="contenair">
      <ImgLogos contenairimg={contenairimg} contenairlogo={contenairlogo} />
      <Deconnexion />

      <div className="confirmemail">
        <p className="confirmemailmessage">
          veuillez consulter vos emails ou vos spams, puis entrer le code de
          confirmation
        </p>

        <div>
          <form onSubmit={handSubmit}>
            <input
              type="text"
              name="emailconfirm"
              className="keyemail"
              value={formValues.emailconfirm}
              onChange={handleChanges}
            />
            <Button enter="Verifier" buttoninput={button} />
          </form>
          <div onClick={renvoyerCode} className="parentbuttonrenvoyer">
            <p className="confirmemailmessage">
              si vous n 'avez pas recu de code dans vos email ou vos spams
              renvoyer le code
            </p>
            <button className="buttonrenvoyercodeemail">
              renvoyer le code
            </button>
          </div>
        </div>
      </div>
      <Footer Footernav={footernav} />
    </div>
  );
}
