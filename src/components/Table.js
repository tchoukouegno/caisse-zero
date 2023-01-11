/***
 * composant qui gere les tableaux de caisse zero
 */
import "../css/dettesCreances.css";
export function Table({ td1, td2, td3, td4, td5, td6, td7, td8, td9 }) {
  return (
    <table>
      <tr className="tr">
        <td className="td1">{td1}</td>
        <td className="td1 tdsecondo">{td2}</td>
        <td className="td1 tdlast">{td3} </td>
      </tr>
      <tr className="tr1">
        <td className="td">{td4}</td>
        <td className="td tdsecondo">{td5} </td>
        <td className="td tdlast">{td6} </td>
      </tr>
      <tr className="tr2">
        <td className="td">{td7}</td>
        <td className="td tdsecondo">{td8}</td>
        <td className="td tdlast">{td9} </td>
      </tr>
    </table>
  );
}
