/*****
 * page qui gere la confirmation de code d un invite par le proprietaire
 * */

import { ImgLogos } from "../components/ImgLogos.js";
import { Footer } from "../components/Footer.js";
import { Button } from "../components/Button.js";
import "../css/confirmationemail.css";
import "../css/inscription.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
export function InvitationUserConfirmation() {
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

  const initValues = { codeconfirm: "" };
  const [formValues, setFormValues] = useState(initValues);
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const Email = JSON.parse(localStorage.getItem("Email"));
  console.log(Email.email);
  const handSubmit = (e) => {
    e.preventDefault();
    // const firstinscription = JSON.parse(
    //   localStorage.getItem("firstinscription")
    // );
    const g = {
      password: formValues.codeconfirm,
      email: Email.email,
    };
    console.log(g);

    axios
      .post(
        "https://caisse0.ubix-group.com/public/index.php/api/loginInviter",
        {
          password: formValues.codeconfirm,
          email: Email.email,
        }
      )
      .then(function (response) {
        console.log(response);

        if (response.data.status_code === 200) {
          navigate("/handleuser");
        } else if (response.data.status_code === 405) {
          alert("adresse email ne correspond pas au mot de passe");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="contenair">
      <ImgLogos contenairimg={contenairimg} contenairlogo={contenairlogo} />
      <div className="confirmemail">
        <p className="confirmemailmessage">
          inscrire le code de confirmation pris dans l email dans la case vide
        </p>

        <div>
          <form onSubmit={handSubmit}>
            <input
              type="text"
              name="codeconfirm"
              className="keyemail"
              value={formValues.codeconfirm}
              onChange={handleChanges}
            />
            <Button enter="Verifier" buttoninput={button} />
          </form>
        </div>
      </div>
      <Footer Footernav={footernav} />
    </div>
  );
}
