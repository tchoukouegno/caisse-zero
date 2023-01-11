/****
 * composant qui parle de qui nous sommes
 */
import "../css/controlCard.css";
import caisseEuro from "../images/caisseEuro.jpg";
export function ControlsCard() {
  return (
    <div className="controlCard">
      <div className="developpement">
        <img src={caisseEuro} alt="" className="comptableCaisseZero" />
        <h3>Caisse-Zero</h3>
        <p className="paragrapheControls">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
          excepturi eveniet qui veniam nobis dicta provident odio? Voluptates
          totam quaerat incidunt porro suscipit earum iure nesciunt fugit quia
          adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quaerat, rem. Libero ,
        </p>
      </div>
      <div className="developpement">
        <img src={caisseEuro} alt="" className="comptableCaisseZero" />
        <h3>Caisse-Zero</h3>
        <p className="paragrapheControls">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
          excepturi eveniet qui veniam nobis dicta provident odio? Voluptates
          totam quaerat incidunt porro suscipit earum iure nesciunt fugit quia
          adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quaerat, rem. Libero ,
        </p>
      </div>
      <div className="developpement">
        <img src={caisseEuro} alt="" className="comptableCaisseZero" />
        <h3>Caisse-Zero</h3>
        <p className="paragrapheControls">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
          excepturi eveniet qui veniam nobis dicta provident odio? Voluptates
          totam quaerat incidunt porro suscipit earum iure nesciunt fugit quia
          adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quaerat, rem. Libero ,
        </p>
      </div>
    </div>
  );
}
