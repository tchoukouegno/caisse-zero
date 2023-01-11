/***
 * page qui gere le menu de l application
 */
import { Footer } from "../components/Footer.js";
import { EmailButton } from "../components/EmailButton";
import "../css/handleuser.css";
import "../css/acess.css";
import "../css/menu.css";
import achatsventes from "../images/achatsventes.svg";
import transaction from "../images/transaction.svg";
import bagmoney from "../images/bagmoney.svg";
import dettes from "../images/dettes.jpg";
import gestionimmobilier from "../images/gestionimmobilier.svg";
import gestionbudget from "../images/gestionbudget.svg";
import tableaubord from "../images/tableaubord.svg";
import { ImgLogos } from "../components/ImgLogos.js";
import { NavLink } from "react-router-dom";
export function MenuApplication() {
  const contenairimg = {
    width: "100%",
    height: "250px",
    objectFit: "cover",
  };
  const contenairlogo = {
    position: "absolute",
    right: "20px",
    top: "55px",
    width: "150px",
    height: "150px",
    objectFit: "cover",
    boxShadow: " 1px 13px 24px -22px rgba(0,0,0,0.9)",
    borderRadius: "50%",
  };
  const footernav = {
    display: "flex",
    flexDirection: "column",
    gap: "50px",
    background: "orange",
    height: "150px",
    padding: "50px",
    transform: "translate3d(0,130px,0)",
  };
  return (
    <div className="contenair">
      <ImgLogos contenairimg={contenairimg} contenairlogo={contenairlogo} />
      <div className="menuPrincipalUser">
        <div className="sous-menuPrincipalUser">
          <h4>MENU PRINCIPAL</h4>
          <EmailButton email="toto@gmail.com" entreprise="ENTREPRISE DELTA" />
        </div>
        <div className="containmenuPrincipalUser">
          <div className="menuPrincipalUsericon">
            <NavLink to="/ACHATS">
              <img src={achatsventes} alt="" className="Usericonmenu" />
            </NavLink>
            <span className="Usericonmenuspan">ACHATS</span>
          </div>
          <div className="menuPrincipalUsericon">
            <NavLink to="/TRANSACTIONDIV">
              <img src={transaction} alt="" className="Usericonmenu" />
            </NavLink>
            <span className="Usericonmenuspan">TRANSACT DIV</span>
          </div>
          <div className="menuPrincipalUsericon">
            <NavLink to="/DettesCreances">
              <img src={dettes} alt="" className="Usericonmenu" />
            </NavLink>
            <span className="Usericonmenuspan">DETTES</span>
          </div>
          <div className="menuPrincipalUsericon">
            <NavLink to="/TRANSFERTCPT">
              <img src={bagmoney} alt="" className="Usericonmenu" />
            </NavLink>
            <span className="Usericonmenuspan">TRANSFERT CPT CPT</span>
          </div>
          <div className="menuPrincipalUsericon">
            <NavLink to="/REMBDETTES">
              <img src={dettes} alt="" className="Usericonmenu" />
            </NavLink>
            <span className="Usericonmenuspan">REMB.DETTES</span>
          </div>
          <div className="menuPrincipalUsericon">
            <NavLink to="/VENTES">
              <img src={achatsventes} alt="" className="Usericonmenu" />
            </NavLink>
            <span className="Usericonmenuspan">VENTES</span>
          </div>
          <div className="menuPrincipalUsericon">
            <img
              src={gestionimmobilier}
              alt=""
              className="Usericonmenugestion"
            />
            <span className="Usericonmenuspangestion">GESTION/IMMO</span>
          </div>
          <div className="menuPrincipalUsericon">
            <img src={gestionbudget} alt="" className="Usericonmenugestion" />
            <span className="Usericonmenuspangestion">GESTION/BUDGET</span>
          </div>
          <div className="menuPrincipalUsericon">
            <img src={bagmoney} alt="" className="Usericonmenugestion" />
            <span className="Usericonmenuspangestion">GESTION/FACTURES</span>
          </div>
          <div className="menuPrincipalUsericon">
            <img src={bagmoney} alt="" className="Usericonmenugestion" />
            <span className="Usericonmenuspangestion">GESTION/PAIE</span>
          </div>
          <div className="menuPrincipalUsericon">
            <img src={dettes} alt="" className="Usericonmenureports" />
            <span className="Usericonmenuspangestion">REPORTS</span>
          </div>
          <div className="menuPrincipalUsericon">
            <img src={tableaubord} alt="" className="Usericonmenutabord" />
            <span className="Usericonmenuspangestion">TAB BORD</span>
          </div>
        </div>
      </div>

      <Footer Footernav={footernav} />
    </div>
  );
}
