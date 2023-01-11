/****
 * composant qui gere les contacts
 */
import { Information } from "./Information";
import "../css/information.css";
import "../css/contact.css";
import comptableCaisseZero from "../images/comptableCaisseZero.jpg";
import photomobile from "../images/photomobile.jpg";
import fix from "../images/fix.jpg";
import photoemail from "../images/photoemail.jpg";
import facebookf from "../images/facebookf.svg";
import twitter from "../images/twitter.svg";
import linkedin from "../images/linkedin.svg";
import instagram from "../images/instagram.svg";

export function ContactCaisseZero() {
  const Section = {
    width: "35%",
    display: "flex",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
  };

  const sectionh2 = {
    fontSize: "32px",
    transform: "translate3d(0, 15px, 0)",
  };

  return (
    <div className="ContactCaisseZero">
      <Information
        text="Caisse-zero professionals"
        basSection={Section}
        sectionh2={sectionh2}
      />
      <div className="containCaisseZero">
        <img src={comptableCaisseZero} alt="" className="containCaisseImg" />
        <div className="numberCaisseZero">
          <span className="ContactCaisseZerospan">our various contacts</span>
          <div className="formContact">
            <div className="sous-formContact">
              <span className="formContactColorLeft">NUMERO MOBILE :</span>
              <span className="formContactColorRight">+22356668979555</span>
              <img src={photomobile} alt="" className="mobile" />
            </div>
            <div className="sous-formContact">
              <span className="formContactColorLeft">NUMERO fix :</span>
              <span className="formContactColorRight">+22456668979555</span>
              <img src={fix} alt="" className="mobilefix" />
            </div>
            <div className="sous-formContact">
              <span className="formContactColorLeft">EMAIL :</span>
              <span className="formContactColorRight">
                caissezero@gmail.com
              </span>
              <img src={photoemail} alt="" className="mobile" />
            </div>
            <div className="sous-formContactlogos">
              <img src={facebookf} alt="" className="iconsreseausocial" />
              <img src={twitter} alt="" className="iconsreseausocial" />
              <img src={linkedin} alt="" className="iconsreseausocial" />
              <img src={instagram} alt="" className="iconsreseausocial" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
