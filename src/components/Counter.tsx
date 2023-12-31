import { useState } from 'react';
import type { RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
  reset
} from '../slices/counterSlice';

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementAccount, setIncrementAccount] = useState(0);
  const [decrementAccount, setDecrementAccount] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
        <div>
          <input
            type="number"
            value={incrementAccount}
            onChange={(e) => setIncrementAccount(Number(e.target.value))}
          />
          <button onClick={() => dispatch(incrementByAmount(incrementAccount))}>
            Increment by {incrementAccount}
          </button>
        </div>
        <div>
          <input
            type="number"
            value={decrementAccount}
            onChange={(e) => setDecrementAccount(Number(e.target.value))}
          />
          <button onClick={() => dispatch(decrementByAmount(decrementAccount))}>
            Decrement by {decrementAccount}
          </button>
        </div>
      </div>
      <div>
        <button onClick={() => dispatch(reset())}>RESET</button>
      </div>
    </div>
  );
};

export default Counter;
