import "../css/inscription.css";
import { NavLink } from "react-router-dom";

export  function ButtonNavigation({buttonInscriptionleft,buttonInscriptionright}){
    return(

        <div className="inscription">
       <div className="inscriptionLeft">
        <NavLink to='/compteZero'><span style={buttonInscriptionleft}>
            Creer un caisse zero pour votre entreprise
          </span> </NavLink>
        </div>
        <div className="inscriptionRight">
        <NavLink to='/compteZeroExistant'><span style={buttonInscriptionright}>
             Accédez à un caisse zero existant
          </span></NavLink>
        </div>
      </div>
    )


      }