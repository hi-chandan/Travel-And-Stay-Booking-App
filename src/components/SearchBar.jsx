import { useState } from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const types = ["Buy", "Rent"];

function SearchBar() {
  const [query, setQuery] = useState({
    type: "Buy",
    city: "",
    minPrice: 0,
    maxPrice: 0,
  });

  console.log("This is query ", query);

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  const handleChange = (e) => {
    setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price"
          onChange={handleChange}
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max Price"
          onChange={handleChange}
        />
        <Link
          href={`/list?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}
        >
          <button>
            <img src="/search.png" alt="" />
          </button>
        </Link>
      </form>
    </div>
  );
}

function DropdownWithSearchBar() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <button className="w-28 p-4 font-bold">Filter</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="font-bold text-copy-secondary">
        <SearchBar />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default DropdownWithSearchBar;
