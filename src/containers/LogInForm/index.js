import Button from "../../components/Button";
import { LabelInput } from "../../components/LabelInput";
import { ExtraLargeText } from "../../components/Typography";
import { setLoggedin } from "../../redux/actions";
import user from "../../user.json";
import "./loginform.style.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";

const LogInForm = function (props) {
  const dispatch = useDispatch();
  const [state, setState] = useState({ username: "", password: "" });
  const handleChange = (field) => (e) => {
    const value = e.currentTarget.value;
    setState((prev) => ({ ...prev, [field]: value }));
  };
  const submit = () => {
    console.log(state, user);
    dispatch(
      setLoggedin(state.username === user.username && state.password === "test")
    );
  };
  return (
    <div className="shop-login">
      <div className={"shop-login-title"}>
        <ExtraLargeText>Log In</ExtraLargeText>
      </div>
      <LabelInput handleChange={handleChange("username")} label={"username"} />
      <LabelInput handleChange={handleChange("password")} label={"password"} />
      <div className={"shop-login-button"}>
        <Button title={"LOG IN"} onClick={submit} />
      </div>
    </div>
  );
};

export default LogInForm;
