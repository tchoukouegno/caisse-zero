import homepage31 from "../images/homepage31.png";
import newlogo from "../images/newlogo.jpg";

export function ImgLogos({ contenairimg, contenairlogo }) {
  return (
    <div>
      <img
        src={homepage31}
        alt=""
        className="imagelogocaissezeroo"
        style={contenairimg}
      />
      <img
        src={newlogo}
        alt=""
        className="newlogocaissezero"
        style={contenairlogo}
      />
    </div>
  );
}
