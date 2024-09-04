import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import "./counter.style.scss";
import IconButton from "../../IconButton";
import { MediumText } from "../../Typography";
import { useState, useEffect } from "react";
import { acceptPositive } from "../../../utils";


const Counter = function ({ getCounterValue, initialCounterValue }) {
  const [count, setCount] = useState(initialCounterValue || 1);
  const [firstClick, setFirstClick] = useState(false);

  const increment = (value) => (e) => {
    setFirstClick(true)
    setCount((prev) => acceptPositive(prev + value));
  };
  useEffect(() => {
    firstClick && getCounterValue(count);
  }, [count, firstClick]);
  return (
    <div className="shop-counter">
      <IconButton
        handleClick={increment(-1)}
        img={<CiCircleMinus size={20} />}
      />
      <MediumText>{count}</MediumText>
      <IconButton
        handleClick={increment(+1)}
        img={<CiCirclePlus size={20} />}
      />
    </div>
  );
};

export default Counter;
