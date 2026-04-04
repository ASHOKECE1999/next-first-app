"use client";

import { usePathname } from "next/navigation";
import React from "react";

const NotFound = () => {
  const pathname = usePathname();
  const productid = pathname.split("/")[2];
  const reviewid = pathname.split("/")[4];
  return (
    <div>
      NotFound Reviews
      <h1 className="text-red-600">
        productID: {productid} with review ID: {reviewid} Not Found
      </h1>
    </div>
  );
};

export default NotFound;
