import React from "react";
const SearchBar = ({ blurBackground, buyFilter, RentFilter, filter, buy }) => {
  return (
    <div
      className=" relative   max-sm:bottom-12 max-sm:w-full z-40  sm:ml-2 rounded-md border-2 text-white border-border bg-blue h-[63px] text-center w-28 bg-light font-bold text-xl

            "
    >
      <button
        onClick={blurBackground}
        className=" p-4 font-bold  max-sm:w-full "
      >
        Filter
      </button>
      {filter && (
        <div className="slideBar  max-sm:fixed h-3/5  w-full sm:w-96   flex flex-col item-center  bottom-0 left-0 bg-transparent  max-sm:p-10  rounded-md">
          <div className="flex  justify-center p-4  gap-6">
            <p
              className={`p-4 w-28 rounded-md border-2 border-border ${
                buy === "Buy" ? "bg-light" : ""
              } `}
              onClick={buyFilter}
            >
              Buy
            </p>
            <p
              className={`p-4 w-28 rounded-md border-2 border-border ${
                buy === "Rent" ? "bg-light" : ""
              } `}
              onClick={RentFilter}
            >
              Rent
            </p>
          </div>
          <div className="flex   ">
            <p className=" text-copy-secondary w-40">Min Price</p>

            <input
              type="text"
              className="mb-2 p-2 w-full border-2
                    bg-background border-border
                    rounded-md
                    text-copy-secondary"
              placeholder="Min Price"
            />
          </div>
          <div className="flex  ">
            <p className="text-copy-secondary w-40">Max Price</p>
            <input
              type="text"
              className="mb-2 p-2 w-full border-2 border-border bg-background
                    rounded-md
                    text-copy-secondary"
              placeholder="Min Price"
            />
          </div>

          <button
            onClick={blurBackground}
            className="w-full p-1 bg-light text-white rounded-md"
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
