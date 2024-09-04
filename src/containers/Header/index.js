import Avatar from "../../components/Avatar";
import IconButton from "../../components/IconButton";
import ThemeSwitch from "../../components/ThemeSwitch";
import { LargeText } from "../../components/Typography";
import { FaBell } from "react-icons/fa";
import "./header.style.scss";
import { IoBag } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setToggleCart } from "../../redux/actions";
import { Link } from "react-router-dom";

const Header = function (props) {
  const dispatch = useDispatch();
  const { showCart } = useSelector((state) => state.authReducer);
  const handleCheckNotifications = () => {};
  const toggleCart = () => {};
  return (
    <div className={"shop-header"}>
      <div className={"shop-header-search"}>
        <input
          placeholder={"Search products..."}
          onChange={props.handleSearch}
        />
      </div>
      <div className="shop-header-right">
        <ThemeSwitch />

        <Link to={"/cart"}>
          <IconButton img={<IoBag size={16} />} handleClick={toggleCart} />
        </Link>
        <Link to={"/user-profile"}>
          <Avatar />
        </Link>
      </div>
    </div>
  );
};
export default Header;
