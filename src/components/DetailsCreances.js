/***
 * composant qui gere le titre des details des creances
 */
import "../css/dettesCreances.css";

export function DetailsCreances({ tilteleft, tilteright }) {
  return (
    <div className="detailstilte">
      <span>{tilteleft}</span>
      <span>{tilteright}</span>
    </div>
  );
}
