import "./cart.style.scss";
import { ExtraLargeText, LargeText } from "../../components/Typography";
import ProductItem from "../../components/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { setCartProducts, setProducts } from "../../redux/actions";
import { useEffect, useRef, useState } from "react";
import Summary from "../Summary";
import Button from "../../components/Button";
import Toast from "../../components/Toast";
import { useStateCallback } from "../../utils";

const Cart = function (props) {
  const { cartproducts } = useSelector((state) => state.productsReducer);
  const [items, setItems] = useStateCallback(false);
  const [summaryOpen, setSummaryOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [cartValues, setCartValues] = useState({
    Shipping: 0,
    Subtotal: 0,
    Tax: 0,
  });
  const dispatch = useDispatch();
  useEffect(() => {
    setProducts(dispatch);
  }, []);
  useEffect(() => {
    setItems(cartproducts);
  }, []);
  useEffect(() => {
    if (!items) return;
    const prices = items.map((item) => item.price * (item.count || 1));
    const Subtotal = prices.reduce((acc, item) => acc + item, 0).toFixed(2);
    const Shipping = +Subtotal > 100 ? "free shipping" : "10$";
    const Tax = "20%";
    setCartValues({ Shipping, Subtotal, Tax });
  }, [items]);

  useEffect(() => {
    props.searchValue !== null &&
      items &&
      setItems((prev) =>
        cartproducts.filter((item) =>
          item.title.toLowerCase().includes(props.searchValue.toLowerCase())
        )
      );
  }, [props.searchValue]);

  const onDeleteItem = (id) => (e) => {
    setItems(
      (prev) => prev.filter((item) => item.id !== id),
      (newValue) => dispatch(setCartProducts(newValue))
    );
  };

  const onIncrement = (id) => (value) => {
    setItems((prev) =>
      prev.map((item) => (item.id !== id ? item : { ...item, count: value }))
    );
  };

  const showSummary = () => {
    setSummaryOpen(true);
  };
  const hideSummary = () => {
    setSummaryOpen(false);
  };
  const handleCheckout = () => {
    setShowToast(true);
    const timeout = setTimeout(() => {
      setShowToast(false);
      clearTimeout(timeout);
    }, 3000);
  };

  return (
    <div className="shop-cart">
      {showToast && (
        <Toast
          type={"success"}
          message={"Vasa kupovina je uspesno izvrsena."}
        />
      )}
      <div className="shop-cart-header">
        <LargeText>Shopping cart</LargeText>
        {items && items[0] && (
          <Button title={"checkout"} onClick={showSummary} />
        )}
      </div>
      {summaryOpen && (
        <Summary
          handleClose={hideSummary}
          values={cartValues}
          checkOut={handleCheckout}
        />
      )}
      <div className={"shop-table"}>
        <table>
          <thead>
            <tr>
              <th className={"shop-products-item"}>Item</th>
              <th>Rate</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {items &&
              items.map((item) => (
                <ProductItem
                  id={item.id}
                  key={item.id}
                  price={item.price}
                  rating={item.rating}
                  quantity={item.count}
                  img={item.image}
                  name={item.title}
                  description={item.category}
                  handleAction={onDeleteItem}
                  onIncrement={onIncrement}
                />
              ))}
          </tbody>
        </table>
        {(items === null || (items && !items[0])) && (
          <div className="shop-cart-empty">
            <ExtraLargeText>Nothing to show.</ExtraLargeText>
          </div>
        )}
      </div>
    </div>
  );
};
export default Cart;
