/***
 * page qui traite les dettes et les creances
 */
import "../css/dettesCreances.css";
import { Footer } from "../components/Footer.js";
import { HeaderTransactions } from "../components/HeaderTransactions";
import { Table } from "../components/Table.js";
import { DetailsCreances } from "../components/DetailsCreances.js";
import { ControlsFooterTransactions } from "../components/ControlsFooterTransactions.js";
import { FacturesTables } from "../components/FacturesTables.js";
import { ImgLogos } from "../components/ImgLogos.js";

export function DettesCreances() {
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
          h5="NOUVELLES DETTES/ CREANCES"
          spantransaction="N° Transactions 83275"
        />
        <div className="containcontroldate">
          <div className="controldate">
            <span className="transactionsdate">Date</span>
            <span className="transactionsdate">29/11/2022</span>
            <span className="transactionsdate">11</span>
            <span className="transactionsdate">4</span>
            <span className="transactionsdate">2002</span>
          </div>
        </div>
        <DetailsCreances
          tilteleft="Détails Créances ou Dettes Remboursées"
          tilteright="Monnaie: XAF"
        />
        <FacturesTables
          td1="Tiers"
          td2="Client XXX"
          td3="Solde Tiers"
          td4="45 000"
          td5="Libellé"
          td6="Facture N°AAA à payer plus tard"
          td7="Créances dues par le Tiers"
          td8="150.000"
          td9="Ou Dettes dû à Tiers"
          td10="0"
        />

        <DetailsCreances
          tilteleft="Les comptes (charges, produits, capital, biens, etc.)"
          tilteright="Total: 150 000"
        />
        <Table
          td1="Num Comptes"
          td2="Montant"
          td3="Solde Compte"
          td4="Produits A "
          td5="60 000 "
          td6="1 370 000 "
          td7="Produits B"
          td8="90 000"
          td9="475 000"
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
