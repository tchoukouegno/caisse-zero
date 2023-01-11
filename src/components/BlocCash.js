/****
 * composant qui gere l avant footer d achat et vente
 */
export function BlocCash({
  Cash1,
  Cash2,
  Cash3,
  Cash4,
  Cash5,
  Cash6,
  Cash7,
  Cash8,
  Cash9,
  Cash10,
  Cash11,
  Cash12,
  Cash13,
}) {
  return (
    <div className="blocCash">
      <div className="blocCash1">
        <div className="sous-blocCash1">
          <div className="sous-controlRight">
            <span className="controlRightspan">{Cash1}</span>
            <span className="controlRightspanLeft">{Cash2}</span>
          </div>
          <div className="sous-controlRight">
            <span className="controlRightspan">{Cash3}</span>
            <span className="controlRightspanLeft">{Cash4}</span>
          </div>
        </div>
        <span className="totalachat">{Cash5}</span>
      </div>
      <div className="blocCash2">
        <span>{Cash6}</span>
        <span className="tdsecond">{Cash7}</span>
        <span>{Cash8}</span>
        <span>{Cash9}</span>
      </div>
      <div className="blocCash2">
        <span>{Cash10}</span>
        <span className="tdsecond">{Cash11}</span>
        <span>{Cash12}</span>
        <span>{Cash13}</span>
      </div>
    </div>
  );
}
