/***
 * composant qui gere les tableaux des  achats
 */
import "../css/dettesCreances.css";
export function AchatsTable({ td1, td2, td3, td4, td5, td6, td7, td8 }) {
  return (
    <table>
      <tr className="tr">
        <td className="td1">{td1}</td>
        <td className="td1 tdsecondo">{td2}</td>
        <td className="td1 tdsecondo">{td3}</td>
        <td className="td1 tdsecondo">{td4}</td>
        <td className="td1 tdsecondo">{td5}</td>
        <td className="td1 tdsecondo">{td6}</td>
        <td className="td1 tdsecondo">{td7}</td>
        <td className="td1 tdlast">{td8} </td>
      </tr>
      <tr className="tr1">
        <td className="td"></td>
        <td className="td tdsecondo"> </td>
        <td className="td tdsecondo"> </td>
        <td className="td tdsecondo"></td>
        <td className="td tdsecondo"></td>
        <td className="td tdsecondo"></td>
        <td className="td tdsecondo"></td>
        <td className="td tdlast"></td>
      </tr>
      <tr className="tr2">
        <td className="td"></td>
        <td className="td tdsecondo"> </td>
        <td className="td tdsecondo"> </td>
        <td className="td tdsecondo"></td>
        <td className="td tdsecondo"></td>
        <td className="td tdsecondo"></td>
        <td className="td tdsecondo"></td>
        <td className="td tdlast"></td>
      </tr>
      <tr className="tr2">
        <td className="td"></td>
        <td className="td tdsecondo"> </td>
        <td className="td tdsecondo"> </td>
        <td className="td tdsecondo"></td>
        <td className="td tdsecondo"></td>
        <td className="td tdsecondo"></td>
        <td className="td tdsecondo"></td>
        <td className="td tdlast"></td>
      </tr>
      <tr className="tr2">
        <td className="td"></td>
        <td className="td tdsecondo"> </td>
        <td className="td tdsecondo"> </td>
        <td className="td tdsecondo"></td>
        <td className="td tdsecondo"></td>
        <td className="td tdsecondo"></td>
        <td className="td tdsecondo"></td>
        <td className="td tdlast"></td>
      </tr>
    </table>
  );
}
