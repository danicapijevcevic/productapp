import "./products.style.scss";
import { ExtraLargeText, LargeText } from "../../components/Typography";
import ProductItem from "../../components/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { setCartProducts, setProducts } from "../../redux/actions";
import { useEffect, useState } from "react";
import Summary from "../Summary";

const Products = function (props) {
  const { products } = useSelector((state) => state.authReducer);
  const { cartproducts } = useSelector((state) => state.productsReducer);

  const [items, setItems] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    setProducts(dispatch);
  }, []);
  useEffect(() => {
    setItems(products);
  }, [products]);

  useEffect(() => {
    props.searchValue !== null &&
      items &&
      setItems((prev) =>
        products.filter((item) => item.title.toLowerCase().includes(props.searchValue.toLowerCase()))
      );
  }, [props.searchValue]);


  const onAddItem = (id) => (e) => {
    const items_ = cartproducts || [];
    const notInCart = !items_.find((i) => i.id === id);
    const productsItems =
      (notInCart && items_.concat(items.find((i) => i.id === id))) || items_;

    dispatch(setCartProducts(productsItems));
  };

  const onIncrement = (id) => (value) => {
    setItems((prev) =>
      prev.map((item) => (item.id !== id ? item : { ...item, count: value }))
    );
  };

  return (
    <div className="shop-cart">
      <LargeText>Products</LargeText>

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
            {items?.map((item) => (
              <ProductItem
                parent={"products"}
                id={item.id}
                key={item.id}
                price={item.price}
                rating={item.rating}
                quantity={item.quantity}
                img={item.image}
                name={item.title}
                description={item.category}
                handleAction={onAddItem}
                onIncrement={onIncrement}
              />
            ))}
          </tbody>
        </table>
        { (items && !items[0]) && (
          <div className="shop-cart-empty">
            <ExtraLargeText>Nothing to show.</ExtraLargeText>
          </div>
        )}
      </div>
    </div>
  );
};
export default Products;
