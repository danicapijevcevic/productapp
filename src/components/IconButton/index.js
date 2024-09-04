import "./iconbutton.style.scss";

const IconButton = function (props) {
  return (
    <div className="shop-iconbutton" onClick={props.handleClick}>
      {props.badge && <div className="shop-badge" />}
      {props.img}
    </div>
  );
};

export default IconButton;
