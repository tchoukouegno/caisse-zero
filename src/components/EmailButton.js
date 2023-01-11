/****
 * composant qui gere l email de l administrateur et son entreprise choisie
 */
import "../css/handleuser.css";
import head from "../images/head.jpg";
export function EmailButton({ email, entreprise }) {
  return (
    <div className="sous-handleuseremail">
      <div className="containhandleuseremail">
        <span className="containhandleuserspan">{email}</span>
        <img src={head} alt="" className="containhandleuserimg" />
      </div>
      <button className="containhandleuserbutton">{entreprise}</button>
    </div>
  );
}
