import React from "react";

const MyBlog = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Blog data loaded");
    }, 4000);
  });
  return <div>MyBlog!!!!!!!!!</div>;
};

export default MyBlog;
