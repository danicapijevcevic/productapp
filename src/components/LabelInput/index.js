import { SmallText } from "../Typography";
import "./labelinput.style.scss";

export const LabelInput = function (props) {
  return (
    <div className="shop-labelinput">
      <SmallText>{props.label}</SmallText>
      <input type={props.type || "text"} onChange={props.handleChange} />
    </div>
  );
};
