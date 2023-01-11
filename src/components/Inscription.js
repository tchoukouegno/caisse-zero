/*****
 *composant qui s occupe de l inscription
 */
import "../css/inscription.css";
import "../css/formulaire.css";
import { Formulaire } from "./Formulaire.js";
import { Label } from "./Label.js";
import close from "../images/close.svg";
export function Inscription() {
  function formulaire() {
    let connect = document.querySelector(".connexionn");
    let bouttonLeft = document.querySelector(".buttonInscriptionLeft");
    let newlogo = document.querySelector(".newlogocaissezero");
    let imagelogo = document.querySelector(".imagelogocaissezeroo");
    let bouttonRight = document.querySelector(".buttonInscriptionRight");
    bouttonRight.style.display = "none";
    bouttonLeft.style.display = "none";
    connect.style.display = "block";
    imagelogo.style.opacity = 0.3;
    newlogo.style.opacity = 0.3;
  }

  const button = {
    fontSize: "20px",
    fontWeight: "bold",
    color: "blue",
    padding: "11px",
    paddingLeft: "30px",
    width: "250px",
    height: "50px",
    border: "none",
    backgroundColor: "darkgray",
    borderRadius: "10px",
    cursor: "pointer",
    lineHeight: "50px",
    display: "flex",
    margin: "auto",
    fontFamily: "Trebuchet MS Lucida Sans Unicode Lucida Grande",
  };
  function formulaireLabel() {
    let bouttonLeft = document.querySelector(".buttonInscriptionLeft");
    let connect = document.querySelector(".connexionnRight");
    let bouttonRight = document.querySelector(".buttonInscriptionRight");
    let newlogo = document.querySelector(".newlogocaissezero");
    let imagelogo = document.querySelector(".imagelogocaissezeroo");
    bouttonRight.style.display = "none";
    bouttonLeft.style.display = "none";
    connect.style.display = "block";
    imagelogo.style.opacity = 0.3;
    newlogo.style.opacity = 0.3;
  }

  return (
    <div className="inscriptionFormulaire">
      <div className="inscription">
        <div className="inscriptionLeft">
          <span className="buttonInscriptionLeft" onClick={formulaire}>
            Inscrivez-vous
          </span>
        </div>
        <div className="inscriptionRight">
          <span
            to="/accesCompteZero"
            className="buttonInscriptionRight"
            onClick={formulaireLabel}
          >
            Accédez à votre compte
          </span>
        </div>
      </div>
      <Formulaire
        email="E-MAIL"
        mdp="Mot de Passe
"
        confirmMdp="Confirmation Mdp
"
        close={close}
      />
      <Label
        email="E-MAIL"
        mdp="Mot de Passe
"
        close={close}
      />
    </div>
  );
}
