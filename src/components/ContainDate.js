/****
 * composant qui gere la date des factures
 */
import "../css/dettesCreances.css";
export function ContainDate({
  spanDate,
  spanDate1,
  spanDate2,
  spanDate3,
  spanDate4,
  spanDateButton,
}) {
  return (
    <div className="containcontroldate">
      <div className="controldate">
        <span className="transactionsdate">{spanDate}</span>
        <span className="transactionsdate">{spanDate1}</span>
        <span className="transactionsdate">{spanDate2}</span>
        <span className="transactionsdate">{spanDate3}</span>
        <span className="transactionsdate">{spanDate4}</span>
      </div>
      <span className="buttontransactionfacture">{spanDateButton}</span>
    </div>
  );
}
