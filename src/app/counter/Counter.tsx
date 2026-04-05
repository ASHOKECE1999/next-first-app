"use client";

import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div className="flex  align-center">
      Counter <span className="ml-4 font-bold text-8xl">{count}</span>
      <button
        onClick={() => setCount(count + 1)}
        className="m-4 b-3 p-2 bg-amber-300 rounded-2xl"
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
