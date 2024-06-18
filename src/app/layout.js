"use client";
import * as React from "react";
import "./globals.css";
import { createContext, useEffect, useState } from "react";

import Navbar from "@/components/Navbar";
export const Context = createContext();

export default function RootLayout({ children }) {
  const [currentUser, setCurrentUser] = useState(
    typeof window !== "undefined" && localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null,
  );

  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined" && localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    return "light";
  });
  const updateUser = (data) => {
    setCurrentUser(data);
  };

  useEffect(() => {
    if (currentUser !== null) {
      localStorage.setItem("user", JSON.stringify(currentUser));
    }

    localStorage.setItem("theme", theme);
    document.documentElement.className = theme;
  }, [currentUser, theme]);

  const initialThemeScript = `
    (function() {
      const theme = localStorage.getItem('theme') ;
      document.documentElement.className = theme;
    })();
  `;

  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: initialThemeScript }} />
      </head>
      <body className="">
        <Context.Provider value={{ currentUser, updateUser }}>
          <nav className="">
            <Navbar setDark={setTheme} dark={theme} />
          </nav>

          <div className="">{children}</div>
        </Context.Provider>
      </body>
    </html>
  );
}
