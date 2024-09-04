import logo from "./logo.svg";
import "./App.css";
import LogIn from "./screens/LogIn";
import { useDispatch, useSelector } from "react-redux";
import Dashboard from "./screens/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrivacyPolicy from "./screens/PrivacyPolicy";
import Page404 from "./screens/Page404";
import Faq from "./screens/FAQ";
import user from './user.json';
import { useEffect, useReducer } from "react";
import User from "./screens/User";
import { setUser } from "./redux/actions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard show={"products"} />,
    errorElement: <Page404 />,
  },
  {
    path: "/cart",
    element: <Dashboard show={"cart"} />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
  {
    path: '/user-profile',
    element: <User/>
  }

]);

function App() {
  const dispatch = useDispatch()
  const { theme } = useSelector((state) => state.authReducer);
  const { loggedin } = useSelector((state) => state.authReducer);
  useEffect(() => {dispatch(setUser(user))}, [])
  return (
    
    <div className={`shop-app shop-${theme}`}>
   
      {!loggedin ? <LogIn /> : <RouterProvider router={router} />}
    </div>
  );
}

export default App;
