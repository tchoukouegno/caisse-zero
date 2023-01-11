/****
 * page qui gere les operations diverses
 */
import { Footer } from "../components/Footer.js";
import { HeaderTransactions } from "../components/HeaderTransactions";
import { DetailsCreances } from "../components/DetailsCreances.js";
import { ContainDate } from "../components/ContainDate.js";
import { FacturesTables } from "../components/FacturesTables.js";
import { OperationsTables } from "../components/OperationsTables.js";
import { ControlsFooterTransactions } from "../components/ControlsFooterTransactions.js";
import { ImgLogos } from "../components/ImgLogos.js";
import "../css/acess.css";
export function OperationsDiverses() {
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
      <div className="dettescreances">
        <HeaderTransactions
          h5="OPERATIONS DIVERSES EN CASH

            "
          spantransaction="N° Transactions 85274"
        />
        <ContainDate
          spanDate="Date"
          spanDate1="29/11/2022"
          spanDate2="11"
          spanDate3="4"
          spanDate4="2002"
          spanDateButton="Enregistrer"
        />
        <DetailsCreances
          tilteleft="Détails Opérations diverses"
          tilteright="Monnaie: XAF"
        />
        <FacturesTables
          td1="Tiers (Info – Non Obligatoire) "
          td2="Client XXX
            "
          td3="Solde Tier"
          td4="415 000"
          td5="Libellé"
          td6="Facture N°AAA à payer
            "
        />
        <DetailsCreances
          tilteleft="Comptes trésorerie (banque, caisses, mob. monnaie)
            "
          tilteright="Total: 150 000"
        />
        <OperationsTables
          td1="Num Comptes Tréso"
          td2=" Augmente"
          td3="Diminue"
          td4="Solde Compte "
          td5="Banque 01 "
          td6="100 000 "
          td7="0"
          td8="528 000"
          td9="Caisse 03"
          td10="50 000"
          td11="0"
          td12="24000"
        />
        <DetailsCreances
          tilteleft="Contrepartie : comptes (charges, produits, capital, biens, etc.)
            "
          tilteright="Total: 150 000"
        />
        <OperationsTables
          td1="Num Comptes Tréso"
          td2=" Augmente"
          td3="Diminue"
          td4="Solde Compte "
          td5="Produit A "
          td6="60 000 "
          td7="0"
          td8="1370000"
          td9="Produit B"
          td10="90 000 "
          td11="0"
          td12="475000"
        />
        <ControlsFooterTransactions
          span1="Contrôle équilibre"
          span2="0"
          span3="Attaches:"
          span4="Annulation"
          span5="Date Annul."
          span6=" 30/11/2022"
        />
      </div>
      <Footer Footernav={footernav} />
    </div>
  );
}
