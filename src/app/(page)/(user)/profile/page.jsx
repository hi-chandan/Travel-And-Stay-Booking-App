"use client";

import Api from "@/lib/request";
import React, { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    Api.get("/profile")
      .then((val) => console.log(val))
      .catch((err) => console.log(err));
  }, []);

  return <div>This is user profile</div>;
};

export default Page;
