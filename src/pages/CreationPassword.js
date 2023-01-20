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

export function CreationPassword() {
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
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handSubmit = (e) => {
    e.preventDefault();
    const idEmailPerdu = JSON.parse(localStorage.getItem("idEmailPerdu"));
    console.log(idEmailPerdu.id);

    axios
      .post("https://caisse0.ubix-group.com/public/index.php/api/pass", {
        code: formValues.password,
        id: idEmailPerdu.id,
      })
      .then(function (response) {
        console.log(response);
        if (response.data.msg1 === "code bien recu") {
          navigate("/changepassword");
        } else {
          alert("vous n'avez pas entrer le bon code");
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
          veuillez ecrire le code prit dans votre email dans la case vide
        </p>

        <div>
          <form onSubmit={handSubmit}>
            <input
              type="text"
              name="password"
              className="keyemail"
              value={formValues.password}
              onChange={handleChanges}
            />
            <Button enter="Envoyer" buttoninput={button} />
          </form>
          {/* <div onClick={renvoyerCode} className="parentbuttonrenvoyer">
            <p className="confirmemailmessage">
              si vous n 'avez pas recu de code dans vos email ou vos spams
              renvoyer le code
            </p>
            <button className="buttonrenvoyercodeemail">
              renvoyer le code
            </button>
          </div> */}
        </div>
      </div>
      <Footer Footernav={footernav} />
    </div>
  );
}
