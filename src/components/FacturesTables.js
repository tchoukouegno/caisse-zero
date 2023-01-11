/****
 * composant qui gere le tableau des facture
 */
import "../css/dettesCreances.css";
export function FacturesTables({
  td1,
  td2,
  td3,
  td4,
  td5,
  td6,
  td7,
  td8,
  td9,
  td10,
}) {
  return (
    <table className="table">
      <tbody>
        <tr>
          <td>{td1}</td>
          <td className="tdsecond">{td2}</td>
          <td>{td3} </td>
          <td className="tdlast">{td4}</td>
        </tr>
        <tr>
          <td>{td5} </td>
          <td className="tdsecond">{td6}</td>
        </tr>
        <tr>
          <td>{td7}</td>
          <td className="tdsecond">{td8}</td>
          <td>{td9}</td>
          <td className="tdsecond tdlast">{td10}</td>
        </tr>
      </tbody>
    </table>
  );
}
