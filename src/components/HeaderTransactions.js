/***
 * composant qui gere le header des transactions
 */
import { EmailButton } from "./EmailButton";
export function HeaderTransactions({ h5, spantransaction }) {
  return (
    <div>
      <h5 className="newdettescreances">{h5}</h5>
      <div className="transactionsnumber">
        <span className="transactionsnumberspan">{spantransaction}</span>
        <EmailButton email="toto@gmail.com" entreprise="ENTREPRISE DELTA" />
      </div>
    </div>
  );
}
