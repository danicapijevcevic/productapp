import IconButton from "../../components/IconButton";
import { LargeText, MediumText, SmallText } from "../../components/Typography";
import { TiDeleteOutline } from "react-icons/ti";
import "./summary.style.scss";
import { setToggleCart } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Button from "../../components/Button";

const Summary = function (props) {
  const dispatch = useDispatch();
  const [items, setItems] = useState([
    { id: 1, name: "Subtotal", value: null },
    { id: 2, name: "Shipping", value: null },
    { id: 3, name: "Tax", value: null },
  ]);
  const handleClose = () => {
    dispatch(setToggleCart(false));
  };


  return (
    <div className="shop-summary">
      <div className="shop-summary-close">
        <IconButton
          handleClick={props.handleClose}
          img={<TiDeleteOutline size={20} />}
        />
      </div>
      <LargeText>Summary</LargeText>
      <div className="shop-summary-items">
        {items.map((item) => (
          <div key={item.id} >
            <SmallText>{item.name}</SmallText>
        <MediumText>{props.values[item.name]}</MediumText>
          </div>

        ))}
      </div>
      <div className='shop-summary-promo'>
      <SmallText>Promocode</SmallText>
      <input type='text' placeholder='enter code'/>
      </div>
      <div className='shop-summary-checkout'>
      <Button title={'Checkout'} onClick={props.checkOut} />
      </div>
    </div>
  );
};
export default Summary;
