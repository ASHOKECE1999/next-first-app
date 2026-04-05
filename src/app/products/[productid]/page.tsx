import React from "react";
import { Metadata } from "next";
type Props = {
  params: Promise<{ productid: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { productid } = await params;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Product ${productid} Details`);
    }, 100);
  });
  return {
    title: `Apple ${title} Details`,
  } as Metadata;
};

const ProductDetails = async ({ params }: Props) => {
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
