/***
 * page qui permet d ajouter un utilisateur par l administarteur
 */
import "../css/acess.css";
import "../css/handleuser.css";
import "../css/compteZero.css";
import { Footer } from "../components/Footer.js";
import { EmailButton } from "../components/EmailButton";
import { ImgLogos } from "../components/ImgLogos.js";
import { NavLink } from "react-router-dom";
import "../css/home.css";

export function HandleUser() {
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
    transform: "translate3d(0,130px,0)",
  };
  return (
    <div className="contenair">
      <ImgLogos contenairimg={contenairimg} contenairlogo={contenairlogo} />
      <div className="handleuser">
        <div className="sous-handleuser">
          <h1 className="sous-handleuserh1">AJOUTER UN AUTRE UTILISATEUR</h1>
          <EmailButton email="toto@gmail.com" entreprise="ENTREPRISE DELTA" />
        </div>
        <div className="invitationuser">
          <span className="invitationuserspan">
            Mail de l’utilisateur à inviter
          </span>
          <button className="invitationuserbutton">Lambda@gmail.com</button>
        </div>
        <button className="sendinvitationuser">Inviter l’utilisateur</button>
        <h2>Détails des autorisations données</h2>
        <table>
          <thead>
            <tr>
              <th>CZ</th>
              <th>Mail</th>
              <th>Admin</th>
              <th>Compta</th>
              <th>Stock </th>
              <th>Com</th>
              <th>Paie</th>
              <th>Immos</th>
              <th>Budget</th>
              <th>Rap</th>
            </tr>
          </thead>
          <tr>
            <td data-label="CZ">DELTA</td>
            <td className="tdemail" data-label="Mail">
              toto@gmail.com
            </td>
            <td data-label="Admin">Oui/No n</td>
            <td data-label="Compta">Non/Visual/M odif</td>
            <td data-label="Stock">Non/Vi sual/M odif</td>
            <td data-label="Com">Non/Vi sual/M odif</td>
            <td data-label="Paie">Non/Vi sual/M odif</td>
            <td data-label="Immos">Non/Vi sual/M odif</td>
            <td data-label="Budget">Non/Vi sual/M odif</td>
            <td data-label="Rap">Non/Vi sual/M odif</td>
          </tr>
          <tr>
            <td data-label="CZ">DELTA</td>
            <td className="tdemail" data-label="Mail">
              Lambda@gmail.com
            </td>
            <td data-label="Admin">Oui/No n</td>
            <td data-label="Compta">Non/Visual/M odif</td>
            <td data-label="Stock">Non/Vi sual/M odif</td>
            <td data-label="Com">Non/Vi sual/M odif</td>
            <td data-label="Paie">Non/Vi sual/M odif</td>
            <td data-label="Immos">Non/Vi sual/M odif</td>
            <td data-label="Budget">Non/Vi sual/M odif</td>
            <td data-label="Rap">Non/Vi sual/M odif</td>
          </tr>
        </table>
        <NavLink to="/MenuAplication" className="buttontable">
          suivant
        </NavLink>
      </div>
      <Footer Footernav={footernav} />
    </div>
  );
}
