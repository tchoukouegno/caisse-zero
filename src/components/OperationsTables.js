/***
 * composant qui gere les tableaux des operations cash
 */
import "../css/dettesCreances.css";
export function OperationsTables({
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
  td11,
  td12,
}) {
  return (
    <table>
      <tr className="tr">
        <td className="td1">{td1}</td>
        <td className="td1 tdsecondo">{td2}</td>
        <td className="td1 tdsecondo">{td3}</td>
        <td className="td1 tdlast">{td4} </td>
      </tr>
      <tr className="tr1">
        <td className="td">{td5}</td>
        <td className="td tdsecondo">{td6} </td>
        <td className="td tdsecondo">{td7} </td>
        <td className="td tdlast">{td8} </td>
      </tr>
      <tr className="tr2">
        <td className="td">{td9}</td>
        <td className="td tdsecondo">{td10}</td>
        <td className="td tdsecondo">{td11}</td>
        <td className="td tdlast">{td12} </td>
      </tr>
    </table>
  );
}
