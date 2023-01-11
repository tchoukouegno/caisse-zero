/*****
 *composant bouton
 */
import "../css/inscription.css";
import { NavLink } from "react-router-dom";
export function Button({ enter }) {
  return (
    <div className="envoiFormulaire">
      <NavLink to="/compteZeroNouveau" className="envoiFormulaireLeft">
        {enter}
      </NavLink>
    </div>
  );
}
