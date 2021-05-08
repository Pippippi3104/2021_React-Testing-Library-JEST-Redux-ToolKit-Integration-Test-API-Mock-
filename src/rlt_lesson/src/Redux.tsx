import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCount,
  increment,
  decrement,
  incrementByAmount,
} from "./features/customCounter/customCounterSlice";

type Input = {
  target: {
    value: string;
  };
};

const Redux = () => {
  const [number, setNumber] = React.useState(0);
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  const updateValue = (e: Input) => {
    setNumber(parseInt(e.target.value));
  };

  return (
    <div>
      <h3>Redux Integration Test</h3>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <span data-testid="count-value">{count}</span>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(incrementByAmount(number | 0))}>
          incrementByAmount
        </button>
        <input
          type="text"
          placeholder="Enter"
          value={number}
          onChange={updateValue}
        />
      </div>
    </div>
  );
};

export default Redux;
