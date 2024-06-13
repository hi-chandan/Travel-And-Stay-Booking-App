import { useContext, useState } from "react";
import Link from "next/link";
import { Context } from "@/app/layout";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = ({ setDark, dark }) => {
  const { currentUser } = useContext(Context);

  const darkMode = () => {
    setDark("dark");
  };

  const lightMode = () => {
    setDark("light");
  };

  return (
    <section
      className={`fixed top-0 right-0 left-0 z-50 p-4 shadow-md
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
                <img
                  src={dark === "dark" ? "/menu3.svg" : "menu.svg"}
                  alt="Menu Icon"
                  className="w-8 mr-8 sm:hidden  cursor-pointer "
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className={`bg-background text-dark-text`}>
                <DropdownMenuItem>
                  <Link href="/" className="text-lg font-semibold p-2 block">
                    Home
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/about"
                    className="text-lg font-semibold p-2 block"
                  >
                    About
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/contact"
                    className="text-lg font-semibold p-2 block"
                  >
                    Contact
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/" className="text-lg font-semibold p-2 block">
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
