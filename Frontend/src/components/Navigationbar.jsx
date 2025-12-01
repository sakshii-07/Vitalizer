import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function getInitialTheme() {
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export const Navigationbar = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((t) => (t === "light" ? "dark" : "light"));
  };

  return (
    <nav className="bg-white [.dark_&]:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 [.dark_&]:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap [.dark_&]:text-white">
            Vitalizer
          </span>
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-8 font-medium">
          <li>
            <Link
              to="/home"
              className="text-gray-900 hover:text-blue-700 [.dark_&]:text-white [.dark_&]:hover:text-blue-400"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="text-gray-900 hover:text-blue-700 [.dark_&]:text-white [.dark_&]:hover:text-blue-400"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/services"
              className="text-gray-900 hover:text-blue-700 [.dark_&]:text-white [.dark_&]:hover:text-blue-400"
            >
              Services
            </Link>
          </li>

          <li>
            <Link
              to="/contacts"
              className="text-gray-900 hover:text-blue-700 [.dark_&]:text-white [.dark_&]:hover:text-blue-400"
            >
              Contact
            </Link>
          </li>

          {/* ✅ NEW — Medical Assistant */}
          <li>
            <Link
              to="/assistant"
              className="text-gray-900 hover:text-blue-700 [.dark_&]:text-white [.dark_&]:hover:text-blue-400"
            >
              Assistant
            </Link>
          </li>
        </ul>


        {/* Right side: Theme toggle + Auth buttons */}
        <div className="flex items-center space-x-4">
          {/* Theme toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-300 [.dark_&]:border-gray-600 text-gray-600 [.dark_&]:text-gray-200 hover:bg-gray-100 [.dark_&]:hover:bg-gray-700 active:scale-95 transition"
          >
            {theme === "light" ? (
              // Sun Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              // Moon Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M21 12.79A9 9 0 0 1 12.21 3 7 7 0 0 0 12 17a7 7 0 0 0 9-4.21Z" />
              </svg>
            )}
          </button>

          {/* Login + Sign Up */}
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 active:scale-95 transition px-4 py-2 rounded-lg text-sm"
          >
            Login
          </button>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 active:scale-95 transition px-4 py-2 rounded-lg text-sm"
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};
