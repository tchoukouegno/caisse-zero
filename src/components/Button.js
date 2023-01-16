/*****
 *composant bouton
 */
import "../css/inscription.css";
import { NavLink } from "react-router-dom";
export function Button({ buttoninput, enter }) {
  return (
    <div className="buttonoemailconfirmation">
      <button style={buttoninput}>{enter}</button>
    </div>
  );
}
