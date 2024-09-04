import { Link } from "react-router-dom";
import { MediumText } from "../../components/Typography";
import "./menu.style.scss";
import { menuItems } from "./menuItems";
const Menu = function () {
  return (
    <div className={"shop-menu"}>
      <div className={"shop-menu-logo"} />
      {menuItems.map((item) => (
        <Link to={item.path}>
          <div
            key={item.id}
            className={`shop-menu-item ${
              item.heading ? "shop-menu-item-heading" : ""
            }`}
          >
            {item.img}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Menu;
