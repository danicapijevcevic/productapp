import { LargeText, MediumText, SmallText } from "../../components/Typography";
import { TiDeleteOutline } from "react-icons/ti";
import IconButton from "../../components/IconButton";
import Counter from "./Counter";
import { GoStar, GoStarFill } from "react-icons/go";
import { CiShoppingCart } from "react-icons/ci";

const ProductItem = function (props) {
  return (
    <tr>
      <td className={"shop-products-item"}>
        <div>
          <img src={props.img} />
        </div>
        <div>
          <MediumText>{props.name} </MediumText>
          <SmallText>{props.description} </SmallText>
        </div>
      </td>
      <td>
        <div className="shop-products-rating">
          {[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }].map((item) =>
            item.id <= props.rating.rate ? (
              <GoStarFill size={12} key={item.id} />
            ) : (
              <GoStar size={12} key={item.id} />
            )
          )}
        </div>
      </td>
      <td>
        <Counter getCounterValue={props.onIncrement(props.id)} initialCounterValue={props.quantity} />
      </td>
      <td>
        <MediumText>{props.price}</MediumText>
      </td>
      <td>
        <IconButton
          handleClick={props.handleAction(props.id)}
          img={props.parent !== 'products' ? <TiDeleteOutline size={25}  /> : <CiShoppingCart size={20} />}
        />
      </td>
    </tr>
  );
};
export default ProductItem;


