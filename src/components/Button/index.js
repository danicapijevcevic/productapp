import { SmallText } from "../Typography";
import "./button.style.scss";

const Button = function (props) {
  return (
    <div className="shop-button"  onClick={props.onClick} >
      {props.title}
    </div>
  );
};
export default Button;
