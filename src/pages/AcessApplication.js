/*****
 * function that shows the application briefing
 */

import "../css/acess.css";
import "../css/information.css";
import { NavBar } from "../components/NavBar.js";
import { Information } from "../components/Information.js";
import { ControlsCard } from "../components/ControlsCards.js";
import { ContactCaisseZero } from "../components/ContactCaisseZero.js";
import { Commentaire } from "../components/Commentaires.js";
import { Footer } from "../components/Footer.js";

export function AcessApplication() {
  const section = {
    width: "35%",
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "100%",
    left: "35%",
  };
  const sectionh2 = {
    fontSize: "32px",
    transform: "translate3d(0, 20px, 0)",
  };
  return (
    <div className="contenairAcess">
      <div className="masque">
        <NavBar />
        <Information
          text="We offer quality services"
          basSection={section}
          sectionh2={sectionh2}
        />
        <ControlsCard />
        <ContactCaisseZero />
        <Commentaire />
        <Footer />
      </div>
    </div>
  );
}
