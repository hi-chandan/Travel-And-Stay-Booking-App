"use client";
import React, { useContext, useEffect } from "react";
// import { Context } from "../../layout";
import { useRouter } from "next/navigation";

export default function RootLayout({ children }) {
  const router = useRouter();
  // const { currentUser } = useContext(Context);
  // console.log("This is current user ", currentUser);
  // useEffect(() => {
  //   if (!currentUser || currentUser == null) {
  //     router.push("/login");
  //   }
  // }, []);

  return <div>{children}</div>;
}
