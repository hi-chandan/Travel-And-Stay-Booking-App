import { useContext, useState } from "react";
import Link from "next/link";
import { Context } from "@/app/layout";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = ({ setDark }) => {
  const { currentUser } = useContext(Context);
  const darkMode = () => {
    setDark("dark");
  };

  const lightMode = () => {
    setDark("light");
  };

  return (
    <section
      className={`fixed top-0 right-0 left-0 z-50 p-4 shadow-md bg-navbar
      `}
    >
      <div className="   flex  justify-center ">
        <nav className="flex max-sm:w-full justify-between items-center w-8/12 ">
          <div className="flex  items-center">
            <span className="ml-6 text-2xl font-bold hover:scale-125 transition-transform">
              <span className="text-red-600">Ck</span>
              <span className="text-green-600 mr-6">ESTATE</span>
            </span>
            <div className="hidden sm:flex items-center ml-6 space-x-8 mt-3 text-lg font-semibold text-copy-secondary">
              <Link href="/">Home</Link>
              <Link href="/list">List</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
          <div className="flex  items-center gap-6  text-copy-secondary font-bold">
            <Link href="/login">Login</Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-copy-secondary   cursor-pointer">
                Mode
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className={` text-center text-dark-text  bg-background `}
              >
                <DropdownMenuItem>
                  <button onClick={darkMode} className="font-semibold p-2">
                    dark Mode
                  </button>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <button onClick={lightMode} className="font-semibold p-2">
                    light Mode
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <svg
                  className={` fill-light w-8`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width="50px"
                  height="50px"
                >
                  <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z" />
                </svg>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background  text-dark-text">
                <DropdownMenuItem asChild className="text-lg font-semibold p-4">
                  <Link href="/" className=" ">
                    Home
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="text-lg font-semibold p-4">
                  <Link href="/about" className="">
                    About
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="text-lg font-semibold p-4">
                  <Link href="/contact" className=" ">
                    Contact
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="text-lg font-semibold p-4">
                  <Link href="/" className="">
                    Blog
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
