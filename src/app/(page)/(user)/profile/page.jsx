"use client";

import api from "@/lib/request";
import React, { useEffect } from "react";

const page = () => {
  useEffect(() => {
    api
      .get("/profile")
      .then((val) => console.log(val))
      .catch((err) => console.log(err));
  }, []);

  return <div>This is user profile</div>;
};

export default page;
