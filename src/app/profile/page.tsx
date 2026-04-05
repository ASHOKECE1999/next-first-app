import { title } from "process";
import React from "react";
import Link from "next/link";

export const metadata = {
  title: {
    absolute: "Profile Page",
  },
};

const ProfilePage = () => {
  return (
    <div>
      ProfilePage!!!!!!!!
      <Link href="/blog">Go to Blog</Link>
    </div>
  );
};

export default ProfilePage;
