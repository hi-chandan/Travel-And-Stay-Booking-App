"use client";

import useDebounce from "@/lib/useDebounce";
import React, { useContext, useEffect, useState } from "react";
import "./globals.css";
import SearchBar from "@/components/SearchBar";
import { allProduct } from "@/service/Post";
import Card from "@/components/Posts";

const Page = () => {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");
  const [filter, setFilter] = useState(false);
  const [buy, SetBuy] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const debouncingSearch = useDebounce(search, 1000);
  const debouncingCity = useDebounce(city, 1000);
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
    <section className=" text-dark-text flex-col pt-2 justify-center items-center ">
      <div className="relative  flex flex-col items-center justify-center p-2">
        <div className="sm:flex relative">
          <div className="">
            <input
              type="text"
              className="bg-background text-copy-secondary pl-14 border-2 border-border rounded-md p-4 outline-none text-lg font-bold"
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
              className="bg-background text-copy-secondary pl-14 border-2 border-border rounded-md  outline-none text-lg font-bold p-4"
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
          <SearchBar
            blurBackground={blurBackground}
            filter={filter}
            SetBuy={SetBuy}
            setMin={setMin}
            setMax={setMax}
          />
        </div>
        <Card search={search} city={city} buy={buy} min={min} max={max} />
      </div>
    </section>
  );
};

export default Page;
