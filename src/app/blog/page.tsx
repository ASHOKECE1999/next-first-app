"use client";

import React from "react";

const MyBlog = () => {
  console.log("Refreshed");
  throw new Error("Error loading blog data");

  return <div>MyBlog!!!!!!!!!</div>;
};

export default MyBlog;
