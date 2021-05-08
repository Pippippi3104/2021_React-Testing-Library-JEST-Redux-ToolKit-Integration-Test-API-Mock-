import { useState } from "react";

export const useCounter = (initialCount: number) => {
  const [count, serCount] = useState(initialCount);

  const increment = () => {
    serCount((count) => count + 1);
  };
  const decrement = () => {
    serCount((count) => count - 1);
  };
  const double = () => {
    serCount((count) => count * 2);
  };
  const triple = () => {
    serCount((count) => count * 3);
  };
  const reset = () => {
    serCount(0);
  };

  return { count, increment, decrement, double, triple, reset };
};
