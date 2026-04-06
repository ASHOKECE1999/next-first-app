"use client";
import React from "react";
import { useRouter } from "next/navigation";
// practising the navigation programitacally using Link and a tags

const OrderProduct = () => {
  const router = useRouter();
  const placeOrder = () => {
    router.replace("/");
  };
  return (
    <div>
      OrderProduct
      <button onClick={placeOrder}>Go to Product 123</button>
    </div>
  );
};

export default OrderProduct;
