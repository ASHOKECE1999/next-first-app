"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

const ErrorBlog = ({ error, reset }: { error: Error; reset: () => void }) => {
  console.error("Error in Blog File: ", error.message);
  const router = useRouter();
  const reload=()=>{
    startTransition(()=>{
        router.refresh();
      reset();
    })  
  return (
    <div>
      Error in Blog File :{error.message}
      <button className="bg-black text-white rounded-2xl p-2" onClick={reload}>
        Try Again
      </button>
    </div>
  );
};

export default ErrorBlog
