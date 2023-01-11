/****
 * pages qui gere le transfert des cpt
 */
import { Footer } from "../components/Footer.js";
import { HeaderTransactions } from "../components/HeaderTransactions";
import { DetailsCreances } from "../components/DetailsCreances.js";
import { ContainDate } from "../components/ContainDate.js";
import { FacturesTables } from "../components/FacturesTables.js";
import { Table } from "../components/Table.js";
import { ImgLogos } from "../components/ImgLogos.js";
import { ControlsFooterTransactions } from "../components/ControlsFooterTransactions.js";
import "../css/acess.css";
export function TransfertCpt() {
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
          h5="TRANSFERTS COMPTES A COMPTES

          "
          spantransaction="N° Transactions 84217"
        />
        <ContainDate
          spanDate="Date"
          spanDate1="29/11/2022"
          spanDate2="11"
          spanDate3="4"
          spanDate4="2002"
          spanDateButton="Enregistrer"
        />
        <FacturesTables
          td1="Tiers "
          td2="Aucun

            "
          td5="Libellé"
          td6="Remb. Facture AAA

            "
        />
        <DetailsCreances
          tilteleft="Comptes Trésorerie qui Augmentent
            "
          tilteright="Monnaie: XAF"
        />
        <Table
          td1="Num Comptes Tréso"
          td2="Montant"
          td3="Solde Compte"
          td4="Banque 01 "
          td5="100 000 "
          td6="528 000 "
          td7="Caisse 03"
          td8="50 000"
          td9="24 000"
        />
        <DetailsCreances
          tilteleft="Comptes Trésorerie qui Diminuent
            "
        />
        <Table
          td1="Num Comptes Tréso"
          td2="Montant"
          td3="Solde Compte"
          td4="Banque 4 "
          td5="100 000 "
          td6="528 000 "
          td7="Caisse 01"
          td8="50 000"
          td9="24 000"
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
