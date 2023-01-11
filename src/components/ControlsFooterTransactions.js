/****
 * composant qui gere le footer des transactions
 */
import triangle from "../images/triangle.svg";
import trombone from "../images/trombone.svg";
export function ControlsFooterTransactions({
  span1,
  span2,
  span3,
  span4,
  span5,
  span6,
}) {
  return (
    <div className="controlfooter">
      <div className="controlLeft">
        <img src={triangle} alt="" className="controlequilibreleft" />
        <span className="controlequilibrecenter">{span1}</span>
        <span className="controlequilibreright">{span2}</span>
      </div>
      <div className="controlCenter">
        <span className="controlCenterLeft">{span3}</span>
        <img src={trombone} alt="" className="controlCenterRight" />
      </div>
      <div className="controlRight">
        <div className="sous-controlRight">
          <span className="controlRightspan">{span4}</span>
          <span className="controlRightspanLeft"></span>
        </div>
        <div className="sous-controlRight">
          <span className="controlRightspan">{span5}</span>
          <span className="controlRightspanLeft"> {span6}</span>
        </div>
      </div>
    </div>
  );
}
