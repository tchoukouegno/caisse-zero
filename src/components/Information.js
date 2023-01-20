/***
 * component that manages zero cash information
 */

import mimize from "../images/mimize.svg";

export function Information({ text, basSection, sectionh2 }) {
  return (
    <div className="basSection" style={basSection}>
      <div className="basSection-h2">
        <img src={mimize} alt="" className="basSection-h2-img" />
        <h2 className="basSection-h2-h2" style={sectionh2}>
          {text}
        </h2>
      </div>
      <p className="basSection-h2-h2-p">
        Lorem ipsu dolor sit met,consectetur adipisicing elit,se do eiusmod
        tempor inciduntut ut labore et dolre magna aliqua.Lorem ipsum dolor sit
        amet consectetur adipisicing elit.
      </p>
    </div>
  );
}
