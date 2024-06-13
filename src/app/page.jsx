"use client";

import useDebounce from "@/lib/useDebounce";
import React, { useContext, useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Context } from "./layout";

const Page = () => {
  const { theme } = useContext(Context);
  const [search, setSearch] = useState();
  const [city, setCity] = useState();
  const debouncingSearch = useDebounce(search, 1000);
  useEffect(() => {
    if (debouncingSearch) {
      console.log("this is debouncing ", debouncingSearch);
    }
  }, [debouncingSearch]);

  return (
    <section className="text-dark-text flex pt-2 justify-center items-center ">
      <div className=" flex justify-centerw-8/12  max-sm:w-full p-2">
        <div className="  flex  ">
          <div className="">
            <input
              type="text"
              className="  bg-background text-copy-secondary pl-14 border-2 border-border rounded-sm p-4 outline-none text-lg font-bold    "
              placeholder="Search By Name"
              name="search"
              onChange={(e) => setSearch(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-6  relative bottom-10 left-4 ${
                theme === "dark" ? "text-gray-500" : "text-green-600"
              } `}
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
              />
            </svg>
          </div>
          <div className="">
            <input
              type="text"
              className=" bg-background text-copy-secondary pl-14 border-2 border-border rounded-sm outline-none text-lg font-bold  p-4 "
              placeholder="Search By Name"
              name="search"
              onChange={(e) => setCity(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-6  relative bottom-12 left-4 ${
                theme === "dark" ? "fill-gray-500" : "fill-green-600"
              } `}
              viewBox="0 0 384 512"
            >
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
            </svg>
          </div>
          <div
            className={`border-2 ml-2  text-white border-border bg-blue h-[63px] rounded-sm ${
              theme === "dark" ? "bg-gray-800" : "bg-green-600"
            }`}
          >
            <DropdownMenu>
              <DropdownMenuTrigger>
                <button className={`   w-28  p-4  font-bold `}>Filter</button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="font-bold text-copy-secondary">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
