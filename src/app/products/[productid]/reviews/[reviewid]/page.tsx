import React from "react";

const ReviewDetails = async ({
  params,
}: {
  params: Promise<{ productid: string; reviewid: string }>;
}) => {
  const { productid, reviewid } = await params;
  console.log("productid: ", productid);
  console.log("reviewid: ", reviewid);

  return (
    <div>
      ReviewDetails
      <h1>
        productID: {productid} with review ID: {reviewid}
      </h1>
    </div>
  );
};

export default ReviewDetails;
