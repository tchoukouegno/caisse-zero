/*******
 * composant qui s occupe des commentaires des clients
 * */

import "../css/commentaire.css";
import "../css/information.css";
import "../css/contact.css";
import { Information } from "./Information";

export function Commentaire() {
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
    <div className="controlsCommentaire">
      <Information
        text="what they say about us"
        basSection={Section}
        sectionh2={sectionh2}
      />
      <div className="sous-controlsCommentaire">
        <div className="commentaire">
          <p className="commentaireparagraphe">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
            excepturi eveniet qui veniam nobis dicta provident odio? Voluptates
            totam quaerat incidunt porro suscipit earum iure nesciunt fugit quia
            adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quaerat, rem. Libero ,
          </p>
        </div>
        <div className="commentaire">
          <p className="commentaireparagraphe">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
            excepturi eveniet qui veniam nobis dicta provident odio? Voluptates
            totam quaerat incidunt porro suscipit earum iure nesciunt fugit quia
            adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quaerat, rem. Libero ,
          </p>
        </div>
        <div className="commentaire">
          <p className="commentaireparagraphe">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
            excepturi eveniet qui veniam nobis dicta provident odio? Voluptates
            totam quaerat incidunt porro suscipit earum iure nesciunt fugit quia
            adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quaerat, rem. Libero ,
          </p>
        </div>
        <div className="commentaire">
          <p className="commentaireparagraphe">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
            excepturi eveniet qui veniam nobis dicta provident odio? Voluptates
            totam quaerat incidunt porro suscipit earum iure nesciunt fugit quia
            adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quaerat, rem. Libero ,
          </p>
        </div>
        <div className="commentaire">
          <p className="commentaireparagraphe">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
            excepturi eveniet qui veniam nobis dicta provident odio? Voluptates
            totam quaerat incidunt porro suscipit earum iure nesciunt fugit quia
            adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quaerat, rem. Libero ,
          </p>
        </div>
        <div className="commentaire">
          <p className="commentaireparagraphe">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
            excepturi eveniet qui veniam nobis dicta provident odio? Voluptates
            totam quaerat incidunt porro suscipit earum iure nesciunt fugit quia
            adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quaerat, rem. Libero ,
          </p>
        </div>
      </div>
    </div>
  );
}
