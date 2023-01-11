/****
 *
 */
import "../css/home.css";
import "../css/identificationCaisseZero.css";
import "../css/formulaire.css";
import { ImgLogos } from "../components/ImgLogos.js";
import { ButtonNavigation } from "../components/ButtonNavigation.js";
import { Footer } from "../components/Footer";

export function IdentificationCaisseZero() {
  const contenairimg = {
    width: "100%",
    objectFit: "cover",
    top: "80px",
    transform: "translate3d(0,50px,0)",
    borderRadius: "15px",
  };
  const contenairlogo = {
    position: "absolute",
    left: "40%",
    top: "0px",
    width: "300px",
    height: "200px",
    objectFit: "cover",
    boxShadow: " 1px 13px 24px -22px rgba(0,0,0,0.9)",
    borderRadius: "25px",
  };
  const footernav = {
    display: "flex",
    flexDirection: "column",
    gap: "50px",
    background: "orange",
    height: "150px",
    padding: "50px",
    transform: "translate3d(0,48px,0)",
  };
  const buttonInscriptionleft = {
    position: "absolute",
    left: "23%",
    top: "50%",
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "bold",
    color: "white",
    paddingTop: "11px",
    paddingBottom: "11px",
    width: "250px",
    height: "70px",
    border: "none",
    textAlign: "center",
    background: "blueviolet",
    borderRadius: "10px",
    cursor: "pointer",
    lineHeight: "30px",

    fontFamily:
      "Trebuchet MS Lucida Sans Unicode Lucida Grande Lucida Sans Arial sans-serif",
  };

  const buttonInscriptionright = {
    position: "absolute",
    right: "17%",
    top: "50%",
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "bold",
    color: "white",

    padding: "11px",
    width: "250px",
    height: "70px",
    border: "none",
    textAlign: "center",
    background: "blueviolet",
    borderRadius: "10px",
    cursor: "pointer",
    lineHeight: "30px",

    fontFamily:
      "Trebuchet MS Lucida Sans Unicode Lucida Grande Lucida Sans Arial sans-serif",
  };

  return (
    <div className="contenair">
      <ImgLogos contenairimg={contenairimg} contenairlogo={contenairlogo} />
      <ButtonNavigation
        buttonInscriptionleft={buttonInscriptionleft}
        buttonInscriptionright={buttonInscriptionright}
      />
      <Footer Footernav={footernav} />
    </div>
  );
}
