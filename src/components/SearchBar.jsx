import React, { useState } from "react";

const SearchBar = ({ blurBackground, filter, SetBuy, setMin, setMax }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const minPrice = formData.get("minPrice");
    const maxPrice = formData.get("maxPrice");
    SetBuy(selectedOption);
    setMin(minPrice);
    setMax(maxPrice);

    blurBackground();
  };

  const handleReset = () => {
    const form = document.getElementById("searchForm");
    if (form) {
      form.reset();
      setSelectedOption("");
    }
  };

  return (
    <div className="relative  max-sm:bottom-12 max-sm:w-full sm:ml-2 rounded-md border-2 text-white border-border bg-blue h-[63px] text-center w-28 bg-light font-bold text-xl">
      <button
        onClick={blurBackground}
        className=" p-4 font-bold max-sm:w-full "
      >
        Filter
      </button>
      {filter && (
        <div className="slideBar p-7  bg-navbar max-sm:fixed w-full sm:w-96 border-2 border-border flex flex-col items-center max-sm:bottom-0  max-sm:left-0 max-sm:p-10 rounded-md sm:relative sm:right-20 ">
          <div className=" text-right w-full">
            <button
              onClick={handleReset}
              className="bg-light p-1 w-24 rounded-md"
            >
              Reset
            </button>
          </div>
          <div className="flex bg-navbar justify-center p-4 gap-6">
            <p
              className={`p-4 w-28 text-copy-primary rounded-md border-2 border-border ${
                selectedOption === "Buy" ? "bg-light" : ""
              }`}
              onClick={() => setSelectedOption("Buy")}
            >
              Buy
            </p>
            <p
              className={`p-4 w-28 text-copy-primary rounded-md border-2 border-border ${
                selectedOption === "Rent" ? "bg-light" : ""
              }`}
              onClick={() => setSelectedOption("Rent")}
            >
              Rent
            </p>
          </div>

          <form id="searchForm" onSubmit={handleSubmit}>
            <div className="flex bg-navbar">
              <p className="text-copy-secondary w-40">Min Price</p>
              <input
                type="number"
                className="mb-2 p-2 w-full border-2 bg-background border-border rounded-md text-copy-secondary"
                placeholder="Min Price"
                name="minPrice"
              />
            </div>
            <div className="flex bg-navbar">
              <p className="text-copy-secondary w-40">Max Price</p>
              <input
                type="number"
                className="mb-2 p-2 w-full border-2 bg-background border-border rounded-md text-copy-secondary"
                placeholder="Max Price"
                name="maxPrice"
              />
            </div>

            <button
              type="submit"
              className="w-full p-2 bg-light text-white rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
