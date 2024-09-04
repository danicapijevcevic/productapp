import "./dashboard.style.scss";
import Menu from "../../containers/Menu";
import Header from "../../containers/Header";
import Cart from "../../containers/Cart";
import Wrapper from "../../components/Wrapper";
import Products from "../../containers/Products";
import { useSelector } from "react-redux";
import { useState } from "react";

const Dashboard = function (props) {
  const [searchValue, setSearchValue] = useState(null);

  const handleSearch = (e) => {
    const value = e.currentTarget.value;
    setSearchValue(value);
  };

  return (
    <div className="shop-dashboard">
      <Menu />
      <Header handleSearch={handleSearch} />
      <Wrapper>
        {props.show === "cart" ? (
          <Cart searchValue={searchValue} />
        ) : (
          <Products searchValue={searchValue} />
        )}
      </Wrapper>
    </div>
  );
};

export default Dashboard;
