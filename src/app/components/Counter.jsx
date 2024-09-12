"use client";
import { useState } from "react";

export default function Counter({ quantity }) {
  const [count, setCount] = useState(quantity);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="flex items-center gap-1">
      <div className="border border-gray-700 w-52 pt-1 pb-1 text-center">
        <span className="pr-5 text-sm">Quantity</span>
        <button onClick={handleDecrement}>-</button>
        <input
          className="w-10 text-center"
          type="text"
          value={count}
          readOnly
        />
        <button onClick={handleIncrement}>+</button>
      </div>

      <button className="bg-black text-white pt-[6px] pb-[7px] pl-8 pr-8 text-sm">
        Add to Cart
      </button>
    </div>
  );
}
