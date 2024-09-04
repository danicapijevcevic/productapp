import Menu from "../../containers/Menu";
import Wrapper from "../../components/Wrapper";
import Header from "../../containers/Header";
import { LargeText, MediumText } from "../../components/Typography";
import "./user.style.scss";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import UserItem from "../../components/UserItem";

const User = function () {
  const { user } = useSelector((state) => state.authReducer);
  const [state, setState] = useState(null);
  useEffect(() => {
    user &&
      setState({
        userimage: user.img,
        items: Object.keys(user)
          .filter((item) => item !== "img")
          .map((item, index) => ({
            title: item,
            value: user[item],
            id: index,
          })),
      });
  }, [user]);


  return (
    <div className="shop-user">
      <Menu />
      <Header />
      <Wrapper>
        <LargeText>User</LargeText>
        <div className="shop-user-content">
          {state?.userimage && (
            <div className="shop-userimage">
              <img src={state.userimage} />
            </div>
          )}
          {state?.items?.map((item) => (
            <UserItem title={item.title} value={item.value} key={item.id} />
          ))}
        </div>
      </Wrapper>
    </div>
  );
};
export default User;
