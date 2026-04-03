import React from "react";

const ProductDetails = async ({
  params,
}: {
  params: Promise<{ productid: string }>;
}) => {
  //const productid = (await params).productid;
  const { productid } = await params;
  return (
    <div>
      ProductDetails!!!!!!!!!
      <h1>Product ID: {productid}</h1>
    </div>
  );
};

export default ProductDetails;
