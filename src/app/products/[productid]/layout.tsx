import React from "react";

const LayoutProduct = ({ children }: { children: React.ReactNode }) => {
  console.log(children);
  return (
    <div>
      {children}
      LayoutProduct
    </div>
  );
};

export default LayoutProduct;
