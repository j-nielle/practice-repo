import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);

  /**
   * This function increases the count value by the incrementBy value
   */
  function increment() {
    //setCount(count * incrementBy);
    setCount(count + incrementBy);
  }

  function decrement() {
    //setCount(count / incrementBy);
    setCount(count - incrementBy);
  }

  /**
   * This function increases the incrementBy value by 1
   */
  function increaseIncrement() {
    setIncrementBy(incrementBy + 1);
  }

  function decreaseIncrement() {
    setIncrementBy(incrementBy - 1);
  }

  return (
    <div>
      <p>Count value is: {count}</p>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>

      <p>Increment the value by: {incrementBy}</p>
      <div>
        <button onClick={increaseIncrement}>Increase Increment</button>
        <button onClick={decreaseIncrement}>Decrease Increment</button>
      </div>
    </div>
  );
}
