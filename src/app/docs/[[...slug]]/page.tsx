import React from "react";

const DocsHome = async ({
  params,
}: {
  params: Promise<{ slugTotoal: string[] }>;
}) => {
  const slugArray = await params;
  console.log("slugArray: ", slugArray);
  return <div>DocsHome</div>;
};

export default DocsHome;
