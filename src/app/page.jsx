"use client";

import useDebounce from "@/lib/useDebounce";
import React, { useContext, useEffect, useState } from "react";
import "./globals.css";
import { Context } from "./layout";

const Page = () => {
  const { theme } = useContext(Context);
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");
  const [filter, setFilter] = useState(false);
  const debouncingSearch = useDebounce(search, 1000);
  const debouncingCity = useDebounce(city, 1000);
  console.log("This is in app theme", theme);
  const blurBackground = () => {
    setFilter((val) => !val);
  };

  useEffect(() => {
    if (debouncingCity) {
      console.log("this is City ", debouncingCity);
    }
    if (debouncingSearch) {
      console.log("this is debouncing ", debouncingSearch);
    }
  }, [debouncingSearch, debouncingCity]);

  return (
    <section className=" text-dark-text flex pt-2 justify-center items-center">
      {filter && (
        <div className="absolute inset-0 backdrop-blur-md z-20 w-screen h-screen  "></div>
      )}
      <div className="relative  flex justify-center p-2">
        <div className="sm:flex relative">
          <div className="">
            <input
              type="text"
              className="bg-background text-copy-secondary pl-14 border-2 border-border rounded-sm p-4 outline-none text-lg font-bold"
              placeholder="Search By Name"
              name="search"
              onChange={(e) => setSearch(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 relative bottom-10 left-4 text-light"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
              />
            </svg>
          </div>
          <div className="max-sm:relative bottom-5">
            <input
              type="text"
              className="bg-background text-copy-secondary pl-14 border-2 border-border rounded-sm outline-none text-lg font-bold p-4"
              placeholder="Search By Name"
              name="search"
              onChange={(e) => setCity(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-6 relative bottom-12 left-4 fill-light`}
              viewBox="0 0 384 512"
            >
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
            </svg>
          </div>
          <div
            className={` relative   max-sm:bottom-12 z-40 w-full sm:ml-2 border-2 text-white border-border bg-blue h-[63px] rounded-md bg-light font-bold text-xl

            `}
          >
            <button
              onClick={blurBackground}
              className="w-28 p-4 font-bold  max-sm:w-full "
            >
              Filter
            </button>
            {filter && (
              <div className="fixed h-2/3    bottom-0 left-0  bg-transparent p-4  rounded-md">
                <input
                  type="text"
                  className="mb-2 p-2 w-full border-2 border-border"
                  placeholder="Min Price"
                />
                <input
                  type="text"
                  className="mb-2 p-2 w-full border-2 border-border"
                  placeholder="Max Price"
                />
                <button
                  onClick={blurBackground}
                  className="w-full p-2 bg-gray-700 text-white rounded-md"
                >
                  Submit
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
