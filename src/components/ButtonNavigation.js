import "../css/inscription.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function ButtonNavigation({
  buttonInscriptionleft,
  buttonInscriptionright,
}) {
  // const navigate = useNavigate();
  // const recuperationUser = JSON.parse(localStorage.getItem("user"));
  // console.log(recuperationUser.token);

  return (
    <div className="inscriptionbutton">
      <div className="inscriptionLeftbutton">
        <NavLink to="/compteZero">
          <span style={buttonInscriptionleft}>
            Creer un caisse zero pour votre entreprise
          </span>
        </NavLink>
      </div>
      <div className="inscriptionRightbutton">
        <NavLink to="/compteZeroExistant">
          <span style={buttonInscriptionright}>
            Accédez à un caisse zero existant
          </span>
        </NavLink>
      </div>
    </div>
  );
}
//onClick={localisation}
