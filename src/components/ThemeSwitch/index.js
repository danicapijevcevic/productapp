import { useDispatch, useSelector } from "react-redux";
import "./themeswitch.style.scss";
import { setTheme } from "../../redux/actions";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
const ThemeSwitch = function () {
  const { theme } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const handleThemeSwitch = () => {
    dispatch(setTheme(theme === "dark" ? "light" : "dark"));
  };
  return (
    <div onClick={handleThemeSwitch} className={"shop-themeswitch"}>
      <div
        className="shop-themeswitch-circle"
        style={{ left: theme === "dark" ? 28 : 4 }}
      />
      <div
        className="shop-teamswitch-img"
        style={{
          left: theme === "dark" ? 4 : 24,
        }}
      >
        {theme === "dark" ? <IoSunnyOutline /> : <IoMoonOutline />}
      </div>
    </div>
  );
};
export default ThemeSwitch;
